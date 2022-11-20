import { readFileSync } from "fs";
import { zebraCounter } from "./zebra-counter.js";

try {
  const data = JSON.parse(readFileSync(process.cwd() + "/challenge03/colors.txt", "utf8").replaceAll("'", '"'));
  const result = zebraCounter(data);
  console.log(result);
} catch (error) {
  console.error(`ERROR: ${error}`);
}
