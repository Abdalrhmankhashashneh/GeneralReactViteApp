import styled from "styled-components";

const StyledNav = styled.nav`
  @media (max-width: 1022px) {
    position: absolute;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    top: 10%;
    right: 0;
    min-height: 85vh;
    background-color: ${({ theme , $variant }) => theme.colors[$variant]};
    a {
      
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0;
      margin-top: 10px;
      padding: 0.5rem 0;
    }
  }
`;
const NavAtome = ({ children, active , variant = 'info' }) => {
  return (
    <StyledNav
      className={` lg:flex lg:gap-8   ${
        active ? "" : "md:hidden sm:hidden max-sm:hidden"
      } `}
        $variant={variant}
    >
      {children}
    </StyledNav>
  );
};

export default NavAtome;
