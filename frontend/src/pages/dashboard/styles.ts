import { styled } from "styled-components";

export const StyledDashBoardPage = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;

  .container-dashboard {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 50px;
  }
  .container-dashboard h2 {
    font-size: 80px;
    color: var(--white);
    font-family: var(--font-bebas);
  }

  .dashboard-left-content {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;
    padding-top: 80px;
  }

  .dashboard-left-content p {
    color: var(--zinc-2);
    font-size: 31px;
    text-align: center;
  }

  .dashboard-left-content span {
    color: var(--brand-1);
    text-transform: uppercase;
    font-weight: bold;
  }
  .dashboard-button-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .dashboard-button-container button {
    padding: 18px;
    background-color: transparent;
    border: 3px solid var(--zinc-2);
    color: var(--zinc-2);
    cursor: pointer;
    transition: all 0.2s;
  }
  .dashboard-button-container button:hover {
    color: var(--white);
    border: 3px solid var(--white);
  }

  .dashboard-button-container p {
    font-size: 23px;
  }

  .dashboard-rigth-content {
    height: 100vh;
    width: 40%;
    display: flex;
    justify-content: center;
  }
  .dashboard-rigth-content ul {
    height: 70%;

    overflow-y: scroll;
  }

  ul::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  ul::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--brand-1); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 3px solid var(--brand-1); /* creates padding around scroll thumb */
  }
`;
