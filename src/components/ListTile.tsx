import {
  Alignment,
  Color,
  Colors,
  EdgeInsets,
  EdgeInsetsStep,
  OpacityDecoration,
  OpacityDecorationSteps,
  SystemMouseCursor,
  SystemMouseCursors,
} from "@/abstract";
import { Key } from "@/abstract/Key";
import { Component, defineComponent, h, Ref } from "vue";
import { Align } from "./Align";
import { Column } from "./Column";
import { Container } from "./Container";
import { InkWell } from "./InkWell";
import { Opacity } from "./Opacity";
import { Padding } from "./Padding";
import { Row } from "./Row";

interface ListTileI {
  key?: Maybe<Key>;
  leading?: Maybe<Component>;
  title: Component;
  subtitle?: Maybe<Component>;
  trailing?: Maybe<Component>;
  // isThreeLine
  // dense,
  // visualDensity,
  // shape,
  contentPadding?: Maybe<EdgeInsets>;
  enabled?: Maybe<Ref<boolean>>;
  onTap?: Maybe<GestureTapCallback>;
  // onLongPress,
  mouseCursor?: Maybe<SystemMouseCursor>;
  selected?: Maybe<Ref<boolean>>;
  focusColor?: Maybe<Color>;
  hoverColor?: Maybe<Color>;
  // focusNode,
  // autofocus = false,
  tileColor?: Maybe<Color>;
  selectedTileColor?: Maybe<Color>;
  // enableFeedback,
  // horizontalTitleGap,
  // minVerticalPadding,
  // minLeadingWidth,
}

export const ListTile = ({
  key,
  mouseCursor,
  hoverColor,
  focusColor,
  contentPadding,
  enabled,
  leading,
  onTap,
  selected,
  subtitle,
  tileColor,
  title,
  selectedTileColor,
  trailing,
}: ListTileI) => {
  const resolvedSelectedTileColor = selectedTileColor ?? Colors.indigo;
  // const resolvedTileColor = tileColor ?? Colors.white;
  // FIXME: hover is not working with bg-color
  const tileBackgroundColor = selected
    ? resolvedSelectedTileColor
    : Colors.transparent;
  // const tileBackgroundColor = selected
  //   ? resolvedSelectedTileColor
  //   : resolvedTileColor
  const hasLeading = leading != null;
  const resolvedLeading = leading ?? <div />;
  const hasSubtitle = subtitle != null;
  const resolvedHeight = hasSubtitle ? EdgeInsetsStep.s20 : EdgeInsetsStep.s14;
  const resolvedTrailing = (() => {
    if (trailing != null) {
      return Align({
        alignment: Alignment.centerRight,
        child: Padding({
          padding: EdgeInsets.symmetric({
            horizontal: EdgeInsetsStep.s2,
          }),
          child: trailing,
        }),
      });
    } else {
      return <div />;
    }
  })();
  const resolvedSubtitle = subtitle ?? <div />;
  const resolvedTitleWidget = (() => {
    if (hasSubtitle) {
      return Column({
        children: [title, resolvedSubtitle],
      });
    } else {
      return title;
    }
  })();

  const resolvedContentWidget = (() => {
    if (hasLeading) {
      return Padding({
        padding: EdgeInsets.only({ left: EdgeInsetsStep.s2 }),
        child: resolvedTitleWidget,
      });
    } else {
      return resolvedTitleWidget;
    }
  })();

  const resolvedHoverColor = hoverColor ?? Colors.indigo;

  return defineComponent({
    name: "ListTile",
    render() {
      const resolvedMouseCursor = (() => {
        if ((enabled?.value == true || enabled == null) && onTap) {
          return mouseCursor?.cursor ?? SystemMouseCursors.click;
        } else {
          return SystemMouseCursors.basic;
        }
      })();
      const result = InkWell({
        mouseCursor: SystemMouseCursor.use({ cursor: resolvedMouseCursor }),
        onTap: enabled == null || enabled?.value == true ? onTap : null,
        focusColor,
        hoverColor:
          enabled?.value == false ? Colors.transparent : resolvedHoverColor,
        child: Container({
          padding: contentPadding ?? EdgeInsets.all(EdgeInsetsStep.s4),
          color: enabled?.value == false ? Colors.grey : tileBackgroundColor,
          height: resolvedHeight,
          child: Row({
            children: [
              resolvedLeading,
              resolvedContentWidget,
              resolvedTrailing,
            ],
          }),
        }),
      });
      return h(
        enabled?.value == false
          ? Opacity({
              child: result,
              opacity: OpacityDecoration.use({
                opacity: OpacityDecorationSteps.s50,
              }),
            })
          : result
      );
    },
  });
};
