import asyncHandler from "express-async-handler";
import SellPortfolio from "../models/sellPortfolioModel.js";

// @desc    Get all sellportfolio
// @route   GET /api/sellportfolio
// @access  public
const getSellPortfolios = asyncHandler(async (req, res) => {
  const sellportfolio = await SellPortfolio.find({});
  res.json(sellportfolio);
});
// @desc    Create a sellportfolio
// @route   POST /api/sellportfolio
// @access  Private/Admin
const createSellPortfolio = asyncHandler(async (req, res) => {
  const { date, stockName, buyPrice, buyQty, sellQty, sellPrice, client } =
    req.body;
  const sellportfolio = new SellPortfolio({
    date,
    stockName,
    buyPrice,
    buyQty,
    sellQty,
    sellPrice,
    client,
  });

  const createdPortfolio = await sellportfolio.save();
  res.status(201).json(createdPortfolio);
});
// @desc    Delete sellportfolio
// @route   DELETE /api/sellportfolio/:id
// @access  Private/Admin
const deleteSellPortfolio = asyncHandler(async (req, res) => {
  const sellportfolio = await SellPortfolio.findById(req.params.id);

  if (sellportfolio) {
    await sellportfolio.remove();
    res.json({ message: "sellportfolio removed" });
  } else {
    res.status(404);
    throw new Error("sellportfolio not found");
  }
});

// @desc    Get sellportfolio by ID
// @route   GET /api/sellportfolio/:id
// @access  Private/Admin
const getSellPortfolioById = asyncHandler(async (req, res) => {
  const sellportfolio = await SellPortfolio.findById(req.params.id);

  if (sellportfolio) {
    res.json(sellportfolio);
  } else {
    res.status(404);
    throw new Error("sellportfolio not found");
  }
});

// @desc    Get sellportfolios by client Id
// @route   GET /api/client_sellportfolio/:id
// @access  Private
const getSellPortfolioByClientId = asyncHandler(async (req, res) => {
  const sellportfolio = await SellPortfolio.find({ client: req.params.id });
  // console.log(req.params.id);
  // return;
  if (sellportfolio) {
    res.json(sellportfolio);
  } else {
    res.status(404);
    throw new Error("sellportfolio not found");
  }
});

// @desc    Update sellportfolio
// @route   PUT /api/sellportfolio/:id
// @access  Private/Admin
const updateSellPortfolio = asyncHandler(async (req, res) => {
  // console.log(req);
  // return;
  const { date, stockName, buyPrice, buyQty, sellQty, sellPrice, client } =
    req.body;

  const sellportfolio = await SellPortfolio.findById(req.params.id);

  if (sellportfolio) {
    sellportfolio.date = date;
    sellportfolio.stockName = stockName;
    sellportfolio.buyPrice = buyPrice;
    sellportfolio.buyQty = buyQty;
    sellportfolio.sellQty = sellQty;
    sellportfolio.sellPrice = sellPrice;
    sellportfolio.client = client;

    const updatedPortfolio = await sellportfolio.save();
    res.json(updatedPortfolio);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getSellPortfolios,
  getSellPortfolioByClientId,
    deleteSellPortfolio,
  getSellPortfolioById,
  createSellPortfolio,
  updateSellPortfolio,
};
