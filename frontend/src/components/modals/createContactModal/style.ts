import { styled } from "styled-components";

export const StyledModalCrete = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-card {
    display: flex;
    flex-direction: column;
    background-color: var(--zinc-1);
    width: 30%;
    padding: 40px 40px;
    border-radius: 6px;
    box-shadow: 0px 10px 57px 12px rgba(0, 0, 0, 0.3),
      0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .header--modal {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .header--modal p {
    color: var(--white);
    text-transform: capitalize;
    font-size: 28px;
    font-family: var(--font-bebas);
  }

  .header--modal button {
    background-color: transparent;
    border: none;
    color: var(--white);
    font-size: 28px;
    cursor: pointer;
  }
`;
