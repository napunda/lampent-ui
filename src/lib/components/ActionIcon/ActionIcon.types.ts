import type { ComponentStyleProps } from "@/types";

export interface ActionIconCustomProps extends ComponentStyleProps {
  loading?: boolean;
  disabled?: boolean;
}

export type ActionIconProps = ActionIconCustomProps;
