import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";

// Reactflow
import ReactFlow, { addEdge, MarkerType } from "reactflow";
import "reactflow/dist/style.css";

// Nodes
import TextNode from "./nodes/textnode";

//Constants
import { RIGHT_PANEL_ENUM } from "../../constants/constants";

const Workspace = ({
  setPanelStatus,
  nodes,
  setNodes,
  onNodesChange,
  currentNode,
  setCurrentNode,
  edges,
  setEdges,
  onEdgesChange,
}) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  // nodeTypes is the list of nodes which will can be used in our workspace. Just import a node and add it here
  const nodeTypes = useMemo(() => ({ textNode: TextNode }), []);
  const [id, setId] = useState(1);

  useEffect(() => {
    // This function is used to change the class of the node if it is selected (to add a blue border around the selected node)
    const updateNodes = nodes.map((node) => {
      if (node.id === currentNode?.id) node.className = "selected-node";
      else node.className = "unselected-node";

      return node;
    });
    setNodes(updateNodes);
  }, [currentNode]);

  const onConnect = useCallback(
    (params) => {
      // this code is for putting a check such that only one edge can be created from a source
      const existingEdges = edges.filter(
        (edge) => edge.source == params.source
      );
      if (existingEdges.length === 0) {
        const edge = {
          ...params,
          // ArrowClosed is to add the little arrow at the edge endpoint at target node
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        };
        setEdges((eds) => addEdge(edge, eds));
      }
    },
    [edges]
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

      // newNode properties can be modified to set them at the point of creation of the node
      const newNode = {
        id: `dndnode_${id}`,
        type: "textNode",
        position,
        className: "unselected-node",
        data: { label: `${type} node`, value: `text message ${id}` },
      };

      setId(id + 1);
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, id]
  );

  // This function is called when a node is clicked to make changes in it using settings panel
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
        proOptions={{ hideAttribution: true }}
        fitView
      ></ReactFlow>
    </div>
  );
};

export default Workspace;
