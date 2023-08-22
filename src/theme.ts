import { type GlobalThemeOverrides } from 'naive-ui';

const primaryColor = '#19397D';
const WHITE_COLOR = '#fff';
const WHITE_COLOR_HOVER = '#96ff9a';
const WHITE_COLOR_ACTIVE = '#5dff63';

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
  Menu: {
    itemTextColorHorizontal: WHITE_COLOR,
    itemTextColorHoverHorizontal: WHITE_COLOR_HOVER,
    itemTextColorActiveHorizontal: WHITE_COLOR_ACTIVE,
    itemTextColorActiveHoverHorizontal: WHITE_COLOR_HOVER,
  },
};
