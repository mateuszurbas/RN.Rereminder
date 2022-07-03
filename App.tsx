import React from "react";
import { CoreApp } from "@core";
import * as Notifications from "expo-notifications";
import { useCachedResources, useNotification } from "@hooks";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  useNotification();
  const isLoadingComplete = useCachedResources();
  return isLoadingComplete ? <CoreApp /> : null;
}
