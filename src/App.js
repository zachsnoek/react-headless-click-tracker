import React from "react";
import { ClickTracker } from "./ClickTracker";

const defaultStyles = {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
};

const BlueClickTracker = () => {
    return (
        <ClickTracker>
            {({ clickCount }) => (
                <div
                    style={{
                        ...defaultStyles,
                        width: "200px",
                        height: "200px",
                        backgroundColor: "lightblue",
                    }}
                >
                    <p>Click me (I'm blue)</p>
                    <p>Clicks: {clickCount}</p>
                </div>
            )}
        </ClickTracker>
    );
};
const GreenClickTracker = () => {
    return (
        <ClickTracker>
            {({ clickCount }) => (
                <div
                    style={{
                        ...defaultStyles,
                        width: "300px",
                        height: "300px",
                        backgroundColor: "darkseagreen",
                    }}
                >
                    <p>Click me (I'm green)</p>
                    <p>Clicks: {clickCount}</p>
                </div>
            )}
        </ClickTracker>
    );
};

const CoralCountTracker = () => {
    return (
        <ClickTracker>
            {({ clickCount }) => (
                <div
                    style={{
                        ...defaultStyles,
                        width: "400px",
                        height: "400px",
                        backgroundColor: "lightcoral",
                    }}
                >
                    <p>Click me (I'm coral)</p>
                    <p>Clicks: {clickCount}</p>
                </div>
            )}
        </ClickTracker>
    );
};

function App() {
    return (
        <>
            <BlueClickTracker />
            <GreenClickTracker />
            <CoralCountTracker />
        </>
    );
}

export default App;
