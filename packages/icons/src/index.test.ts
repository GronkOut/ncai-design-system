import { describe, expect, it } from 'vitest';
import { getIcon, icons, searchIcons } from './index';

describe('icons package', () => {
  it('exposes icon metadata', () => {
    expect(icons.length).toBeGreaterThan(400);
    expect(getIcon('ic_account_info.svg')).toMatchObject({
      title: 'Account Info',
      exportPath: '@ncai/design-system-icons/icons/ic_account_info.svg'
    });
  });

  it('searches by title and file name', () => {
    expect(searchIcons('account')[0]?.fileName).toBe('ic_account_info.svg');
    expect(searchIcons('ic_sort')[0]?.fileName).toBe('ic_sort.svg');
  });
});
