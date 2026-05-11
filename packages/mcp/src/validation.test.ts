import { describe, expect, it } from 'vitest';
import { validateUiCode } from './validation';

describe('validateUiCode', () => {
  it('rejects the old Base UI package name', () => {
    const result = validateUiCode("import { Popover } from '@base-ui-components/react/popover';");
    expect(result.valid).toBe(false);
  });

  it('allows current Base UI imports', () => {
    const result = validateUiCode("import { Popover } from '@base-ui/react/popover';");
    expect(result.valid).toBe(true);
  });
});
