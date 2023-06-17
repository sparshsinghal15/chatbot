import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import messageIcon from "../icons/message.svg";
import pinIcon from "../icons/pin.svg";

const TextNode = ({ data }) => {
  const onChange = useCallback((e) => {
    console.log(e.target.value);
  }, []);

  return (
    <div className="text-node">
      <Handle
        className="custom-handle"
        type="target"
        position={Position.Left}
      />
      <div className="heading flex space-between">
        <div className="flex">
          <img src={messageIcon} />
          <div>Send Message</div>
        </div>
        <img src={pinIcon} />
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
