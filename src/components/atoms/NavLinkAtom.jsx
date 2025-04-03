import styled from "styled-components";
import { Link } from "react-router-dom";
import { OnHoverPop, OnHoverWiggle, OnHoverWile } from "../../utils/motion-utils";

const StyledNavLink = styled(Link)`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.3s;
  width: fit-content;
  display: flex;
  color: ${({ theme, $variant, $active }) =>
    $active
      ? theme.buttons[$variant]?.color || theme.buttons.primary.color
      : theme.colors[$variant]};

  background-color: ${({ theme, $variant, $active }) =>
    $active
      ? theme.buttons[$variant]?.background || theme.buttons.primary.background
      : "transparent"};

  &:hover {
    background-color: ${({ theme, $variant }) =>
      theme.buttons[$variant]?.hover || theme.buttons.primary.hover};
    color: ${({ theme, $variant }) => theme.buttons[$variant].color};
  }
  
`;

const NavLinkAtom = ({ to, children, variant = "primary", active = false }) => {
  return (
    <OnHoverPop>
      <StyledNavLink
        className="rounded-3xl"
        to={to}
        $variant={variant}
        $active={active}
      >
        {children}
      </StyledNavLink>
    </OnHoverPop>
  );
};

export default NavLinkAtom;
