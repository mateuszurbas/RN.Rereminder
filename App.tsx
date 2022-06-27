import React from "react";
import { CoreApp } from "@core";
import { useCachedResources } from "@hooks";

export default function App() {
  const isLoadingComplete = useCachedResources();
  return isLoadingComplete ? <CoreApp /> : null;
}
