import styled from "styled-components";

const StyledFooter = styled.footer``;

const FooterAtom = ({children}) => {
  return (
    <StyledFooter >
        {children}
    </StyledFooter>
  );
};

export default FooterAtom;
