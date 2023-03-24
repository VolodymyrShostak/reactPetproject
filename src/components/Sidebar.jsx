import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";

const Sidebar = () => {
  const [openRedux, setOpenRedux] = useState(false);
  const [openChakra, setOpenChakra] = useState(false);

  return (
    <aside className="sidebar">
      <ul className="sidebarList">
        <li className="sideBarItem">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => {
              setOpenRedux(!openRedux);
            }}
          >
            <div className="sidebarLink">Redux</div>

            {openRedux ? (
              <AiOutlineArrowDown size={15} />
            ) : (
              <AiOutlineArrowLeft size={15} />
            )}
          </div>
          {openRedux && (
            <ul>
              <li className="sideBarItem">
                <NavLink
                  to={"/projects/redux-thank"}
                  className="sidebarInternalLink"
                >
                  AsyncThank
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/projects/redux-toolkit"}
                  className="sidebarInternalLink"
                >
                  Toolkit (sync example)
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <ul className="sidebarList">
        <li className="sideBarItem">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => {
              setOpenChakra(!openChakra);
            }}
          >
            <div className="sidebarLink">Next Work</div>

            {openChakra ? (
              <AiOutlineArrowDown size={15} />
            ) : (
              <AiOutlineArrowLeft size={15} />
            )}
          </div>
          {openChakra && (
            <ul>
              <li className="sideBarItem">
                <NavLink
                  to={"/projects/redux-thank"}
                  className="sidebarInternalLink"
                >
                  Redux Async Thank
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/projects/redux-toolkit"}
                  className="sidebarInternalLink"
                >
                  Redux Toolkit
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
