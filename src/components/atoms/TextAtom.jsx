import styled from "styled-components";

const StyledText = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    color: ${({ theme , $variant }) => theme.mode == "light" ? ( $variant == "white" ? theme.colors["dark"] : theme.colors["white"] ) : theme.colors[$variant]};
  }
  h1 {
    font-size: ${({ theme }) => theme.h1.size};
    font-weight: ${({ theme }) => theme.h1.weight};
  }
    h2 {
        font-size: ${({ theme }) => theme.h2.size};
        font-weight: ${({ theme }) => theme.h2.weight};
    }
    h3 {
        font-size: ${({ theme }) => theme.h3.size};
        font-weight: ${({ theme }) => theme.h3.weight};
    }
    h4 {
        font-size: ${({ theme }) => theme.h4.size};
        font-weight: ${({ theme }) => theme.h4.weight};
    }
    h5 {
        font-size: ${({ theme }) => theme.h5.size};
        font-weight: ${({ theme }) => theme.h5.weight};
    }
    h6 {
        font-size: ${({ theme }) => theme.h6.size};
        font-weight: ${({ theme }) => theme.h6.weight};
    }
    p {
        font-size: ${({ theme }) => theme.p.size};
        font-weight: ${({ theme }) => theme.p.weight};
    }
    span {
        font-size: ${({ theme }) => theme.span.size};
        font-weight: ${({ theme }) => theme.span.weight};
    }
    a {
        font-size: ${({ theme }) => theme.a.size};
        font-weight: ${({ theme }) => theme.a.weight};
    }
    button {
        font-size: ${({ theme }) => theme.button.size};
        font-weight: ${({ theme }) => theme.button.weight};
    }
    label {
        font-size: ${({ theme }) => theme.label.size};
        font-weight: ${({ theme }) => theme.label.weight};
    }
    caption {
        font-size: ${({ theme }) => theme.caption.size};
        font-weight: ${({ theme }) => theme.caption.weight};
    }
    a {
        font-size: ${({ theme }) => theme.a.size};
        font-weight: ${({ theme }) => theme.a.weight};
    }
`;

const TextAtom = ({ children, className = "" ,variant = 'primaryDark'  }) => {
  return <StyledText className={`${className}`} $variant={variant} >{children}</StyledText>;
};

export default TextAtom;
