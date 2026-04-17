import mongoose from "mongoose";
import "dotenv/config";
import fs from "fs";

import { initMongoConnection } from "./db/initMongoConnection.js";
import { Contact } from "./models/contact.js";

const seed = async () => {
  try {
    await initMongoConnection();

    const data = JSON.parse(
      fs.readFileSync(new URL("./contacts.json", import.meta.url)),
    );

    await Contact.deleteMany();
    await Contact.insertMany(data);

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Hata:", error);
    process.exit(1);
  }
};

seed();
