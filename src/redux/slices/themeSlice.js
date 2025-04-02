import { createSlice } from "@reduxjs/toolkit";
import { lightTheme, darkTheme } from "../../styles/theme";

const getInitialTheme = () => {
  const mode = localStorage.getItem("theme") || "light";
  return mode === "dark" ? darkTheme : lightTheme;
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: localStorage.getItem("theme") || "light",
    current: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      state.current = state.mode === "dark" ? darkTheme : lightTheme;
      localStorage.setItem("theme", state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      state.current = action.payload === "dark" ? darkTheme : lightTheme;
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
