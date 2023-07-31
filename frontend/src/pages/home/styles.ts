import { styled } from "styled-components";

export const StyledHomePage = styled.div`
  .container-home {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .rigth-content {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    gap: 80px;
  }

  .rigth-content img {
    width: 100%;
  }

  .rigth-content p {
    text-align: center;
    font-size: 28px;
    color: var(--zinc-2);
  }

  @media (max-width: 880px) {
    .container-home {
      flex-direction: column;
    }
    .rigth-content {
      width: 100%;
    }
  }
`;
