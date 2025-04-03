import { useSelector, useDispatch } from "react-redux";
import { setPendingLanguage } from "../../redux/slices/languageSlice";
import { LanguagesIcon } from "lucide-react";

import IconAtom from "../atoms/IconAtom";
import FlexAtom from "../atoms/FlexAtom";
import ButtonAtom from "../atoms/ButtonAtom";

const LangToggle = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.currentLang);

  const switchLanguage = (lng) => {
    dispatch(setPendingLanguage(lng));
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

export default LangToggle;
