import type { App, Component, Plugin } from "vue";
import ActionIcon from "@/components/ActionIcon";
import Alert from "@/components/Alert";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Checkbox from "@/components/Checkbox";
import Divider from "@/components/Divider";
import Group from "@/components/Group";
import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import Paper from "@/components/Paper";
import Radio from "@/components/Radio";
import Stack from "@/components/Stack";
import Switch from "@/components/Switch";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/Tabs";
import Text from "@/components/Text";
import TextInput from "@/components/TextInput";
import Textarea from "@/components/Textarea";
import Title from "@/components/Title";
import Tooltip from "@/components/Tooltip";
import { applyTheme } from "@/theme/applyTheme";
import { defaultThemeConfig, type ThemeConfig } from "@/types";

function register(app: App, name: string, component: Component) {
  app.component(name, component);
}

export function createLampentUI(config?: ThemeConfig): Plugin {
  const theme = { ...defaultThemeConfig, ...config };

  return {
    install(app: App) {
      applyTheme(theme);
      register(app, "LActionIcon", ActionIcon);
      register(app, "LAlert", Alert);
      register(app, "LAvatar", Avatar);
      register(app, "LBadge", Badge);
      register(app, "LButton", Button);
      register(app, "LCard", Card);
      register(app, "LCheckbox", Checkbox);
      register(app, "LDivider", Divider);
      register(app, "LGroup", Group);
      register(app, "LLoader", Loader);
      register(app, "LModal", Modal);
      register(app, "LPaper", Paper);
      register(app, "LRadio", Radio);
      register(app, "LStack", Stack);
      register(app, "LSwitch", Switch);
      register(app, "LTabs", Tabs);
      register(app, "LTabsList", TabsList);
      register(app, "LTabsPanel", TabsPanel);
      register(app, "LTabsTab", TabsTab);
      register(app, "LText", Text);
      register(app, "LTextInput", TextInput);
      register(app, "LTextarea", Textarea);
      register(app, "LTitle", Title);
      register(app, "LTooltip", Tooltip);
    },
  };
}

export { applyTheme } from "@/theme/applyTheme";
