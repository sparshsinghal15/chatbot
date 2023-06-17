import { React, useState } from "react";

import { RIGHT_PANEL_ENUM } from "../../constants/constants";

import NodesPanel from "./nodespanel";
import SettingsPanel from "./settingspanel";

const RightPanel = ({
  panelStatus,
  setPanelStatus,
  currentNode,
  setNodes,
  nodes,
}) => {
  return (
    <div className="right-panel partition-right">
      {panelStatus === RIGHT_PANEL_ENUM.NODES_PANEL ? (
        <NodesPanel />
      ) : (
        <SettingsPanel
          nodes={nodes}
          setPanelStatus={setPanelStatus}
          setNodes={setNodes}
          currentNode={currentNode}
        />
      )}
    </div>
  );
};

export default RightPanel;
