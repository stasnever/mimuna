import { AppRegistry } from "react-native";
import Root from "./src/routes/Root";

if (!global._babelPolyfill) {
  require("babel-polyfill");
}
AppRegistry.registerComponent("MY", () => Root);
