import React from "react";

export function extractText(children: React.ReactNode): string {
  let text = "";

  React.Children.forEach(children, child => {
    if (typeof child === "string" || typeof child === "number") {
      text += child + " ";
    } 
    else if (React.isValidElement(child)) {
      const element = child as React.ReactElement<{ children?: React.ReactNode }>;

      if (element.props?.children) {
        text += extractText(element.props.children);
      }
    }
  });

  return text.trim();
}