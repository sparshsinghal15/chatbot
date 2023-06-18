import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";

import backArrow from "../../icons/back-arrow.svg";
import { RIGHT_PANEL_ENUM } from "../../constants/constants";

// This is the panel where we can modify text message of the message node as of now.
// The settings panel can be modified in future if additional settings are required for the respective nodes

const SettingsPanel = ({
  setPanelStatus,
  setCurrentNode,
  currentNode,
  setNodes,
  nodes,
}) => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(currentNode.data.value);
  }, [currentNode]);

  const onChangeTextValue = (e) => {
    const changedNodes = [];
    setTextValue(e.target.value);
    nodes.map((node) => {
      changedNodes.push(
        node.id === currentNode?.id
          ? { ...node, data: { ...node.data, value: e.target.value } }
          : node
      );
    });
    setNodes(changedNodes);
  };

  const onBack = () => {
    setPanelStatus(RIGHT_PANEL_ENUM.NODES_PANEL);
    setCurrentNode(null);
  };

  return (
    <div className="settings-panel">
      <div className="heading flex vertical-align-center text-center py-1 pl-2">
        <img className="cursor-pointer" src={backArrow} onClick={onBack} />
        <div className="text-center w-100">Message</div>
      </div>
      <div className="text-area p-1 py-2">
        <div className="text-heading mb-1">Text</div>
        <TextArea value={textValue} onChange={onChangeTextValue} />
      </div>
    </div>
  );
};

export default SettingsPanel;
