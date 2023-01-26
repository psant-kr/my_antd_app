import React from "react";
import "antd/dist/reset.css";
import "./App.css";

import ButtonComponents from "./components/ButtonComponents";
import TimePickerComponent from "./components/TimePickerComponent";
import FormComponent from "./components/FormComponent";
import NavigationMenuComponent from "./components/NavigationMenuComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <div>
    {/* <NavigationMenuComponent />
    <ButtonComponents />
    <TimePickerComponent />
    <FormComponent /> */}
    <BrowserRouter>
      <NavigationMenuComponent />
      <Routes>
        <Route path="/" element={<FormComponent />}></Route>
        <Route path="/form" element={<FormComponent />}></Route>
        <Route path="/timepicker" element={<TimePickerComponent />}></Route>
        <Route path="/button" element={<ButtonComponents />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
