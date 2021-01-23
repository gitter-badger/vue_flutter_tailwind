import { defineComponent, h } from "vue";
import { ListItemBuilder } from "./ListView";

export const ListViewItem = defineComponent({
  name: "ListViewItem",
  props: {
    itemBuilder: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  render() {
    console.log({ i: this.itemBuilder, in: this.index });
    const fixedItemBuilder = this.itemBuilder as ListItemBuilder;
    return h(fixedItemBuilder({ index: this.index }));
  },
});
