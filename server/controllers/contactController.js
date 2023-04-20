const asynHandler = require("express-async-handler");
const Contact = require("./../models/contactModel");
const { request } = require("express");
//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asynHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access Public

const createContact = asynHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({ name, email, phone });

  res.json(contact);
});

//@desc Update  contacts
//@route PUT /api/contacts/:id
//@access Public

const updateContact = asynHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedContact);
});

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asynHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  await Contact.deleteOne();
  res.json(contact);
});

//@desc Get one contact
//@route GET /api/contacts/:id
//@access Public

const getContact = asynHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.json(contact);
});

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
