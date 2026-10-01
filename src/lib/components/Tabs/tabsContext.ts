import type { InjectionKey, Ref } from "vue";

export interface TabsContext {
  activeTab: Ref<string | undefined>;
  setActiveTab: (value: string) => void;
  orientation: Ref<"horizontal" | "vertical">;
}

export const tabsContextKey: InjectionKey<TabsContext> = Symbol("tabsContext");
