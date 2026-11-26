import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
const line = "Three years behind your hot TV, choking on dust, I smiled green through every secret — until the killer whispered his name, and I refused to blink.";
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
