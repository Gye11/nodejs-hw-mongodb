import "dotenv/config";
import fs from "fs";

import { initMongoConnection } from "../db/initMongoConnection.js";
import { Contact } from "../db/models/contact.js";

const seed = async () => {
  try {
    await initMongoConnection();

    const filePath = new URL("./contacts.json", import.meta.url);
    const data = JSON.parse(fs.readFileSync(filePath));

    await Contact.deleteMany();
    await Contact.insertMany(data);

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

seed();
