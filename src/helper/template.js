const template = (value = "", data = {}) => {
    if (typeof value !== "string") {
        return "";
    } else if (typeof data !== "object") {
        return value;
    }

    for (let prop in data) {
        let expr = new RegExp("{" + prop + "}", "gm");
        value = value.replace(expr, data[prop]);
    }

    return value;
};

export default template;
