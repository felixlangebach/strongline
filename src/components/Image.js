import React from "react";

const Image = ({ className, src, alt = "image" }) => {
    if (~src.indexOf("http")) {
        return <img src={src} alt={alt} />;
    }

    return <img className={className} src={`/assets/img/${src}`} alt={alt} />;
};

export default Image;
