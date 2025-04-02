import styled from "styled-components";

const StyledFlex = styled.div`
    
    `;

const FlexAtom = ({ children, className = "", ...props }) => {
  return (
    <StyledFlex className={`flex ${className}`} {...props}>
      {children}
    </StyledFlex>
  );
}

export default FlexAtom;