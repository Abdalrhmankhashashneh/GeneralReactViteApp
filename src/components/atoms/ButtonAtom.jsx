import React from "react";
import styled from "styled-components";
import OnHoverWile from "./animateAtoms/onHoverWile";
const StyledButton = styled.button`
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background-color: ${({ theme, $variant }) => theme.colors[$variant]};
  color: ${({ theme, $variant }) => theme.buttons[$variant].color};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme, $variant }) => theme.buttons[$variant].hover};
  }
`;

const ButtonAtom = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <OnHoverWile>
      <StyledButton
        $variant={variant}
        className={`"cursor-pointer ${className} "`}
        {...props}
      >
        {children}
      </StyledButton>
    </OnHoverWile>
  );
};

export default ButtonAtom;
