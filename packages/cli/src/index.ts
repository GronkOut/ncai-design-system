#!/usr/bin/env node
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { stdin as input, stdout as output } from 'node:process';
import { createInterface } from 'node:readline/promises';
import { baseUiGuidance, designSystem, searchDesignSystem } from '@ncai/design-system';

type Command = 'setup' | 'setup-mcp' | 'install-skill' | 'doctor' | 'validate' | 'show' | 'help';
type AgentChoice = 'cursor' | 'vscode' | 'claude' | 'codex' | 'windsurf' | 'jetbrains' | 'manual';
type PackageJson = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

const args = process.argv.slice(2);
const command = normalizeCommand(args[0]);
const require = createRequire(import.meta.url);

const designSystemPackage = '@ncai/design-system';
const iconsPackage = '@ncai/design-system-icons';
const cliPackage = '@ncai/design-system-cli';
const mcpPackage = '@ncai/design-system-mcp';
const skillsPackage = '@ncai/design-system-skills';
const baseUiPackage = baseUiGuidance.packageName;
const mcpServerName = 'ncai-design-system';
const skillName = 'ncai-design-system';
const agentChoices = ['cursor', 'vscode', 'claude', 'codex', 'windsurf', 'jetbrains', 'manual'] as const;
const agentLabels: Record<AgentChoice, string> = {
  cursor: 'Cursor',
  vscode: 'VS Code / GitHub Copilot',
  claude: 'Claude Code',
  codex: 'OpenAI Codex CLI',
  windsurf: 'Windsurf',
  jetbrains: 'JetBrains AI Assistant',
  manual: 'Manual / 기타'
};

function normalizeCommand(value: string | undefined): Command {
  if (!value || value === '--help' || value === '-h') return 'help';
  if (value === 'mcp' && args[1] === 'init') return 'setup-mcp';
  if (value === 'skills' && args[1] === 'install') return 'install-skill';
  if (['setup', 'setup-mcp', 'install-skill', 'doctor', 'validate', 'show'].includes(value)) return value as Command;
  return 'help';
}

function optionValue(name: string) {
  const inline = args.find((arg) => arg.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

function hasFlag(name: string) {
  return args.includes(name);
}

function normalizeAgent(value: string | undefined): AgentChoice | undefined {
  if (!value) return undefined;
  const normalized = value.toLowerCase();
  if (normalized === 'vs-code' || normalized === 'visual-studio-code') return 'vscode';
  if (normalized === 'copilot' || normalized === 'github-copilot') return 'vscode';
  if (normalized === 'claude-code' || normalized === 'anthropic') return 'claude';
  if (normalized === 'openai' || normalized === 'codex-cli') return 'codex';
  if (normalized === 'windsurf-ide' || normalized === 'codeium') return 'windsurf';
  if (normalized === 'intellij' || normalized === 'idea' || normalized === 'jetbrains-ai') return 'jetbrains';
  return agentChoices.includes(normalized as AgentChoice) ? (normalized as AgentChoice) : undefined;
}

async function selectAgent(action: string): Promise<AgentChoice | undefined> {
  const requested = optionValue('--agent') ?? optionValue('--ide');
  const agent = normalizeAgent(requested);
  if (agent) return agent;

  if (requested) {
    console.error(`지원하지 않는 에이전트입니다: ${requested}`);
    console.error(`지원 값: ${agentChoices.join(', ')}`);
    process.exitCode = 1;
    return undefined;
  }

  if (!process.stdin.isTTY || !process.stdout.isTTY || hasFlag('--yes') || hasFlag('-y')) {
    return 'cursor';
  }

  const rl = createInterface({ input, output });
  try {
    console.log(`${action} 대상 에이전트를 선택하세요.`);
    agentChoices.forEach((choice, index) => {
      console.log(`${index + 1}. ${agentLabels[choice]}`);
    });
    const answer = (await rl.question('번호 또는 이름 입력: ')).trim().toLowerCase();
    const numberedChoices = Object.fromEntries(agentChoices.map((choice, index) => [String(index + 1), choice])) as Record<string, AgentChoice>;
    return normalizeAgent(answer) ?? numberedChoices[answer];
  } finally {
    rl.close();
  }
}

async function pathExists(path: string) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function readJson<T>(path: string): Promise<T | undefined> {
  try {
    return JSON.parse(await readFile(path, 'utf8')) as T;
  } catch {
    return undefined;
  }
}

async function writeJson(path: string, data: unknown) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

async function writeMarkdown(path: string, content: string) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content.endsWith('\n') ? content : `${content}\n`, 'utf8');
}

function mcpServerConfig() {
  return {
    command: 'npx',
    args: ['-y', mcpPackage]
  };
}

function agentInstructions() {
  return `# NC AI Design System Agent Instructions

- Read NC AI design-system.md before creating or reviewing UI.
- Use Base UI primitives from ${baseUiPackage} before creating custom interactive components.
- Use SVG icons from ${iconsPackage} before inventing new icon paths.
- Apply NC AI design guidance in the consuming app at implementation time.
- Prefer MCP server ${mcpServerName} when available.
- Validate generated UI with: npx ${cliPackage} validate --file <path>
`;
}

function mcpSnippet() {
  return {
    mcpServers: {
      [mcpServerName]: mcpServerConfig()
    }
  };
}

function agentInstructionTarget(agent: AgentChoice) {
  const customPath = optionValue('--path');
  if (customPath) return resolve(customPath);

  return resolve(agentInstructionRelativeTarget(agent));
}

function agentInstructionRelativeTarget(agent: AgentChoice) {
  const targets: Record<AgentChoice, string> = {
    cursor: `.cursor/skills/${skillName}/SKILL.md`,
    vscode: '.github/copilot-instructions.md',
    claude: 'CLAUDE.md',
    codex: 'AGENTS.md',
    windsurf: '.windsurfrules',
    jetbrains: '.ncai/jetbrains-agent-instructions.md',
    manual: '.ncai/agent-instructions.md'
  };

  return targets[agent];
}

function agentMcpRelativeTarget(agent: AgentChoice) {
  const targets: Record<AgentChoice, string> = {
    cursor: '.cursor/mcp.json',
    vscode: '.vscode/mcp.json',
    claude: '.mcp.json',
    codex: '.ncai/codex-mcp.json',
    windsurf: '.ncai/windsurf-mcp.json',
    jetbrains: '.ncai/jetbrains-mcp.json',
    manual: '.ncai/manual-mcp.json'
  };

  return targets[agent];
}

function installCommand(packages: string[], dev = false) {
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  return `${npmCommand} i${dev ? ' -D' : ''} ${packages.join(' ')}`;
}

async function installSkill(agent?: AgentChoice) {
  const selectedAgent = agent ?? (await selectAgent('Agent Skill 설치'));
  if (!selectedAgent) return;

  if (selectedAgent === 'cursor') {
    const skillSource = require.resolve(`${skillsPackage}/ncai-design-system/SKILL.md`);
    const skill = await readFile(skillSource, 'utf8');
    const target =
      optionValue('--target') === 'cursor-user'
        ? join(homedir(), '.cursor', 'skills', skillName)
        : resolve(optionValue('--path') ?? `.cursor/skills/${skillName}`);

    await mkdir(target, { recursive: true });
    await writeFile(join(target, 'SKILL.md'), skill, 'utf8');
    console.log(`NC AI Cursor Skill을 설치했습니다: ${target}`);
    return;
  }

  if (selectedAgent === 'vscode') {
    const target = agentInstructionTarget(selectedAgent);
    await writeMarkdown(target, agentInstructions());
    console.log(`VS Code/GitHub Copilot 지침을 작성했습니다: ${target}`);
    return;
  }

  const target = agentInstructionTarget(selectedAgent);
  await writeMarkdown(target, agentInstructions());
  console.log(`${agentLabels[selectedAgent]} 지침을 작성했습니다: ${target}`);
}

async function setupMcp(agent?: AgentChoice) {
  const selectedAgent = agent ?? (await selectAgent('MCP 설정'));
  if (!selectedAgent) return;

  if (selectedAgent === 'cursor') {
    const target = resolve(optionValue('--target') ?? '.cursor/mcp.json');
    const existing = (await pathExists(target)) ? ((await readJson<{ mcpServers?: Record<string, unknown> }>(target)) ?? {}) : {};
    await writeJson(target, {
      ...existing,
      mcpServers: {
        ...(existing.mcpServers ?? {}),
        [mcpServerName]: mcpServerConfig()
      }
    });
    console.log(`Cursor MCP 설정을 작성했습니다: ${target}`);
    return;
  }

  if (selectedAgent === 'vscode') {
    const target = resolve(optionValue('--target') ?? '.vscode/mcp.json');
    const existing = (await pathExists(target)) ? ((await readJson<{ servers?: Record<string, unknown> }>(target)) ?? {}) : {};
    await writeJson(target, {
      ...existing,
      servers: {
        ...(existing.servers ?? {}),
        [mcpServerName]: {
          type: 'stdio',
          ...mcpServerConfig()
        }
      }
    });
    console.log(`VS Code MCP 설정을 작성했습니다: ${target}`);
    return;
  }

  if (selectedAgent === 'claude') {
    const target = resolve(optionValue('--target') ?? '.mcp.json');
    const existing = (await pathExists(target)) ? ((await readJson<{ mcpServers?: Record<string, unknown> }>(target)) ?? {}) : {};
    await writeJson(target, {
      ...existing,
      mcpServers: {
        ...(existing.mcpServers ?? {}),
        [mcpServerName]: mcpServerConfig()
      }
    });
    console.log(`Claude Code MCP 설정을 작성했습니다: ${target}`);
    return;
  }

  const target = resolve(optionValue('--target') ?? `.ncai/${selectedAgent}-mcp.json`);
  await writeJson(target, mcpSnippet());
  console.log(`${agentLabels[selectedAgent]}에서 가져다 쓸 MCP 설정 스니펫을 작성했습니다: ${target}`);
}

async function setup() {
  const agent = await selectAgent('전체 설치');
  if (!agent) return;

  console.log('소비자 프로젝트 런타임 의존성으로 아래 패키지를 설치하세요.');
  console.log(installCommand([designSystemPackage, iconsPackage, baseUiPackage]));
  console.log('');
  console.log('npx 대신 로컬 고정 버전을 쓰고 싶다면 아래 개발 의존성을 추가할 수 있습니다.');
  console.log(installCommand([cliPackage, mcpPackage, skillsPackage], true));
  console.log('');
  await installSkill(agent);
  await setupMcp(agent);
  console.log('');
  console.log('설치 후 에이전트에게 UI 작업을 요청하면 MCP/Skill이 design-system.md와 Base UI 우선 규칙을 제공합니다.');
}

async function validate() {
  const file = optionValue('--file');
  if (!file) {
    console.log('예: npx @ncai/design-system-cli validate --file src/App.tsx');
    return;
  }

  const code = await readFile(resolve(file), 'utf8');
  const findings: string[] = [];

  if (code.includes('@base-ui-components/react')) {
    findings.push(`ERROR: 이전 Base UI 패키지명 대신 ${baseUiPackage}을 사용하세요.`);
  }
  if (/\b(Dialog|Popover|Menu|Select|Checkbox|Switch|Tabs|Accordion|Tooltip)\b/.test(code) && !code.includes(baseUiPackage)) {
    findings.push('WARN: 인터랙티브 UI는 Base UI primitive로 구현 가능한지 확인하세요.');
  }
  if (/#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\(/.test(code)) {
    findings.push('WARN: 직접 색상값이 감지되었습니다. design-system.md 근거를 확인하세요.');
  }

  if (findings.length > 0) {
    for (const finding of findings) console.error(finding);
    if (findings.some((finding) => finding.startsWith('ERROR'))) process.exitCode = 1;
    return;
  }

  console.log('NC AI UI 기본 검증을 통과했습니다.');
}

async function doctor() {
  const projectRoot = resolve(optionValue('--cwd') ?? process.cwd());
  const packageJson = await readJson<PackageJson>(join(projectRoot, 'package.json'));
  const deps = {
    ...(packageJson?.dependencies ?? {}),
    ...(packageJson?.devDependencies ?? {}),
    ...(packageJson?.peerDependencies ?? {})
  };

  console.log('NC AI Design System doctor');
  console.log(`project: ${projectRoot}`);
  console.log(`design-system sections: ${designSystem.sections.length}`);
  console.log(deps[designSystemPackage] ? `[PASS] ${designSystemPackage}: ${deps[designSystemPackage]}` : `[WARN] ${designSystemPackage} 의존성이 없습니다.`);
  console.log(deps[iconsPackage] ? `[PASS] ${iconsPackage}: ${deps[iconsPackage]}` : `[WARN] ${iconsPackage} 의존성이 없습니다.`);
  console.log(deps[baseUiPackage] ? `[PASS] ${baseUiPackage}: ${deps[baseUiPackage]}` : `[WARN] ${baseUiPackage} 의존성이 없습니다.`);
  for (const agent of agentChoices) {
    const instructionPath = join(projectRoot, agentInstructionRelativeTarget(agent));
    console.log((await pathExists(instructionPath)) ? `[PASS] ${agentLabels[agent]} 지침 파일 있음: ${instructionPath}` : `[INFO] ${agentLabels[agent]} 지침 파일 없음: ${instructionPath}`);

    const mcpPath = join(projectRoot, agentMcpRelativeTarget(agent));
    console.log((await pathExists(mcpPath)) ? `[PASS] ${agentLabels[agent]} MCP 설정 있음: ${mcpPath}` : `[INFO] ${agentLabels[agent]} MCP 설정 없음: ${mcpPath}`);
  }
}

function show() {
  const query = optionValue('--query');
  if (!query) {
    console.log(designSystem.markdown);
    return;
  }

  for (const section of searchDesignSystem(query, 5)) {
    console.log(`## ${section.title}\n${section.content}\n`);
  }
}

function help() {
  console.log(`NC AI Design System CLI

Commands:
  setup --agent <agent>         Skill과 MCP를 한 번에 설치합니다. 기본 agent는 cursor입니다.
  setup-mcp --agent <agent>     MCP 설정을 작성합니다.
  install-skill --agent <agent> Skill 또는 에이전트 지침을 설치합니다.
  doctor [--agent <agent>]      설치 상태를 진단합니다.
  validate --file <path>        UI 코드의 기본 가드레일을 검사합니다.
  show [--query <text>]         design-system.md 전체 또는 검색 결과를 출력합니다.

Agents:
  cursor, vscode, claude, codex, windsurf, jetbrains, manual

Recommended:
  npx ${cliPackage} setup --agent <agent>
  ${installCommand([designSystemPackage, iconsPackage, baseUiPackage])}
`);
}

if (command === 'setup') await setup();
if (command === 'setup-mcp') await setupMcp();
if (command === 'install-skill') await installSkill();
if (command === 'doctor') await doctor();
if (command === 'validate') await validate();
if (command === 'show') show();
if (command === 'help') help();
