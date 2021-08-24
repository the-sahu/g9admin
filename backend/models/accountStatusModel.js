import mongoose from "mongoose";

const accountStatusSchema = mongoose.Schema(
  {
  
    capital: {
      type: Number,
      required: true,
    },
    netProfit: {
      type: Number,
      required: true,
    },
    netLoss: {
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

const AccountStatus = mongoose.model("AccountStatus", accountStatusSchema);

export default AccountStatus;
