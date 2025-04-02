import styled from "styled-components";

const StyledContainer = styled.div`
    
    `;

const ContainerAtom = ({ children, className = "", ...props }) => {
  return (
    <StyledContainer className={`container ${className}`} {...props}>
      {children}
    </StyledContainer>
  );
}

export default ContainerAtom;