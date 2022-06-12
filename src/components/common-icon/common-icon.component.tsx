import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "./common-icon.types";

export const CommonIcon = (props: IconProps) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};
