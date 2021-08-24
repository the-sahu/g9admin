import asyncHandler from "express-async-handler";
import Article from "../models/articleModel.js";

// @desc    Get all articles
// @route   GET /api/articles
// @access  public
const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({});
  res.json(articles);
});
// @desc    Create a articles
// @route   POST /api/articles
// @access  Private/Admin
const createArticle = asyncHandler(async (req, res) => {
  const {
    title,
    slug,
    excerpt,
    coverImage,
    author,
    authorDescription,
    claps,
    tags,
    status,
    description,
  } = req.body;
  const article = new Article({
    title,
    slug,
    excerpt,
    coverImage,
    author,
    authorDescription,
    claps,
    tags,
    status,
    description,
  });

  const createdArticle = await article.save();
  res.status(201).json(createdArticle);
});
// @desc    Delete article
// @route   DELETE /api/articles/:id
// @access  Private/Admin
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    await article.remove();
    res.json({ message: "article removed" });
  } else {
    res.status(404);
    throw new Error("article not found");
  }
});

// @desc    Get article by ID
// @route   GET /api/articles/:id
// @access  Private/Admin
const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    res.json(article);
  } else {
    res.status(404);
    throw new Error("article not found");
  }
});

// @desc    Update article
// @route   PUT /api/articles/:id
// @access  Private/Admin

const updateArticle = asyncHandler(async (req, res) => {
  // console.log(req);
  // return;
  const {
    title,
    slug,
    excerpt,
    coverImage,
    author,
    authorDescription,
    claps,
    tags,
    status,
    description,
  } = req.body;

  const article = await Article.findById(req.params.id);

  if (article) {
    article.title = title;
    article.slug = slug;
    article.excerpt = excerpt;
    article.coverImage = coverImage;
    article.author = author;
    article.authorDescription = authorDescription;
    article.claps = claps;
    article.tags = tags;
    article.status = status;
    article.description = description;

    const updatedArticle = await article.save();
    res.json(updatedArticle);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getArticles,
  deleteArticle,
  getArticleById,
  createArticle,
  updateArticle,
};
