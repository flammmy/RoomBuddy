import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "../Common/Sidebar.css";

const Sidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const userData = JSON.parse(localStorage.getItem("user"));

  const toggleSubMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const isSubMenuOpen = (menu) => {
    return expandedMenu === menu ? "fa-chevron-down" : "fa-chevron-right";
  };

  return (
    <>
      {userData.status === 1 && (
        <div
          className="no-scrollbar"
          style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
        >
          <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: "inherit" }}
              >
                Dashboard
              </a>
            </CDBSidebarHeader>
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/dashboard" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <nav>
                  {userData.authority === "superadmin" && (
                    <>
                      <CDBSidebarMenuItem
                        icon="users"
                        onClick={() => toggleSubMenu("users")}
                      >
                        <span className="spanmenu">Users</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("users")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "users" && (
                        <ul className="sub-menu">
                          {/* <li>
                            <NavLink
                              exact
                              to="/add_user"
                              activeClassName="activeClicked"
                            >
                              Add Users
                            </NavLink>
                          </li> */}
                          <li>
                            <NavLink
                              exact
                              to="/userspage"
                              activeClassName="activeClicked"
                            >
                              Users
                            </NavLink>
                          </li>
                        </ul>
                      )}
                      <CDBSidebarMenuItem
                        icon="code"
                        onClick={() => toggleSubMenu("epin")}
                      >
                        <span className="spanmenu" style={{ width: "80%" }}>
                          E-pin
                        </span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("epin")}`}
                          style={{ width: "20%" }}
                        ></i>
                      </CDBSidebarMenuItem>
                      {expandedMenu === "epin" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                              to="/generatepin"
                              activeClassName="activeClicked"
                            >
                              Generate Pin
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              exact
                              to="/transferpin"
                              activeClassName="activeClicked"
                            >
                              Transfer Pin
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              exact
                              to="/my-epin"
                              activeClassName="activeClicked"
                            >
                              My E-pin
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </>
                  )}
                  {userData.authority === "admin" && (
                    <>
                      <CDBSidebarMenuItem
                        icon="hotel"
                        onClick={() => toggleSubMenu("rooms")}
                      >
                        <span className="spanmenu">Rooms</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("rooms")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "rooms" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                              to="/addroom"
                              activeClassName="activeClicked"
                            >
                              Add Room
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              exact
                              to="/viewroom"
                              activeClassName="activeClicked"
                            >
                              Rooms
                            </NavLink>
                          </li>
                        </ul>
                      )}

                      <CDBSidebarMenuItem
                        icon="book"
                        onClick={() => toggleSubMenu("pin")}
                      >
                        <span className="spanmenu">Pin</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("pin")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "pin" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                             to="/myepin"
                              activeClassName="activeClicked"
                            >
                              My Epin
                            </NavLink>
                          </li>
                        </ul>
                      )}

                      <CDBSidebarMenuItem
                        icon="book"
                        onClick={() => toggleSubMenu("gallery")}
                      >
                        <span className="spanmenu">Gallery</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("gallery")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "gallery" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                              to="/addgallery"
                              activeClassName="activeClicked"
                            >
                              Add Photos
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              exact
                              to="/gallery"
                              activeClassName="activeClicked"
                            >
                              Gallery
                            </NavLink>
                          </li>
                        </ul>
                      )}

                      <CDBSidebarMenuItem
                        icon="book"
                        onClick={() => toggleSubMenu("account")}
                      >
                        <span className="spanmenu">Account</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("account")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "account" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                              to="/accountdetails"
                              activeClassName="activeClicked"
                            >
                              Account Details
                            </NavLink>
                          </li>
                          {/* <li>
                            <NavLink
                              exact
                              to="/gallery"
                              activeClassName="activeClicked"
                            >
                              Gallery
                            </NavLink>
                          </li> */}
                        </ul>
                      )}
                      <CDBSidebarMenuItem
                        icon="book"
                        onClick={() => toggleSubMenu("booking")}
                      >
                        <span className="spanmenu">Booking</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("booking")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "booking" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                              to="/viewbooking"
                              activeClassName="activeClicked"
                            >
                              Current Booking
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              exact
                              to="/viewroom"
                              activeClassName="activeClicked"
                            >
                              History
                            </NavLink>
                          </li>
                        </ul>
                      )}
                      <CDBSidebarMenuItem
                        icon="book"
                        onClick={() => toggleSubMenu("feedback")}
                      >
                        <span className="spanmenu">Feedback</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("feedback")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "feedback" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                              to="/viewfeedback"
                              activeClassName="activeClicked"
                            >
                              Feedback
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </>
                  )}
                  {userData.authority === "customer" && (
                    <>
                      <CDBSidebarMenuItem
                        icon="book"
                        onClick={() => toggleSubMenu("booking")}
                      >
                        <span className="spanmenu">Booking</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("booking")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "booking" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                              to="/viewbooking"
                              activeClassName="activeClicked"
                            >
                              My
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              exact
                              to="/viewroom"
                              activeClassName="activeClicked"
                            >
                              History
                            </NavLink>
                          </li>
                        </ul>
                      )}
                      <CDBSidebarMenuItem
                        icon="book"
                        onClick={() => toggleSubMenu("feedback")}
                      >
                        <span className="spanmenu">Feedback</span>
                        <i
                          className={` spanicon fa ${isSubMenuOpen("feedback")}`}
                        ></i>{" "}
                      </CDBSidebarMenuItem>
                      {expandedMenu === "feedback" && (
                        <ul className="sub-menu">
                          <li>
                            <NavLink
                              exact
                              to="/feedback"
                              activeClassName="activeClicked"
                            >
                              Send Feedback
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              exact
                              to="/viewfeedback"
                              activeClassName="activeClicked"
                            >
                              Feedback
                            </NavLink>
                          </li>
                        </ul>
                      )}
                    </>
                  )}
                </nav>
              </CDBSidebarMenu>
            </CDBSidebarContent>
            <CDBSidebarFooter style={{ textAlign: "center" }}>
              <div className="sidebar-btn-wrapper">
                <a href="/" className="sidebar-btn">
                  Logout
                </a>
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
        </div>
      )}
  {userData.status === 0 && (
  <div
    className="no-scrollbar"
    style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
  >
    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        
      </CDBSidebarHeader>
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          
          <nav>
            <CDBSidebarMenuItem icon="book" onClick={() => toggleSubMenu("pin")}>
              <span className="spanmenu">My Epin</span>
              <i className={` spanicon fa ${isSubMenuOpen("pin")}`}></i>{" "}
            </CDBSidebarMenuItem>
            {expandedMenu === "pin" && (
              <ul className="sub-menu">
                <li>
                  <NavLink
                    exact
                    to="/myepin"
                    activeClassName="activeClicked"
                  >
                    My Epin
                  </NavLink>
                </li>
              </ul>
            )}
          </nav>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper">
          <a href="/" className="sidebar-btn">
            Logout
          </a>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
)}
    </>
  );
};

export default Sidebar;