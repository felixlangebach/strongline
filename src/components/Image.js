import React from "react";

const Image = ({ src, alt = "image" }) => {
    if (~src.indexOf("http")) {
        return <img src={src} alt={alt} />;
    }

    return <img src={`/assets/img/${src}`} alt={alt} />;
};

export default Image;
