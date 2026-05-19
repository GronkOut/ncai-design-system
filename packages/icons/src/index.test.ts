import { describe, expect, it } from 'vitest';
import { getIcon, icons, searchIcons } from './index';

describe('icons package', () => {
  it('exposes icon metadata', () => {
    expect(icons.length).toBeGreaterThan(400);
    expect(getIcon('user.svg')).toMatchObject({
      title: 'User',
      exportPath: '@ncai/design-system-icons/icons/user.svg'
    });
  });

  it('searches by title and file name', () => {
    expect(searchIcons('user round x')[0]?.fileName).toBe('user-round-x.svg');
    expect(searchIcons('arrow-down-0-1')[0]?.fileName).toBe('arrow-down-0-1.svg');
  });
});
