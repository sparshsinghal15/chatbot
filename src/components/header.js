import React from "react";
import Button from "antd/es/button";
import { RIGHT_PANEL_ENUM } from "../constants/constants";
import message from "antd/es/message";

// This is the header of our application
const Header = ({ setPanelStatus, setCurrentNode, nodes, edges }) => {
  // Invalid save function is used to throw a warning in case there is an independent node remaining
  const invalidSave = () => {
    let count = 0;
    let hashmap = new Map();
    nodes.forEach((node) => {
      hashmap.set(node.id, 0);
    });
    edges.forEach((edge) => {
      hashmap.set(edge.source, hashmap.get(edge.source) + 1);
    });
    hashmap.forEach((value) => {
      if (value == 0) count++;
    });
    if (count >= 2) return true;
    return false;
  };

  const onSaveClick = () => {
    setPanelStatus(RIGHT_PANEL_ENUM.NODES_PANEL);
    setCurrentNode(null);

    if (invalidSave()) message.error("Cannot save flow");
  };

  return (
    <div className="header flex text-center">
      <div className="partition-left" />
      <div className="partition-right">
        <Button className="my-1" type="primary" ghost onClick={onSaveClick}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Header;
