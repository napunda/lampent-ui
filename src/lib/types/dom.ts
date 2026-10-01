import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  TextareaHTMLAttributes,
} from "vue";
import type { ComponentStyleProps } from "./variants";

/** Props HTML que conflitam com props de design Lampent */
export type StyleNativeConflicts = "class" | "color" | "size";

export type NativeProps<
  TCustom extends object,
  TNative extends object,
  TConflict extends string = StyleNativeConflicts,
> = TCustom & Omit<TNative, keyof TCustom | TConflict>;

/** Atributos HTML comuns repassados via attrs — evita unions TS2590 */
export type CommonNativeAttrs = Pick<
  HTMLAttributes,
  | "id"
  | "title"
  | "tabindex"
  | "role"
  | "aria-label"
  | "aria-labelledby"
  | "aria-describedby"
  | "aria-hidden"
  | "aria-live"
>;

export type CommonButtonAttrs = Pick<
  ButtonHTMLAttributes,
  | "disabled"
  | "type"
  | "name"
  | "form"
  | "autofocus"
  | "tabindex"
  | "id"
  | "title"
  | "aria-label"
  | "aria-labelledby"
  | "aria-describedby"
  | "aria-pressed"
  | "aria-expanded"
  | "aria-controls"
  | "aria-haspopup"
>;

export type CommonInputAttrs = Pick<
  InputHTMLAttributes,
  | "disabled"
  | "readonly"
  | "name"
  | "id"
  | "autocomplete"
  | "autofocus"
  | "tabindex"
  | "required"
  | "pattern"
  | "min"
  | "max"
  | "step"
  | "aria-label"
  | "aria-labelledby"
  | "aria-describedby"
  | "aria-invalid"
  | "aria-required"
>;

export type CommonTextareaAttrs = Pick<
  TextareaHTMLAttributes,
  | "disabled"
  | "readonly"
  | "name"
  | "id"
  | "autocomplete"
  | "autofocus"
  | "tabindex"
  | "required"
  | "cols"
  | "wrap"
  | "aria-label"
  | "aria-labelledby"
  | "aria-describedby"
  | "aria-invalid"
>;

export type ButtonProps = ComponentStyleProps & CommonButtonAttrs;

export interface TextInputCustomProps extends ComponentStyleProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
}

export type TextInputProps = TextInputCustomProps & CommonInputAttrs;

export interface TextareaCustomProps extends ComponentStyleProps {
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
  autosize?: boolean;
  rows?: number;
}

export type TextareaProps = TextareaCustomProps & CommonTextareaAttrs;

export interface CheckboxCustomProps extends Omit<ComponentStyleProps, "variant" | "radius"> {
  modelValue?: boolean;
  label?: string;
  indeterminate?: boolean;
  disabled?: boolean;
}

export type CheckboxProps = CheckboxCustomProps & CommonInputAttrs;

export interface SwitchCustomProps {
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  size?: ComponentStyleProps["size"];
  class?: string;
}

export type SwitchProps = SwitchCustomProps & CommonButtonAttrs;

export interface RadioCustomProps extends Omit<ComponentStyleProps, "variant" | "radius"> {
  modelValue?: string | number;
  value: string | number;
  name?: string;
  label?: string;
  disabled?: boolean;
}

export type RadioProps = RadioCustomProps & CommonInputAttrs;

export type LabelProps = { class?: string } & Pick<
  LabelHTMLAttributes,
  "for" | "id" | "tabindex"
>;

export type AnchorProps = ComponentStyleProps &
  Pick<AnchorHTMLAttributes, "href" | "target" | "rel" | "download" | "id" | "title">;

export type DivNativeProps<TCustom extends object = object> = TCustom &
  CommonNativeAttrs;
