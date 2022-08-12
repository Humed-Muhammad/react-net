# react-neti

This tool was created using react hooks and typescript to handle network connectivity checks.
It uses polling to check the network connectivity status of your device in real time.

[Github repository](https://github.com/Humed-Muhammad/react-net)

# Example

## Hooks

```tsx
import React from "react";
import { useConnection } from "react-neti";

export const App = () => {
  const { connection } = useConnection();
  return <div>{connection ? "Online" : "Offline"}</div>;
};
```

## Components

```tsx
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
