import 'styled-components';
import type { GWLTheme } from './styles/theme';

declare module 'styled-components' {
  // Re-exports project theme for styled-components; no extra members required.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends GWLTheme {}
}
