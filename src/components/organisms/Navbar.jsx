import React, { useState } from "react";
import LogoAtom from "../atoms/LogoAtom";
import NavItem from "../molecules/NavItem";
import { Home, Info, Menu, Phone, X } from "lucide-react";
import ThemeToggleAtom from "../atoms/ThemeToggleAtom";
import HeaderAtom from "../atoms/HeaderAtom";
import IconAtom from "../atoms/IconAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import NavAtome from "../atoms/NavAtome";
import FlexAtom from "../atoms/FlexAtom";
import LangToggleAtom from "../atoms/LangToggleAtom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("navbar");
  return (
    <HeaderAtom className="container mx-auto px-4 py-4 flex justify-between items-center ">
      <LogoAtom />

      <NavAtome active={isOpen}>
        <NavItem variant="primary" to="/" label={t('Home')} icon={Home} />
        <NavItem to="/about" label={t('About')} icon={Info} />
        <NavItem to="/contact" label={t('Contact')} icon={Phone} />
      </NavAtome>
      <FlexAtom className="gap-3.5 items-center">
        <ThemeToggleAtom />
        <LangToggleAtom  />
        <ButtonAtom
          className="lg:hidden max-sm:block  "
          variant="primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IconAtom icon={X} variant="white" active={true} size="20px" />
          ) : (
            <IconAtom icon={Menu} variant="white" size="20px" />
          )}
        </ButtonAtom>
      </FlexAtom>
    </HeaderAtom>
  );
};

export default Navbar;
