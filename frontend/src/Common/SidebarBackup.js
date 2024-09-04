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
    <div className="no-scrollbar"
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <nav>
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
            </nav>

            {/* <div>
              <CDBSidebarMenuItem
                className=""
                icon="cash-register"
                onClick={() => toggleSubMenu("orders")}
              >
                {" "}
                <span className="spanmenu">Orders & Billing</span>
                <i className={` spanicon fa ${isSubMenuOpen("orders")}`}></i>
              </CDBSidebarMenuItem>
              {expandedMenu === "orders" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      exact
                      to="/all_orders"
                      activeClassName="activeClicked"
                    >
                      Current Orders
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/order_history"
                      activeClassName="activeClicked"
                    >
                      Order History
                    </NavLink>
                  </li>
                </ul>
              )}
            </div> */}

            {/* <div>
              <CDBSidebarMenuItem
                icon="utensils"
                onClick={() => toggleSubMenu("dining")}
              >
                <span className="spanmenu">Table & Dining</span>
                <i className={` spanicon fa ${isSubMenuOpen("dining")}`}></i>
              </CDBSidebarMenuItem>
              {expandedMenu === "dining" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink exact to="/tables" activeClassName="activeClicked">
                      Tables
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/dining_setting"
                      activeClassName="activeClicked"
                    >
                      Dining Setting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/table_name"
                      activeClassName="activeClicked"
                    >
                      Tables Names
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/reservation"
                      activeClassName="activeClicked"
                    >
                      Reservations
                    </NavLink>
                  </li>
                </ul>
              )}
            </div> */}
{/* 
            <div>
              <CDBSidebarMenuItem
                icon="tasks"
                onClick={() => toggleSubMenu("management")}
              >
                <span className="spanmenu">Management </span>
                <i
                  className={` spanicon fa ${isSubMenuOpen("management")}`}
                ></i>
              </CDBSidebarMenuItem>
              {expandedMenu === "management" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      exact
                      to="/add_charges"
                      activeClassName="activeClicked"
                    >
                      Charges
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/account_details"
                      activeClassName="activeClicked"
                    >
                      Account Details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/coupon" activeClassName="activeClicked">
                      Coupon
                    </NavLink>
                  </li>
                </ul>
              )}
            </div> */}

            {/* <div>
              <CDBSidebarMenuItem
                icon="book"
                onClick={() => toggleSubMenu("recipe")}
              >
                <span className="spanmenu">Recipe</span>
                <i
                  className={` spanicon fa ${isSubMenuOpen("recipe")}`}
                ></i>{" "}
              </CDBSidebarMenuItem>
              {expandedMenu === "recipe" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      exact
                      to="/addroom"
                      activeClassName="activeClicked"
                    >
                      Create Recipe
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/viewroom"
                      activeClassName="activeClicked"
                    >
                      Recipe
                    </NavLink>
                  </li>
                </ul>
              )}
            </div> */}

            <div>
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
            </div>


            <div>
              <CDBSidebarMenuItem
                icon="book" onClick={() => toggleSubMenu("gallery")}>
                <span className="spanmenu">Gallery</span>
                <i className={` spanicon fa ${isSubMenuOpen("gallery")}`}></i>{" "}
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
                    <NavLink exact
                      to="/gallery"
                      activeClassName="activeClicked">
                      Gallery
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>


            <div>
              <CDBSidebarMenuItem
                icon="book" onClick={() => toggleSubMenu("feedback")}>
                <span className="spanmenu">Feedback</span>
                <i className={` spanicon fa ${isSubMenuOpen("feedback")}`}></i>{" "}
              </CDBSidebarMenuItem>
              {expandedMenu === "feedback" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      exact
                      to="/feedback"
                      activeClassName="activeClicked"
                    >
                      Send feedback
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact
                      to="/viewfeedback"
                      activeClassName="activeClicked">
                     Feedback
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>


            <div>
              <CDBSidebarMenuItem
                icon="hotel"
                onClick={() => toggleSubMenu("rooms")}>
                <span className="spanmenu">Rooms</span>
                <i className={` spanicon fa ${isSubMenuOpen("rooms")}`}></i>{" "}
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
            </div>

            {/* <div>
              <CDBSidebarMenuItem
                icon="list-alt"
                onClick={() => toggleSubMenu("menus")}
              >
                <span className="spanmenu">Menus</span>
                <i className={` spanicon fa ${isSubMenuOpen("menus")}`}></i>
              </CDBSidebarMenuItem>
              {expandedMenu === "menus" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      exact
                      to="/add_menu"
                      activeClassName="activeClicked"
                    >
                      Add Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact to="/menu" activeClassName="activeClicked">
                      Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/add_menu_type"
                      activeClassName="activeClicked"
                    >
                      Add Menu Type
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/menu_type"
                      activeClassName="activeClicked"
                    >
                      Menu Type
                    </NavLink>
                  </li>
                </ul>
              )}
            </div> */}

            {/* <div>
              <CDBSidebarMenuItem
                icon="trash-alt"
                onClick={() => toggleSubMenu("wastages")}
              >
                <span className="spanmenu">Wastages</span>
                <i className={`spanicon fa ${isSubMenuOpen("wastages")}`}></i>
              </CDBSidebarMenuItem>
              {expandedMenu === "wastages" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      exact
                      to="/add_wastage"
                      activeClassName="activeClicked"
                    >
                      Add Wastage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/wastage"
                      activeClassName="activeClicked"
                    >
                      Wastage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/wastage_orders"
                      activeClassName="activeClicked"
                    >
                      Wastage Orders
                    </NavLink>
                  </li>
                </ul>
              )}
            </div> */}

            {/* <div>
              <CDBSidebarMenuItem
                icon="box"
                onClick={() => toggleSubMenu("inventory")}
              >
                <span className="spanmenu">Inventory</span>
                <i className={`spanicon fa ${isSubMenuOpen("inventory")}`}></i>
              </CDBSidebarMenuItem>
              {expandedMenu === "inventory" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      exact
                      to="/add_raw_materials"
                      activeClassName="activeClicked"
                    >
                      Add Raw Materials
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/raw_materials"
                      activeClassName="activeClicked"
                    >
                      Raw Materials
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/closing_stock"
                      activeClassName="activeClicked"
                    >
                      Closing Stock
                    </NavLink>
                  </li>
                </ul>
              )}
            </div> */}
{/* 
            <div>
              <CDBSidebarMenuItem
                icon="chart-line"
                onClick={() => toggleSubMenu("sales")}
              >
                <span className="spanmenu">Sales Report</span>
                <i className={`spanicon fa ${isSubMenuOpen("sales")}`}></i>
              </CDBSidebarMenuItem>
              {expandedMenu === "sales" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink exact to="/sales" activeClassName="activeClicked">
                      Sales
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to="/create_report"
                      activeClassName="activeClicked"
                    >
                      Create Sales Report
                    </NavLink>
                  </li>
                </ul>
              )}
            </div> */}

            <div>
              <CDBSidebarMenuItem
                icon="users"
                onClick={() => toggleSubMenu("users")}
              >
                <span className="spanmenu">Users</span>
                <i className={`spanicon fa ${isSubMenuOpen("users")}`}></i>
              </CDBSidebarMenuItem>
              {expandedMenu === "users" && (
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      exact
                      to="/add_user"
                      activeClassName="activeClicked"
                    >
                      Add Users
                    </NavLink>
                  </li>
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
            </div>
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
  );
};

export default Sidebar;
