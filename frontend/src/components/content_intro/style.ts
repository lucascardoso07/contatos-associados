import { styled } from "styled-components";

export const StyledContentIntro = styled.div`
  width: 50%;
  max-width: 40%;

  h3 {
    font-size: 76px;
    color: var(--white);
  }
  span {
    color: var(--brand-1);
  }

  @media (max-width: 880px) {
    width: 100%;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      text-align: center;
    }
  }
`;
