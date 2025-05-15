"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { PropsWithChildren } from "react";

// **Named** export of TooltipProvider
export function TooltipProvider({ children }: PropsWithChildren) {
  return (
    <TooltipPrimitive.Provider>
      {children}
    </TooltipPrimitive.Provider>
  );
}

// (Optional) Re-export the other primitives you need
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipContent = TooltipPrimitive.Content;
