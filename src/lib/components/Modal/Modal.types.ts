import type { ComponentSize } from "@/types";

export interface ModalCustomProps {
  opened?: boolean;
  title?: string;
  size?: ComponentSize;
  class?: string;
}

export type ModalProps = ModalCustomProps;
