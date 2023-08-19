import { type GlobalThemeOverrides } from 'naive-ui';

const primaryColor = '#19397D';

export const appTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: primaryColor,
  },
  Button: {
    colorHoverPrimary: primaryColor,
    colorFocusPrimary: primaryColor,
    colorPressedPrimary: primaryColor,
  },
  Layout: {
    headerColor: primaryColor,
  },
};
