import "dotenv/config";
import { setupServer } from "./server.js";
import { initMongoConnection } from "./db/initMongoConnection.js";
import { logger } from "./utils/logger.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    logger.info("Starting app...");

    await initMongoConnection();
    logger.info("Mongo connected");

    const app = setupServer();

    app.listen(PORT, "0.0.0.0", () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

start();
