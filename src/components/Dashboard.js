import React from "react";

function Dashboard({ setLoggedIn, setNavigate }) {
  return (
    <div id="dashboardPage">
      <h1 id="dashboard-tag"> Welcome to Dashboard</h1>
      <button
        id="dashboard-logout"
        onClick={() => {
          console.log("You have logged out");
          setLoggedIn(false);
          setNavigate(true);
        }}
      >
        Log out{" "}
      </button>
    </div>
  );
}
export default Dashboard;
