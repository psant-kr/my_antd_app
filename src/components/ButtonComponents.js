import React from "react";
import { Button } from "antd";

const ButtonComponents = () => {
  return (
    <div
      style={{
        display: "block",
        // width: 600,
        width: "100%",
        height: "95vh",
        padding: 50,
        backgroundColor: "gray",
      }}
    >
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
};

export default ButtonComponents;
