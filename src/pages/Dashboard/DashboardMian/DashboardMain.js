import React from "react";
import useAuth from "../../../hooks/useAuth";
import photoURL from "../../../Assects/dashboard/profile.jpg";

const DashboardMain = () => {
  const { user, logout } = useAuth();
  return (
    <div className="kick-footer">
      {user.email ? (
        <div>
          {user.photoURL ? (
            <img
              style={{ width: "60px", borderRadius: "50px" }}
              src={user.photoURL}
              alt=""
            />
          ) : (
            <img
              style={{ width: "60px", borderRadius: "50px" }}
              src={photoURL}
              alt=""
            />
          )}
          <h2>{user.displayName}</h2>
          <p> {user.email}</p>
          <button className="primary-btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashboardMain;
