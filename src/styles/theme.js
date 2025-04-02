import { info } from "autoprefixer";

const colors = {
  light: {
    primary: "#457B9D",
    primaryDark: "#1D3557",
    white: "#F1FAEE",
    dark: "#111827",
    danger: "#E63946",
    warning: "#EC9A9A",
    info: "#A8DADC",
    secondary: "#280659",
  },
  dark: {
    primary: "#A8DADC", // Soft teal (light version of light mode's info)
    primaryDark: "#457B9D", // Matches light theme's primary
    white: "#F1FAEE", // Deep dark background (instead of white)
    dark: "#111827", // Deep dark background
    danger: "#E76F51", // Warm red-orange for danger
    warning: "#F4A261", // Soft orange for warning
    info: "#457B9D", // Reuse primary for consistency
    secondary: "#8D99AE", // Muted blue-gray
  }

};

const Text = {
  h1: {
    size: "2rem",
    weight: 700,
  },
  h2: {
    size: "1.75rem",
    weight: 700,
  },
  h3: {
    size: "1.5rem",
    weight: 700,
  },
  h4: {
    size: "1.25rem",
    weight: 700,
  },
  h5: {
    size: "1rem",
    weight: 700,
  },
  h6: {
    size: "0.875rem",
    weight: 700,
  },
  p: {
    size: "1rem",
    weight: 400,
  },
  span: {
    size: "1rem",
    weight: 400,
  },
  a: {
    size: "1rem",
    weight: 400,
  },
  button: {
    size: "1rem",
    weight: 600,
  },
  label: {
    size: "0.875rem",
    weight: 400,
  },
  caption: {
    size: "0.75rem",
    weight: 400,
  },
};
export const lightTheme = {
  mode: "light",
  colors: {
    ...colors.light,
  },
  background: colors.light.white,
  buttons: {
    primary: {
      background: colors.light.primary,
      hover: colors.light.primaryDark,
      color: colors.light.white,
    },
    info: {
      background: colors.light.info,
      hover: colors.light.primary,
      color: colors.light.white,
    },
    warning: {
      background: colors.light.warning,
      hover: colors.light.primary,
      color: colors.light.white,
    },
    white: {
      background: colors.light.white,
      hover: colors.light.primary,
      color: colors.light.primary,
    },
    secondary: {
      background: colors.light.secondary,
      hover: colors.light.primary,
      color: colors.light.white,
    },
    light: {
      background: colors.light.white,
      hover: colors.light.primary,
      color: colors.light.primary,
    },
    dark: {
      background: colors.light.dark,
      hover: colors.light.primary,
      color: colors.light.white,
    },
    danger: {
      background: "#E63946",
      hover: "#E63946",
      color: "#F1FAEE",
    },
  },
  text: {
    primary: colors.light.primary,
    primaryDark: colors.light.primaryDark,
    secondary: colors.light.secondary,
    danger: colors.light.danger,
    warning: colors.light.warning,
    info: colors.light.info,
    white: colors.light.white,
  },
  ...Text,
  spacing: {
    sm: "0.5rem",
    md: "1rem",
  },
  radius: {
    md: "0.5rem",
  },
};

export const darkTheme = {
  ...lightTheme,
  mode: "dark",
  colors: {
    ...colors.dark,
  },
  background: "#111827",
  text: {
    primary: colors.dark.primary,
    primaryDark: colors.dark.primaryDark,
    secondary: colors.dark.secondary,
    danger: colors.dark.danger,
    warning: colors.dark.warning,
    info: colors.dark.info,
    white: colors.dark.white,
  },
  buttons: {
    primary: {
      background: colors.dark.primary,
      hover: colors.dark.primaryDark,
      color: colors.dark.white,
    },
    info: {
      background: colors.dark.info,
      hover: colors.dark.primary,
      color: colors.dark.white,
    },
    warning: {
      background: colors.dark.warning,
      hover: colors.dark.primary,
      color: colors.dark.white,
    },
    white: {
      background: colors.dark.white,
      hover: colors.dark.primary,
      color: colors.dark.primary,
    },
    secondary: {
      background: colors.dark.secondary,
      hover: colors.dark.primary,
      color: colors.dark.white,
    },
    light: {
      background: colors.dark.white,
      hover: colors.dark.primary,
      color: colors.dark.primary,
    },
    dark: {
      background: colors.dark.dark,
      hover: colors.dark.primary,
      color: colors.dark.white,
    },
    danger: {
      background: colors.dark.danger,
      hover: colors.dark.danger,
      color: colors.dark.white,
    },
  },
};