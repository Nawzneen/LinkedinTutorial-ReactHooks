import React from "react";
import {
  PlusCircleFill,
  CalendarToday,
  CalendarWeek,
  ListTask,
  GearFill,
  BoxArrowRight,
} from "react-bootstrap-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <PlusCircleFill /> Add New Task
          </a>
        </li>
        <li>
          <a href="#">
            <CalendarToday /> Today
          </a>
        </li>
        <li>
          <a href="#">
            <CalendarWeek /> This Week
          </a>
        </li>
        <li>
          <a href="#">
            <ListTask /> All
          </a>
        </li>
        <li>
          <a href="#">
            <GearFill /> Settings
          </a>
        </li>
        <li>
          <a href="#">
            <BoxArrowRight /> Logout
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
