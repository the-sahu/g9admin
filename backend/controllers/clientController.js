import asyncHandler from "express-async-handler";
import Client from "../models/clientModel.js";

// @desc    Get all clients
// @route   GET /api/clients
// @access  Private/Admin
const getClients = asyncHandler(async (req, res) => {
  const clients = await Client.find({});
  res.json(clients);
});
// @desc    Create a product
// @route   POST /api/clients
// @access  Private/Admin
const createClient = asyncHandler(async (req, res) => {
  // const { image, name } = req.body;

  const clientLogos = req.body;
  if (clientLogos) {
    let createdClients = [];
    createdClients = clientLogos.map(async (logo) => {
      const name = logo.name;
      const image = logo.image;
      const client = new Client({
        name,
        image,
      });
      const createdClient = await client.save();
      return createdClient;
    });
    res.status(201).json("Images uploaded successfully");
  } else {
    res.status(401).json("Please provide the correct data");
  }
});
// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Private/Admin
const deleteClient = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);

  if (client) {
    await client.remove();
    res.json({ message: "client removed" });
  } else {
    res.status(404);
    throw new Error("client not found");
  }
});

// @desc    Get client by ID
// @route   GET /api/clients/:id
// @access  Private/Admin
const getClientById = asyncHandler(async (req, res) => {
  const client = await Client.findById(req.params.id);

  if (client) {
    res.json(client);
  } else {
    res.status(404);
    throw new Error("client not found");
  }
});

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Private/Admin
const updateClient = asyncHandler(async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    const { image, name } = req.body;
    if (client) {
      client.name = name;
      client.image = image;
    }
    const updatedClient = await client.save();
    console.log(updatedClient);
    res.status(201).send("Client's Logo Successfully Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export { getClients, deleteClient, getClientById, createClient, updateClient };
