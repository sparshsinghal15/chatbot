import React from "react";
import Button from "antd/es/button";
import { RIGHT_PANEL_ENUM } from "../constants/constants";

const Header = ({ setPanelStatus, setNodes }) => {
  const onSaveClick = () => {
    setPanelStatus(RIGHT_PANEL_ENUM.NODES_PANEL);
  };

  return (
    <div className="header flex text-center">
      <div className="partition-left" />
      <div className="partition-right">
        <Button className="my-1" type="primary" ghost onClick={onSaveClick}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Header;
