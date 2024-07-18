/* eslint-disable vue/multi-word-component-names */
import { defineAsyncComponent } from "vue";
export function registerGlobalComponents(app) {
  app.component(
    "default",
    defineAsyncComponent(() => import("../layout/Default"))
  );
  app.component(
    "auth",
    defineAsyncComponent(() => import("../layout/Auth"))
  );
}
