import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  font-size: ${({ theme }) => theme.a.size};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const LogoAtom = () => {
  return <StyledLogo to="/">🧩 MyApp</StyledLogo>;
};

export default LogoAtom;
