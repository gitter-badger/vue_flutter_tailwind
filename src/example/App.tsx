import { Colors } from "@/abstract/Colors";
import { Column } from "@/components/Column";
import { Container } from "@/components/Container";
import { ElevatedButton } from "@/components/ElevatedButton";
import { Text } from "@/components/Text";
import { ref } from "vue";

export const wrapperApp = () => {
  const text = ref(true);

  return Container({
    color: Colors.white,
    child: Column({
      children: [
        ElevatedButton({
          child: Text({ text: text }),
          onPressed: () => {
            text.value = !text.value;
          },
        }),
        ElevatedButton({
          child: Text({ text: text }),
          onPressed: () => {
            text.value = !text.value;
          },
        }),
        ElevatedButton({
          child: Text({ text: text }),
          onPressed: () => {
            text.value = !text.value;
          },
        }),
      ],
    }),
  });
};
