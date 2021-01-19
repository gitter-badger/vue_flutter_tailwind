import { Alignment } from "@/abstract/Alignment";
import { Key } from "@/abstract/Key";
import { Component, defineComponent, h } from "vue";
import { Align } from "./Align";

export interface CenterI {
  child: Component;
  key?: Key;
}

export const Center = ({ child, key }: CenterI) => {
  return defineComponent({
    name: "Center",
    render() {
      return h(
        Align({
          alignment: Alignment.center,
          child,
        })
      );
    },
  });
};
