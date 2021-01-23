import {
  Alignment,
  ButtonStyle,
  Colors,
  MainAxisAlignment,
  TextDecoration,
  TextDecorations,
  TextStyle,
} from "@/abstract";
import { BorderRadius, BorderRadiusStep } from "@/abstract/BorderRadius";
import { BoxDecoration } from "@/abstract/BoxDecoration";
import { BoxShadow } from "@/abstract/BoxShadow";
import { CrossAxisAlignment } from "@/abstract/CrossAxisAlignment";
import { EdgeInsets, EdgeInsetsStep } from "@/abstract/EdgeInsets";
import { SystemMouseCursor, SystemMouseCursors } from "@/abstract/MouseCursor";
import { SizedBoxHeight, SizedBoxWidth } from "@/abstract/SizedBox";
import { Align } from "@/components/Align";
import { Container } from "@/components/Container";
import { ElevatedButton } from "@/components/ElevatedButton";
import { ListView } from "@/components/ListView";
import { MouseRegion } from "@/components/MouseRegion";
import { Padding } from "@/components/Padding";
import { Row } from "@/components/Row";
import { Scaffold } from "@/components/Scaffold";
import { SizedBox } from "@/components/SizedBox";
import { Text } from "@/components/Text";
import { ref } from "vue";

export const wrapperApp = () => {
  const text = ref("Hello world!");
  const padding = EdgeInsets.all(EdgeInsetsStep.s3);

  const textCard = Padding({
    child: Text({
      text,
    }),
    padding,
  });

  const obj = ref<{ [prop: number]: string }>({
    0: "maybe",
    1: "test",
    2: "test",
    3: "test",
    4: "test",
    5: "test",
    6: "test",
    7: "test",
    8: "test",
    9: "test",
    10: "test",
  });
  const itemCount = Object.keys(obj.value).length;
  return Scaffold({
    body: Align({
      toOverlay: true,
      alignment: Alignment.bottom,
      child: Container({
        padding,
        decoration: new BoxDecoration({
          boxShadow: BoxShadow.xl,
          borderRadius: BorderRadius.vertical({ bottom: BorderRadiusStep.xxl }),
        }),
        child: Row({
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            MouseRegion({
              child: textCard,
              cursor: SystemMouseCursor.use({
                cursor: SystemMouseCursors.none,
              }),
            }),
            SizedBox({
              child: ListView.builder({
                itemBuilder: ({ index }) => {
                  const value = obj.value[index];
                  return ElevatedButton({
                    style: new ButtonStyle({
                      backgroundColor: Colors.grey,
                      textStyle: new TextStyle({
                        color: Colors.white,
                        decoration: new TextDecoration({
                          decoration: TextDecorations.lineThrough,
                        }),
                      }),
                    }),
                    child: Text({
                      text: ref(value),
                    }),
                    onTap: () =>
                      alert(
                        `hello tap with index ${index} and value ${value}!`
                      ),
                  });
                },
                itemCount: itemCount,
              }),
              height: new SizedBoxHeight({
                height: EdgeInsetsStep.s60,
              }),
              width: new SizedBoxWidth({
                width: EdgeInsetsStep.s96,
              }),
            }),
          ],
        }),
      }),
    }),
  });
};
