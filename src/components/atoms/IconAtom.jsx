import React from "react";
import styled from "styled-components";

const StyledIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $variant ,$active}) =>
    $active?theme.colors['white'] :theme.colors[$variant]};

  svg {
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    stroke-width: ${({ $stroke }) => $stroke};
  }
`;

const IconAtom = ({ icon: Icon, size = "20px", stroke = 2, variant = "primary", className = "" , active = false }) => {
  return (
    <StyledIconWrapper
      $variant={variant}
      $size={size}
      $stroke={stroke}
      className={className}
        $active ={active}  
    >
      {Icon && <Icon />}
    </StyledIconWrapper>
  );
};

export default IconAtom;
