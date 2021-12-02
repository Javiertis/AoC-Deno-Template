/**
 * Agnostic platform start script
 * deno run --allow-run start.ts <day>
 **/

if (!Deno.args.length) {
  console.error(
    "Day parameter is missing -> deno run --allow-run start.ts <day>"
  );
  Deno.exit(-1);
}
// Save the day in a variable to check his value
const day = Number(Deno.args[0]);

if (isNaN(day) || day < 0 || day > 31) {
  console.error("The day parameter must be between 1 and 31");
  Deno.exit(-1);
}

const process = Deno.run({
  cmd: ["deno", "run", "--allow-net", "readProblems.ts", Deno.args[0]],
});

await process.status();
