import React from "react";

const Line = ({ color = "#000", height = 5 }) =>
    <div className="line" style={{ backgroundColor: color, height }} />;

export default Line;
