import "dotenv/config";
import { setupServer } from "./server.js";
import { initMongoConnection } from "./db/initMongoConnection.js";

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    console.log("Starting app...");

    await initMongoConnection();
    console.log("Mongo connected");

    const app = setupServer();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("APP ERROR:", error);
    process.exit(1);
  }
};

start();
