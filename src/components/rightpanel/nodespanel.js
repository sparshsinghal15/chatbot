import React from "react";
import Button from "antd/es/button";
import messageIcon from "../../icons/message.svg";

const NodesPanel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="nodes-panel  p-1">
      <Button
        className="custom-button"
        type="primary"
        ghost
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        <img src={messageIcon}></img>
        <div>Message</div>
      </Button>
    </div>
  );
};

export default NodesPanel;
