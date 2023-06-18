import React from "react";
import Row from "antd/es/row";
import Col from "antd/es/col";
import MessageNode from "./nodes/messageNode";

// This is our nodes panel where nodes can be imported from the nodes folder and added
const NodesPanel = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="nodes-panel p-1">
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <MessageNode onDragStart={onDragStart} />
        </Col>
      </Row>
    </div>
  );
};

export default NodesPanel;
