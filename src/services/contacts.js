import Contact from "../db/models/contact.js";

export const getAllContacts = async () => {
  return Contact.find();
};

export const getContactById = async (id) => {
  return Contact.findById(id);
};

export const createContact = async (payload) => {
  return Contact.create(payload);
};

export const updateContact = async (id, payload) => {
  return Contact.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteContact = async (id) => {
  return Contact.findByIdAndDelete(id);
};
