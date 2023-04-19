//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContact = (req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
};

//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const createContact = (req, res) => {
  res.json({ message: "Create Contact" });
};

module.exports = { getContact };
