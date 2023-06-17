import React, { useState, useRef, useCallback, useMemo } from "react";
import ReactFlow, { addEdge, useEdgesState } from "reactflow";
import TextNode from "./textnode";
import "reactflow/dist/style.css";
import { RIGHT_PANEL_ENUM } from "../constants/constants";

let id = 0;
const getId = () => `dndnode_${id++}`;

const Workspace = ({
  setPanelStatus,
  nodes,
  setNodes,
  onNodesChange,
  setCurrentNode,
}) => {
  const reactFlowWrapper = useRef(null);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const nodeTypes = useMemo(() => ({ textNode: TextNode }), []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type: "textNode",
        position,
        data: { label: `${type} node`, value: `text message ${id}` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onNodeClick = (e, node) => {
    setPanelStatus(RIGHT_PANEL_ENUM.SETTINGS_PANEL);
    setCurrentNode({ ...node });
  };

  return (
    <div className="workspace partition-left" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={onNodeClick}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      ></ReactFlow>
    </div>
  );
};

export default Workspace;
