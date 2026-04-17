import express from "express";
import cors from "cors";
import pino from "pino";

import {
  getContactsController,
  getContactByIdController,
} from "./controllers/contacts.js";

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/contacts", getContactsController);
  app.get("/contacts/:contactId", getContactByIdController);

  app.use((req, res) => {
    res.status(404).json({
      message: "Not found",
    });
  });

  return app;
};
