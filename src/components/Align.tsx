import { Alignment } from "@/abstract/Alignment";
import { Component, defineComponent, h } from "vue";

export const Align = ({
  child,
  alignment,
}: {
  child: Component;
  alignment: Alignment;
}) =>
  defineComponent({
    name: "Align",
    render() {
      return h("div", { class: alignment.css }, [h(child)]);
    },
  });