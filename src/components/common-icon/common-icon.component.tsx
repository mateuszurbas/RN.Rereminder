import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "./common-icon.types";

export const CommonIcon = ({ size, name, color, style }: IconProps) => {
  return <FontAwesome size={size} name={name} color={color} style={style} />;
};
