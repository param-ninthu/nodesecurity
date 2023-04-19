//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req, res) => {
  res.json({ message: "Get contacts" });
};

//@desc Create new contacts
//@route POST /api/contacts
//@access Public

const createContact = (req, res) => {
  console.log(req.body);
  const { name, email, mobile } = req.body;
  if (!name || !email || !mobile) {
    res.status(400);
    throw new Error("All fields are required");
  }
  res.json({ message: "Create Contact" });
};

//@desc Update  contacts
//@route PUT /api/contacts/:id
//@access Public

const updateContact = (req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
};

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = (req, res) => {
  res.json({ message: `Delete contact for ${req.params.id}` });
};

//@desc Get one contact
//@route GET /api/contacts/:id
//@access Public

const getContact = (req, res) => {
  res.json({ message: `Get contact  ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
  getContact,
};
