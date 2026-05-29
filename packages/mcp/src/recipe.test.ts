import { describe, expect, it } from 'vitest';
import { composeBaseUiRecipe } from './recipe';

describe('composeBaseUiRecipe', () => {
  it('maps common UI requests to Base UI components', () => {
    const recipe = composeBaseUiRecipe('알림 popover를 만들어줘');
    expect(recipe.baseUiPackage).toBe('@base-ui/react');
    expect(recipe.components).toContain('popover');
    expect(recipe.steps.length).toBeGreaterThan(0);
  });

  it('composes Date Picker from Base UI primitives', () => {
    const recipe = composeBaseUiRecipe('날짜 구간 선택 Date Picker를 만들어줘');
    expect(recipe.components).toEqual(expect.arrayContaining(['button', 'field', 'popover', 'select']));
    expect(recipe.baseUiDocs.map((doc) => doc.component)).toEqual(
      expect.arrayContaining(['button', 'field', 'popover', 'select'])
    );
    expect(recipe.compositions.map((composition) => composition.id)).toContain('date-picker');
  });
});
