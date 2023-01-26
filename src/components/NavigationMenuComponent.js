import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
const items = [
  {
    label: "Navigation Button",
    key: "button",
  },
  {
    label: "Navigation TimePicker",
    key: "timepicker",
  },
  {
    label: "Navigation Form",
    key: "form",
  },
];
const NavigationMenuComponent = () => {
  //   const [current, setCurrent] = useState("button");
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("clickd ", e.key);
    // setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <Menu
      style={{
        background: "blue",
        fontSize: "17px",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: "#FFFF",
      }}
      onClick={onClick}
      //   selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default NavigationMenuComponent;
