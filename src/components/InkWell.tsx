import { BorderRadius } from "@/abstract/BorderRadius";
import { Color } from "@/abstract/Color";
import { Key } from "@/abstract/Key";
import { SystemMouseCursor, SystemMouseCursors } from "@/abstract/MouseCursor";
import { Component, defineComponent, h } from "vue";
import { GestureDetector, GestureDetectorI } from "./GestureDetector";
import { MouseRegion } from "./MouseRegion";
export interface InkWellI extends GestureDetectorI {
  child: Component;
  key?: Key;
  mouseCursor?: SystemMouseCursor;
  focusColor?: Color;
  borderRadius?: BorderRadius;
  hoverColor?: Color;
  overlayColor?: Color;
  highlightColor?: Color;
  // onHighlightChanged?: ValueChanged<bool>
  // onHover?: ValueChanged<bool>
  // TODO: add ripple effect
  // splashFactory: InkRipple.splashFactory
  // splashColor:
  // autofocus: boolean
  // customBorder: ShapeBorder
}
export const InkWell = ({ child, mouseCursor, onTap, key }: InkWellI) => {
  const result = MouseRegion({
    child: GestureDetector({
      onTap,
      child,
    }),
    cursor:
      mouseCursor ??
      SystemMouseCursor.use({ cursor: SystemMouseCursors.basic }),
  });

  return defineComponent({
    name: "InkWell",
    render() {
      return h("div", { class: "" }, [h(result)]);
    },
  });
};
