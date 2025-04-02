import React from "react";

import { useSelector, useDispatch } from "react-redux";
import ButtonAtom from "./ButtonAtom";
import { setLanguage } from "../../redux/slices/languageSlice";
import IconAtom from "./IconAtom";
import { LanguagesIcon } from "lucide-react";
import FlexAtom from "./FlexAtom";

const LangToggleAtom = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.currentLang);

  const switchLanguage = (lng) => {
    dispatch(setLanguage(lng));
  };
  return (
    <ButtonAtom
      onClick={() => switchLanguage(lang === "en" ? "ar" : "en")}
      variant="secondary"
    >
      {lang === "en" ? (
        <FlexAtom className="gap-2 items-center">
          <IconAtom icon={LanguagesIcon} variant="white" size="20px" />
          Ar
        </FlexAtom>
      ) : (
        <>
          <FlexAtom className="gap-2 items-center">
            <IconAtom icon={LanguagesIcon} variant="white" size="20px" />
            En
          </FlexAtom>
        </>
      )}
    </ButtonAtom>
  );
};

export default LangToggleAtom;
