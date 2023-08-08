import { styled } from "styled-components";

export const StyledUpdateUserForm = styled.form`
  .input--container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }

  .flex {
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .flex label {
    color: var(--white);
    font-family: var(--font-bebas);
    font-size: 22px;
  }

  .flex input {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: 2px solid var(--white);
    border-radius: 6px;
    outline: none;
    padding: 0 10px;
    color: var(--white);
  }

  .button-add {
    width: 100%;
    height: 40px;
    border: 2px solid var(--white);
    border-radius: 6px;
    color: var(--zinc-1);
    font-family: var(--font-bebas);
    font-size: 22px;
    transition: all 0.2s;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .button-remove {
    width: 100%;
    height: 40px;
    border: 2px solid var(--brand-2);
    border-radius: 6px;
    color: var(--zinc-1);
    font-family: var(--font-bebas);
    font-size: 22px;
    transition: all 0.2s;
    cursor: pointer;
    margin-bottom: 10px;
    background-color: var(--brand-2);
  }

  .button-add:hover {
    border: 2px solid var(--brand-1);
    background-color: var(--brand-1);
  }
  .button-remove:hover {
    opacity: 0.8;
  }
`;
