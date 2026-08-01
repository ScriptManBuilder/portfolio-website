import 'styled-components';
import type { Theme } from './theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type -- declaration merging requires an empty interface here
  export interface DefaultTheme extends Theme {}
}
