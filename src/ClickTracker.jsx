import React from "react";

const ClickTracker = ({ children }) => {
    const [clickCount, setClickCount] = React.useState(0);
    const handleClick = () => setClickCount(clickCount + 1);

    return (
        <div
            style={{ height: "max-content", width: "max-content" }}
            onClick={handleClick}
        >
            {children({ clickCount })}
        </div>
    );
};

export { ClickTracker };
