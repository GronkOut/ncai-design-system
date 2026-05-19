# @ncai/design-system-icons

SVG icons and searchable metadata for the NC AI Design System.

```bash
npm i @ncai/design-system-icons
```

SVG files can be imported directly from package export paths.

```ts
import userIconUrl from '@ncai/design-system-icons/icons/user.svg';
```

The package also exposes searchable icon metadata.

```ts
import { getIcon, icons, searchIcons } from '@ncai/design-system-icons';

const icon = getIcon('user.svg');
const matches = searchIcons('user');
```

See [`icons/README.md`](./icons/README.md) for the complete preview list.
