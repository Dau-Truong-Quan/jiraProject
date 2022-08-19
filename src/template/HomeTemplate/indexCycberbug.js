import React from "react";
import ContentCycberbug from "../../component/CycberBug/Main/ContentCycberbug";
import HeaderCycberbug from "../../component/CycberBug/Main/HeaderCycberbug";
import InforCyberBug from "../../component/CycberBug/Main/InforCyberBug";
import ModelCycberbug from "../../component/CycberBug/ModelCycberbug/ModelCycberbug";
import SidebarCycberbug from "../../component/CycberBug/SidebarCycberbug";

const indexCycberbug = () => {
  return (
    <div className="main">
      <HeaderCycberbug />
      <h3>Cyber Board</h3>
      <InforCyberBug />
      <ContentCycberbug />
    </div>
  );
};

export default indexCycberbug;
