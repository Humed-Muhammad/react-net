# react-neti

This tool was created using react hooks, typescript and bundled using rollup to handle network connectivity checks.It uses polling to check the network connectivity status of your device in real time.

## New in version 1.2.71

=== support for cjs module ===

[Github repository](https://github.com/Humed-Muhammad/react-net)

# Example

## Hooks

```tsx
import React from "react";
import { useConnection } from "react-neti";

export const App = () => {
  // pollingIntreval optional parameter
  const { connection } = useConnection({ pollingIntreval: 1000 });
  return <div>{connection ? "Online" : "Offline"}</div>;
};
```

## Components

```tsx
//  Accept pollingIntreval prop
import React from "react";
import { OnlineWrapper, OfflineWrapper } from "react-neti";
export const App = () => {
  return (
    <>
      <OnlineWrapper>
        I will appear only when there is internet connection available
      </OnlineWrapper>
      <OfflineWrapper>
        I will appear only when there is no internet connection
      </OfflineWrapper>
    </>
  );
};
```

## Styling and props

```tsx
// Accept pollingIntreval prop
// children can be component | number | string
return (
  <div>
    <OnlineWrapper style={...your - style} className="your className">
      <YourComponent />
    </OnlineWrapper>
  </div>
);
```
