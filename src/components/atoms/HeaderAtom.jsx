import styled from "styled-components";

const StyledHeader = styled.header`
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.background};
  border-color: ${({ theme, $variant }) => theme.colors[$variant]};
`;

const HeaderAtom = ({ to, children, variant = "primary", active = false , className }) => {
  return (
    <StyledHeader
      to={to}
      $variant={variant}
      $active={active}
      className="border-b-2"
    >
      <div className={className}>
        {children}
      </div>
    </StyledHeader>
  );
};

export default HeaderAtom;
