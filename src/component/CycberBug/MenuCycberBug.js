import React from "react";
import { NavLink } from "react-router-dom";

const MenuCycberBug = () => {
  return (
    <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src={require("../../assets/img/download.jfif")} alt />
        </div>
        <div className="account-info">
          <p>CyberLearn.vn</p>
          <p>Report bugs</p>
        </div>
      </div>
      <div className="control">
        {/* <div>
          <i className="fa fa-credit-card" />
          <NavLink
            className="text-dark"
            activeClassName="font-weight-bold"
            to="/cycberBug"
          >
            Cyber Board
          </NavLink>
        </div> */}
        <div>
          <i className="fa fa-cog" />
          <NavLink
            className="text-dark"
            activeClassName="font-weight-bold"
            to="/createProject"
          >
            Create Project
          </NavLink>
        </div>
        <div>
          <i className="fa fa-cog" />
          <NavLink
            className="text-dark"
            activeClassName="font-weight-bold"
            to="/projectManager"
          >
            Project Manager
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MenuCycberBug;
