import mongoose from "mongoose";

const portfolio = mongoose.Schema(
  {
    date: {
      type:  new Date(),
      required: true,
    },
    stockName: {
      type: String,
      required: true,
    },
    buyPrice: {
      type: Number,
      required: true,
    },
    buyQty: {
      type: Number,
      required: true,
    },
    sellQty: {
      type: Number,
      required: true,
    },
    sellPrice: {
      type: Number,
      required: true,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Portfolio = mongoose.model("Portfolio", portfolio);

export default Portfolio;
