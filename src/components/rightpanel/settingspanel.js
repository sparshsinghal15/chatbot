import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";

import backArrow from "../../icons/back-arrow.svg";

const SettingsPanel = ({ setPanelStatus, currentNode, setNodes, nodes }) => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(currentNode.data.value);
  }, [currentNode]);

  const onChangeTextValue = (e) => {
    const changedNodes = [];
    setTextValue(e.target.value);
    nodes.map((node) => {
      changedNodes.push(
        node.id === currentNode.id
          ? { ...node, data: { ...node.data, value: e.target.value } }
          : node
      );
    });
    setNodes(changedNodes);
  };

  return (
    <div className="settings-panel">
      <div className="heading flex vertical-align-center text-center py-1 pl-2">
        <img
          className="cursor-pointer"
          src={backArrow}
          onClick={() => setPanelStatus(1)}
        />
        <div className="text-center w-100">Message</div>
      </div>
      <div className="text-area p-1 py-2">
        <div className="text-heading mb-2">Text</div>
        <TextArea value={textValue} onChange={onChangeTextValue} />
      </div>
    </div>
  );
};

export default SettingsPanel;
