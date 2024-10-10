/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.svg" {
  import { ComponentOptions } from "vue";
  const a: ComponentOptions<any>;
  export default a;
}
