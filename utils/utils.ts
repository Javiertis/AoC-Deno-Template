import cookie from "./cookie.ts";
/**
 * Fetches and returns the value of given day and year
 * @param year
 * @param day
 * @returns a promise of the input
 */
export async function readInputFile(year: number, day: number): Promise<string> {
    if (cookie === "session=YOUR_COOKIE_VALUE") {
        throw new Error("You need to set the cookie value to your session cookie value.");
    }
    const file = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, { headers: { cookie } });
    return file.text();
}
/**
 * Fetches and returns the value of given day and year splitted by newline
 * @param year
 * @param day
 * @returns a promise of the input split by newline
 */
export async function readInputFileSplitLines(year: number, day: number): Promise<string[]> {
    const file = await readInputFile(year, day);
    return file.split("\n");
}
