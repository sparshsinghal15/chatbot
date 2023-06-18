import { Handle, Position } from "reactflow";
import messageIcon from "../../../icons/message.svg";
import pinIcon from "../../../icons/pin.svg";

// This is the textnode (a custom made node), one of the node that appears in workspace (currently we have only one node, however the nodes can be created and added in nodes folder and imported here)

const TextNode = ({ data }) => {
  return (
    <div className="text-node">
      <Handle
        className="custom-handle"
        type="target"
        position={Position.Left}
      />
      <div className="heading flex space-between">
        <div className="flex align-center">
          <img src={messageIcon} />
          <div>Send Message</div>
        </div>
        <div className="pin-icon">
          <img src={pinIcon} />
        </div>
      </div>
      <div className="text-value">{data.value}</div>
      <Handle
        className="custom-handle"
        type="source"
        position={Position.Right}
      />
    </div>
  );
};

export default TextNode;
