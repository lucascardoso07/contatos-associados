import { useContext } from "react";
import { StyledHeader } from "./style";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const Header = () => {
  const { userLogout } = useContext(UserContext);
  const token = localStorage.getItem("@token");

  return (
    <StyledHeader>
      <div className="container">
        <h2>Contact.Zera</h2>
        {!token ? (
          <Link id="button-login" to="/login">
            Login
          </Link>
        ) : (
          <div className="flex-he">
            <div className="container-image-profile">
              <i onClick={() => userLogout()}>
                <FaSignInAlt />
              </i>{" "}
            </div>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
