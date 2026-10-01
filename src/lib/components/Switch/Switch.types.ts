import type { ComponentSize } from "@/types";

export interface SwitchCustomProps {
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  size?: ComponentSize;
  class?: string;
}

export type SwitchProps = SwitchCustomProps;
