import asyncHandler from "express-async-handler";
import Portfolio from "../models/portfolioModel.js";

// @desc    Get all portfolio
// @route   GET /api/portfolio
// @access  public
const getPortfolios = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.find({});
  res.json(portfolio);
});
// @desc    Create a portfolio
// @route   POST /api/portfolio
// @access  Private/Admin
const createPortfolio = asyncHandler(async (req, res) => {
  const { date, stockName, buyPrice, buyQty, sellQty, sellPrice, client } =
    req.body;
  const portfolio = new Portfolio({
    date,
    stockName,
    buyPrice,
    buyQty,
    sellQty,
    sellPrice,
    client,
  });

  const createdPortfolio = await portfolio.save();
  res.status(201).json(createdPortfolio);
});
// @desc    Delete portfolio
// @route   DELETE /api/portfolio/:id
// @access  Private/Admin
const deletePortfolio = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);

  if (portfolio) {
    await portfolio.remove();
    res.json({ message: "portfolio removed" });
  } else {
    res.status(404);
    throw new Error("portfolio not found");
  }
});

// @desc    Get portfolio by ID
// @route   GET /api/portfolio/:id
// @access  Private/Admin
const getPortfolioById = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id);

  if (portfolio) {
    res.json(portfolio);
  } else {
    res.status(404);
    throw new Error("portfolio not found");
  }
});

// @desc    Get portfolios by client Id
// @route   GET /api/client_portfolio/:id
// @access  Private
const getPortfolioByClientId = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.find({ client: req.params.id });
  // console.log(req.params.id);
  // return;
  if (portfolio) {
    res.json(portfolio);
  } else {
    res.status(404);
    throw new Error("portfolio not found");
  }
});

// @desc    Update portfolio
// @route   PUT /api/portfolio/:id
// @access  Private/Admin
const updatePortfolio = asyncHandler(async (req, res) => {
  // console.log(req);
  // return;
  const { date, stockName, buyPrice, buyQty, sellQty, sellPrice, client } =
    req.body;

  const portfolio = await Portfolio.findById(req.params.id);

  if (portfolio) {
    portfolio.date = date;
    portfolio.stockName = stockName;
    portfolio.buyPrice = buyPrice;
    portfolio.buyQty = buyQty;
    portfolio.sellQty = sellQty;
    portfolio.sellPrice = sellPrice;
    portfolio.client = client;

    const updatedPortfolio = await portfolio.save();
    res.json(updatedPortfolio);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getPortfolios,
  getPortfolioByClientId,
  deletePortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
};
