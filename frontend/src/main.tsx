import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyled } from "./styles/globalstyle.ts";
import { BrowserRouter } from "react-router-dom";
import { UserProviders } from "./providers/UserContext.tsx";
import { ContactProviders } from "./providers/ContactsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProviders>
        <ContactProviders>
          <App />
        </ContactProviders>
      </UserProviders>
      <GlobalStyled />
    </BrowserRouter>
  </React.StrictMode>
);
