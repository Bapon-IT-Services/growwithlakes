import { ConfigProvider, theme as antdTheme } from 'antd';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import Main from './pages/Main';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MotionConfig reducedMotion="user">
        <ConfigProvider
          theme={{
            algorithm: antdTheme.darkAlgorithm,
            token: {
              colorPrimary: theme.colors.gold,
              colorInfo: theme.colors.gold,
              colorBgContainer: theme.colors.surface,
              colorText: theme.colors.white,
              colorTextSecondary: theme.colors.muted,
              colorBorder: theme.colors.border,
              colorSplit: theme.colors.border,
              borderRadius: 10,
              fontFamily: theme.fonts.body,
              fontSize: 16,
              controlHeightLG: 48,
            },
            components: {
              Button: {
                primaryShadow: 'none',
                defaultShadow: 'none',
                fontWeight: 500,
                defaultColor: theme.colors.white,
                defaultBorderColor: theme.colors.border,
                defaultHoverBg: 'rgba(212, 175, 55, 0.08)',
                defaultHoverColor: theme.colors.goldBright,
                defaultHoverBorderColor: 'rgba(212, 175, 55, 0.45)',
              },
            },
          }}
        >
          <GlobalStyle />
          <Main />
        </ConfigProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
