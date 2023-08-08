import { styled } from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;

  .container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex-he {
    display: flex;
    gap: 20px;
  }

  .input-src {
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    border: 2px solid var(--white);
    padding: 0 8px;
    border-radius: 8px;
  }

  .input-src i {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .input-src i:hover {
    color: var(--zinc-2);
  }

  .input-src input {
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--white);
  }

  h2 {
    color: var(--brand-1);
    font-family: var(--font-worksans);
    font-size: 30px;
    font-weight: bold;
  }
  i {
    color: var(--zinc-2);
    font-size: 23px;
    font-weight: bold;
    transition: all 0.3s;
  }

  i:hover {
    color: var(--white);
  }

  #button-login {
    color: var(--white);
    background-color: transparent;
    border-left: 6px solid transparent;
    border: 6px solid transparent;
    cursor: pointer;
    padding: 4px 12px;
    font-family: var(--font-worksans);
    font-size: 22px;
    transition: all 0.3s;
  }

  #button-login:hover {
    color: var(--brand-1);
    border-bottom: 6px solid var(--brand-1);
  }
  .container-image-profile {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  .container-image-profile p {
    color: var(--white);
    font-size: 22px;
  }
  .container-image-profile button {
    background-color: transparent;
    border: none;
    color: var(--white);
    font-size: 22px;
    text-transform: capitalize;
    cursor: pointer;
  }

  .container-image-profile img {
    width: 50px;
    border-radius: 50%;
  }
`;
