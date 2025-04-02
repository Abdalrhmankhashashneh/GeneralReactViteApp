import React from "react";
import { useLocation } from "react-router-dom";
import NavLinkAtom from "../atoms/NavLinkAtom";
import IconAtom from "../atoms/IconAtom";

const NavItem = ({ to, label, variant = "primary", icon: Icon = null }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <NavLinkAtom to={to} variant={variant} active={isActive}>
      <div className="flex items-center gap-2">
        {Icon && <IconAtom icon={Icon} variant={variant} active={isActive} size="18px" />}
        <span>{label}</span>
      </div>
    </NavLinkAtom>
  );
};

export default NavItem;
