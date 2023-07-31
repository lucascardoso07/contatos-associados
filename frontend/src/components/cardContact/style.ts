import { styled } from "styled-components";

export const StyledCardContact = styled.li`
  display: flex;
  align-items: center;
  gap: 50px;

  h3 {
    font-size: 100px;
    color: var(--white);
    font-family: var(--font-bebas);
  }

  p {
    color: var(--zinc-2);
    font-size: 18px;
    text-transform: capitalize;
  }
  i {
    color: var(--white);
    font-size: 23px;
    transition: all 0.2s;
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    margin-right: 20px;
  }
  i:hover {
    color: var(--brand-1);
  }
`;
