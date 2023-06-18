import React, { useState } from "react";
import { ReactFlowProvider } from "reactflow";
import { useNodesState, useEdgesState } from "reactflow";
import "reactflow/dist/style.css";

// Components
import RightPanel from "./rightpanel/rightpanel";
import Workspace from "./workspace/workspace";
import Header from "./header";

const Main = () => {
  const [panelStatus, setPanelStatus] = useState(1);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [currentNode, setCurrentNode] = useState(null);

  return (
    // The "Main" component is complete screen comprising of the componente Header, Workspace and Rightpanel
    <div className="app-area flex flex-direction-column">
      <Header
        setPanelStatus={setPanelStatus}
        setCurrentNode={setCurrentNode}
        nodes={nodes}
        edges={edges}
      />
      <div className="main flex">
        <ReactFlowProvider>
          <Workspace
            setPanelStatus={setPanelStatus}
            currentNode={currentNode}
            setCurrentNode={setCurrentNode}
            nodes={nodes}
            setNodes={setNodes}
            onNodesChange={onNodesChange}
            edges={edges}
            setEdges={setEdges}
            onEdgesChange={onEdgesChange}
          />
          <RightPanel
            panelStatus={panelStatus}
            setPanelStatus={setPanelStatus}
            setNodes={setNodes}
            setCurrentNode={setCurrentNode}
            currentNode={currentNode}
            nodes={nodes}
          />
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default Main;
