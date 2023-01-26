import React from "react";
import { TimePicker } from "antd";
import { Content } from "antd/es/layout/layout";
const TimePickerComponent = () => {
  return (
    <div>
      <div
        className="App"
        style={{
          display: "block",
          width: "100%",
          height: "95vh",
          padding: 100,
          backgroundColor: "brown",
        }}
      >
        <h4>ReactJS Ant-Design TimePicker Component</h4>
        <>
          <TimePicker onChange={(time) => console.log(time)} />,
        </>
      </div>
      <div className="open_grepper_editor" title="Edit & Save To Grepper"></div>
    </div>
  );
};

export default TimePickerComponent;
