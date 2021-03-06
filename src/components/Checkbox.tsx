import { defineComponent, h, Ref, watch } from 'vue'
import {
  Color,
  Colors,
  SystemMouseCursor,
  SystemMouseCursors,
} from '../abstract'
import { Key } from '../abstract/Key'

interface CheckboxI {
  key?: Maybe<Key>
  value: Ref<boolean>
  onChanged: ValueChanged<boolean>
  mouseCursor?: Maybe<SystemMouseCursor>
  // activeColor?: Maybe<Color>;
  // fillColor?: Maybe<Color>;
  // checkColor?: Maybe<Color>;
  // focusColor?: Maybe<Color>;
  hoverColor?: Maybe<Color>
  // overlayColor?:Maybe<Color>
  // splashRadius,
  // materialTapTargetSize,
  // autofocus
}

export const Checkbox = ({
  key,
  onChanged,
  value,
  // activeColor,
  // checkColor,
  // fillColor,
  // focusColor,
  hoverColor,
  mouseCursor,
}: CheckboxI) => {
  return defineComponent({
    name: 'Checkbox',
    setup() {
      watch(
        value,
        async (newValue, oldValue) => await onChanged(newValue, oldValue)
      )
    },
    render() {
      return h(
        <input
          class={[
            mouseCursor?.css ?? SystemMouseCursors.click,
            hoverColor?.hoverBackgroundCss ?? Colors.indigo.hoverBackgroundCss,
          ].join(' ')}
          type="checkbox"
          v-model={value.value}
        />
      )
    },
  })
}
