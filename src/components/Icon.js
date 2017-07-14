import React from "react";

const Icon = ({ name }) => {
    if (name) {
        name = name.split(" ").join("_");
    }

    return name
        ? <i className="material-icons">
              {name}
          </i>
        : null;
};

export default Icon;
