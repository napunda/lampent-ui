export type TooltipPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

export interface TooltipCustomProps {
  label?: string;
  position?: TooltipPosition;
  openDelay?: number;
  disabled?: boolean;
  class?: string;
}

export type TooltipProps = TooltipCustomProps;
