# react-headless-click-tracker

## Description

`ClickTracker` is a simple headless UI component implemented with a render prop. It exposes a `clickCount` prop that counts the number of times the component has been clicked.

## Usage

```jsx
const myClickTracker = () => (
    <ClickTracker>
        {({ clickCount }) => <div>I've been clicked {clickCount} times!</div>}
    </ClickTracker>
);
```
