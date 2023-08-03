import { styled } from "styled-components";

export const StyledLoginForm = styled.form`
  background-color: var(--brand-1);
  width: 90%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    font-size: 50px;
    font-family: var(--font-bebas);
    color: var(--white);
    margin-bottom: 15px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
  }
  .input-container label {
    font-family: var(--font-bebas);
    color: var(--white);
    font-size: 33px;
  }
  .input-container input {
    height: 38px;
    border: 2px solid var(--white);
    border-radius: 4px;
    background-color: transparent;
    outline: none;
    padding: 0 6px;
    color: var(--white);
  }

  .input-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 20px;
  }
  .primary-button {
    background-color: var(--white);
    height: 38px;
    border: 2px solid var(--white);
    border-radius: 4px;
    font-family: var(--font-bebas);
    font-size: 28px;
    color: var(--brand-1);
    transition: all ease-in 0.3s;
    cursor: pointer;
  }

  .secoundary-button {
    background-color: var(--zinc-1);
    height: 38px;
    border: 2px solid var(--zinc-1);
    border-radius: 4px;
    font-family: var(--font-bebas);
    font-size: 28px;
    color: var(--brand-1);
    transition: all ease-in 0.2s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .primary-button:hover {
    background-color: transparent;
    color: var(--white);
  }

  .secoundary-button:hover {
    background-color: transparent;
    color: var(--zinc-1);
  }
`;
