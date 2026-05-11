import { describe, expect, it } from 'vitest';
import { composeBaseUiRecipe } from './recipe';

describe('composeBaseUiRecipe', () => {
  it('maps common UI requests to Base UI components', () => {
    const recipe = composeBaseUiRecipe('알림 popover를 만들어줘');
    expect(recipe.baseUiPackage).toBe('@base-ui/react');
    expect(recipe.components).toContain('popover');
    expect(recipe.steps.length).toBeGreaterThan(0);
  });
});
