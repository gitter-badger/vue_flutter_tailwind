import { Color } from "@/abstract/Color";
import { ColorNames } from "./ColorNames";

export class Colors {
  // TODO: replace to material color
  static black: Color = new Color({ hex: "#000", name: ColorNames.black });
  // TODO: replace to material color
  static white: Color = new Color({ hex: "#fff", name: ColorNames.white });
  // TODO: replace to material color
  static transparent: Color = new Color({
    hex: "",
    name: ColorNames.transparent,
  });
}
