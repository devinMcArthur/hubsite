import * as dotenv from "dotenv";
import path from "path";
import "reflect-metadata";

// Setup environment variables
const production = process.env.NODE_ENV === "production";
if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  dotenv.config({ path: path.join(__dirname, "..", ".env.development") });
}

import createApp from "./app";

import { prisma } from "hubsite-models";

async function main() {
  const port = process.env.PORT || 8080;

  const app = await createApp();

  const server = app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });

  // Set timeout to 3 minutes
  server.setTimeout(3 * 60 * 1000);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
