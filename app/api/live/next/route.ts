import fs from "fs";
import { open } from "sqlite";
import * as sqlite3 from "sqlite3";

export const dynamic = "force-dynamic";
const launchTime = Number(fs.readFileSync("launchTime.txt", "utf-8"));

export async function GET() {
  const now = Math.floor((Date.now() - launchTime) / 1000) % (7 * 24 * 60 * 60);
  const db = await open({ filename: "schedule.db", driver: sqlite3.Database });
  let currentVideo: any;
  let nextVideo: any;

  const rows = await db.all(`
    SELECT * FROM schedule
  `);

  for (const row of rows) {
    if (row.start <= now && row.start + row.duration > now) {
      currentVideo = row;
    } else if (currentVideo && !nextVideo) {
      nextVideo = row;
      break;
    }
  }

  if (!nextVideo) {
    return Response.json({ error: "No next video found" });
  }

  return Response.json(nextVideo);
}