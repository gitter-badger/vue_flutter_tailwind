import { defineComponent, h, Ref } from 'vue'
import { TextStyle } from '../abstract'
import { TextAlign } from '../abstract/TextAlign'
import { TextOverflow } from '../abstract/TextOverflow'

interface TextI {
  text: Ref<Maybe<string | boolean | number>>
  style?: Maybe<TextStyle>
  // strutStyle,
  textAlign?: Maybe<TextAlign>
  // textDirection;
  // TODO: locale
  // locale,
  // softWrap;
  overflow?: Maybe<TextOverflow>
  // maxLines;
  // textWidthBasis;
}

export const Text = ({ text, style, overflow, textAlign }: TextI) =>
  defineComponent({
    name: 'Text',
    setup() {
      return { text }
    },
    render() {
      return h(
        'div',
        {
          class: [
            style?.css ?? '',
            overflow?.css ?? '',
            textAlign?.css ?? '',
          ].join(' '),
        },
        `${this.text}`
      )
    },
  })
