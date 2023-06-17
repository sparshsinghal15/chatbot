import React, { useState } from "react";
import { ReactFlowProvider } from "reactflow";
import { useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import RightPanel from "./rightpanel/rightpanel";
import Workspace from "./workspace";
import Header from "./header";

const Main = () => {
  const [panelStatus, setPanelStatus] = useState(1);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [currentNode, setCurrentNode] = useState(null);

  return (
    <div className="app-area flex flex-direction-column">
      <Header setPanelStatus={setPanelStatus} nodes={nodes} />
      <div className="main flex">
        <ReactFlowProvider>
          <Workspace
            setPanelStatus={setPanelStatus}
            setCurrentNode={setCurrentNode}
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
          />
          <RightPanel
            panelStatus={panelStatus}
            setPanelStatus={setPanelStatus}
            setNodes={setNodes}
            currentNode={currentNode}
            nodes={nodes}
          />
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default Main;
