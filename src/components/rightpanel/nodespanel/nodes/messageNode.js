import React from "react";
import Button from "antd/es/button";
import messageIcon from "../../../../icons/message.svg";

// The message node of the nodes panel
// This is one of the many nodes which can be created and stored in nodes folder

const MessageNode = ({ onDragStart }) => {
  return (
    <div className="nodes-panel  p-1">
      <Button
        className="custom-button"
        type="primary"
        ghost
        onDragStart={(event) => onDragStart(event, "textNode")}
        draggable
      >
        <img src={messageIcon}></img>
        <div>Message</div>
      </Button>
    </div>
  );
};

export default MessageNode;
