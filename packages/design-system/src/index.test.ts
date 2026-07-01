import { describe, expect, it } from 'vitest';
import { baseUiGuidance, designSystem, getDesignSystemSection, searchDesignSystem } from './index';

describe('design system document', () => {
  it('loads markdown sections', () => {
    expect(designSystem.markdown).toContain('## Overview');
    expect(designSystem.sections.length).toBeGreaterThan(10);
  });

  it('points consumers to the package-exported markdown source', () => {
    expect(designSystem.source).toBe('@ncai/design-system/design-system.md');
  });

  it('finds sections by slug or title', () => {
    expect(getDesignSystemSection('colors')?.title).toBe('Colors');
    expect(getDesignSystemSection('Typography')?.title).toBe('Typography');
  });

  it('searches relevant sections', () => {
    expect(searchDesignSystem('button').map((section) => section.title)).toContain('Buttons');
  });

  it('includes Date Picker composition guidance', () => {
    const section = getDesignSystemSection('date-picker');
    expect(section?.content).toContain('Field');
    expect(section?.content).toContain('Popover');
    expect(section?.content).toContain('Select');
  });

  it('tracks current Base UI package name', () => {
    expect(baseUiGuidance.packageName).toBe('@base-ui/react');
  });
});
