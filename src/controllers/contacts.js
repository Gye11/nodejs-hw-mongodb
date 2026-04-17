import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} from "../services/contacts.js";

// GET all
export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.status(200).json({
    status: 200,
    message: "Successfully found contacts!",
    data: contacts,
  });
};

// GET by id
export const getContactByIdController = async (req, res) => {
  const contact = await getContactById(req.params.contactId);

  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${req.params.contactId}!`,
    data: contact,
  });
};

// CREATE
export const createContactController = async (req, res) => {
  const contact = await createContact(req.body);

  res.status(201).json({
    status: 201,
    message: "Contact created successfully",
    data: contact,
  });
};

// UPDATE
export const updateContactController = async (req, res) => {
  const contact = await updateContact(req.params.contactId, req.body);

  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }

  res.status(200).json({
    status: 200,
    message: "Contact updated successfully",
    data: contact,
  });
};

// DELETE
export const deleteContactController = async (req, res) => {
  const contact = await deleteContact(req.params.contactId);

  if (!contact) {
    return res.status(404).json({
      message: "Contact not found",
    });
  }

  res.status(204).send();
};
