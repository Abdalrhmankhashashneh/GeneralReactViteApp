import styled from "styled-components";

const StyledMain = styled.main`
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.background};
`;

const MainAtom = ({ children, className = "" }) => {
  return <StyledMain className={`${className}`}>{children}</StyledMain>;
};

export default MainAtom;
