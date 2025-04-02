import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { store } from "./redux/store.js";
import { Provider, useSelector } from "react-redux";
import RoutesComponent from "./routes/RoutesComponent.jsx";
import './i18n.js';

const RootWithTheme = () => {
  const theme = useSelector((state) => state.theme.current);

  return (
    <ThemeProvider theme={theme}>
        <RoutesComponent />
    </ThemeProvider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RootWithTheme />
    </Provider>
  </StrictMode>
);
