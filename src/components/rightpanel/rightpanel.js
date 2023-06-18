import { React, useRef } from "react";

import { RIGHT_PANEL_ENUM } from "../../constants/constants";

import NodesPanel from "./nodespanel/nodespanel";
import SettingsPanel from "./settingspanel";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../../style/transitions.css";

// This is the right panel which can either be nodesPanel or settingsPanel depending upon the state

const RightPanel = ({
  panelStatus,
  setPanelStatus,
  setCurrentNode,
  currentNode,
  setNodes,
  nodes,
}) => {
  const isNodesPanelVisible = panelStatus === RIGHT_PANEL_ENUM.NODES_PANEL;

  const nodesPanelRef = useRef(null);
  const settingsPanelRef = useRef(null);
  const nodeRef = isNodesPanelVisible ? settingsPanelRef : nodesPanelRef;

  return (
    <div className="right-panel partition-right">
      {/* Smooth transitioning has been applied using react-transition-group while switching between panels */}
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={isNodesPanelVisible}
          nodeRef={nodeRef}
          addEndListener={(done) => {
            nodeRef.current.addEventListener("transitionend", done, false);
          }}
          classNames="component"
        >
          <div ref={nodeRef}>
            {isNodesPanelVisible ? (
              <NodesPanel />
            ) : (
              <SettingsPanel
                nodes={nodes}
                setPanelStatus={setPanelStatus}
                setNodes={setNodes}
                setCurrentNode={setCurrentNode}
                currentNode={currentNode}
              />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default RightPanel;
