import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";

import ButtonAtom from "../atoms/ButtonAtom";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { OnHoverWile } from "../../utils/motion-utils";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <OnHoverWile>
      <ButtonAtom onClick={() => dispatch(toggleTheme())} variant="secondary">
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </ButtonAtom>
    </OnHoverWile>
  );
};

export default ThemeToggle;
