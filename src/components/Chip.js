import React from "react";

const Chip = ({ text }) =>
    <span className="mdl-chip">
        <span className="mdl-chip__text">
            {text}
        </span>
    </span>;

export default Chip;
