import React from "react";

import "../styles/ContentWrapper.css";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;