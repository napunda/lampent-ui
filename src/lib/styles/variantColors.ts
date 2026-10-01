import type { ComponentVariant, SemanticColor } from "@/types";

export const buttonVariantColorClasses: Record<
  ComponentVariant,
  Record<SemanticColor, string>
> = {
  filled: {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500",
    success:
      "bg-success-500 text-white hover:bg-success-600 focus-visible:ring-success-500",
    warning:
      "bg-warning-500 text-neutral-900 hover:bg-warning-600 focus-visible:ring-warning-500",
    danger:
      "bg-danger-500 text-white hover:bg-danger-600 focus-visible:ring-danger-500",
    neutral:
      "bg-neutral-500 text-white hover:bg-neutral-600 focus-visible:ring-neutral-500",
  },
  outline: {
    primary:
      "border-primary-500 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500",
    success:
      "border-success-500 text-success-600 hover:bg-success-50 focus-visible:ring-success-500",
    warning:
      "border-warning-600 text-warning-800 hover:bg-warning-50 focus-visible:ring-warning-500",
    danger:
      "border-danger-500 text-danger-600 hover:bg-danger-50 focus-visible:ring-danger-500",
    neutral:
      "border-neutral-500 text-neutral-600 hover:bg-neutral-50 focus-visible:ring-neutral-500",
  },
  light: {
    primary:
      "bg-primary-50 text-primary-700 hover:bg-primary-100 focus-visible:ring-primary-500",
    success:
      "bg-success-50 text-success-700 hover:bg-success-100 focus-visible:ring-success-500",
    warning:
      "bg-warning-50 text-warning-700 hover:bg-warning-100 focus-visible:ring-warning-500",
    danger:
      "bg-danger-50 text-danger-700 hover:bg-danger-100 focus-visible:ring-danger-500",
    neutral:
      "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-500",
  },
  default: {
    primary:
      "text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500",
    success:
      "text-success-600 hover:bg-success-50 focus-visible:ring-success-500",
    warning:
      "text-warning-800 hover:bg-warning-50 focus-visible:ring-warning-500",
    danger: "text-danger-600 hover:bg-danger-50 focus-visible:ring-danger-500",
    neutral:
      "text-neutral-600 hover:bg-neutral-50 focus-visible:ring-neutral-500",
  },
};

export const inputVariantColorClasses: Record<
  ComponentVariant,
  Record<SemanticColor, string>
> = {
  filled: {
    primary:
      "border-transparent bg-primary-100 text-neutral-950 placeholder:text-primary-400 focus-visible:ring-primary-500",
    success:
      "border-transparent bg-success-100 text-neutral-950 placeholder:text-success-600 focus-visible:ring-success-500",
    warning:
      "border-transparent bg-warning-100 text-neutral-950 placeholder:text-warning-700 focus-visible:ring-warning-500",
    danger:
      "border-transparent bg-danger-100 text-neutral-950 placeholder:text-danger-500 focus-visible:ring-danger-500",
    neutral:
      "border-transparent bg-neutral-200 text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-neutral-500",
  },
  outline: {
    primary:
      "border-primary-500 bg-transparent text-neutral-950 placeholder:text-primary-400 focus-visible:ring-primary-500",
    success:
      "border-success-500 bg-transparent text-neutral-950 placeholder:text-success-600 focus-visible:ring-success-500",
    warning:
      "border-warning-600 bg-transparent text-neutral-950 placeholder:text-warning-700 focus-visible:ring-warning-500",
    danger:
      "border-danger-500 bg-transparent text-neutral-950 placeholder:text-danger-500 focus-visible:ring-danger-500",
    neutral:
      "border-neutral-400 bg-transparent text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-neutral-500",
  },
  light: {
    primary:
      "border-transparent bg-primary-50 text-neutral-950 placeholder:text-primary-400 focus-visible:ring-primary-500",
    success:
      "border-transparent bg-success-50 text-neutral-950 placeholder:text-success-600 focus-visible:ring-success-500",
    warning:
      "border-transparent bg-warning-50 text-neutral-950 placeholder:text-warning-700 focus-visible:ring-warning-500",
    danger:
      "border-transparent bg-danger-50 text-neutral-950 placeholder:text-danger-500 focus-visible:ring-danger-500",
    neutral:
      "border-transparent bg-neutral-50 text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-neutral-500",
  },
  default: {
    primary:
      "border-transparent bg-transparent text-neutral-950 placeholder:text-primary-400 focus-visible:ring-primary-500",
    success:
      "border-transparent bg-transparent text-neutral-950 placeholder:text-success-600 focus-visible:ring-success-500",
    warning:
      "border-transparent bg-transparent text-neutral-950 placeholder:text-warning-700 focus-visible:ring-warning-500",
    danger:
      "border-transparent bg-transparent text-neutral-950 placeholder:text-danger-500 focus-visible:ring-danger-500",
    neutral:
      "border-transparent bg-transparent text-neutral-950 placeholder:text-neutral-500 focus-visible:ring-neutral-500",
  },
};

export const badgeVariantColorClasses: Record<
  ComponentVariant,
  Record<SemanticColor, string>
> = {
  filled: {
    primary: "bg-primary-500 text-white",
    success: "bg-success-500 text-white",
    warning: "bg-warning-500 text-neutral-900",
    danger: "bg-danger-500 text-white",
    neutral: "bg-neutral-500 text-white",
  },
  outline: {
    primary: "border border-primary-500 text-primary-600 bg-transparent",
    success: "border border-success-500 text-success-600 bg-transparent",
    warning: "border border-warning-600 text-warning-800 bg-transparent",
    danger: "border border-danger-500 text-danger-600 bg-transparent",
    neutral: "border border-neutral-500 text-neutral-600 bg-transparent",
  },
  light: {
    primary: "bg-primary-50 text-primary-700",
    success: "bg-success-50 text-success-700",
    warning: "bg-warning-50 text-warning-700",
    danger: "bg-danger-50 text-danger-700",
    neutral: "bg-neutral-100 text-neutral-700",
  },
  default: {
    primary: "bg-transparent text-primary-600",
    success: "bg-transparent text-success-600",
    warning: "bg-transparent text-warning-800",
    danger: "bg-transparent text-danger-600",
    neutral: "bg-transparent text-neutral-600",
  },
};

export const alertVariantColorClasses: Record<
  ComponentVariant,
  Record<SemanticColor, string>
> = {
  filled: {
    primary: "bg-primary-500 text-white border-primary-600",
    success: "bg-success-500 text-white border-success-600",
    warning: "bg-warning-500 text-neutral-900 border-warning-600",
    danger: "bg-danger-500 text-white border-danger-600",
    neutral: "bg-neutral-600 text-white border-neutral-700",
  },
  outline: {
    primary: "border border-primary-500 text-primary-700 bg-primary-50/50",
    success: "border border-success-500 text-success-700 bg-success-50/50",
    warning: "border border-warning-500 text-warning-800 bg-warning-50/50",
    danger: "border border-danger-500 text-danger-700 bg-danger-50/50",
    neutral: "border border-neutral-400 text-neutral-700 bg-neutral-50/50",
  },
  light: {
    primary: "bg-primary-50 text-primary-800 border-primary-200",
    success: "bg-success-50 text-success-800 border-success-200",
    warning: "bg-warning-50 text-warning-900 border-warning-200",
    danger: "bg-danger-50 text-danger-800 border-danger-200",
    neutral: "bg-neutral-50 text-neutral-800 border-neutral-200",
  },
  default: {
    primary: "bg-transparent text-primary-700 border-primary-300",
    success: "bg-transparent text-success-700 border-success-300",
    warning: "bg-transparent text-warning-800 border-warning-300",
    danger: "bg-transparent text-danger-700 border-danger-300",
    neutral: "bg-transparent text-neutral-700 border-neutral-300",
  },
};
