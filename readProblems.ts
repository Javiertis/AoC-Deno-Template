import { readInputFileSplitLines } from "./utils/utils.ts";

const inputFile = await readInputFileSplitLines(2021, Number(Deno.args[0]));

console.log("Response:", JSON.stringify(inputFile));
