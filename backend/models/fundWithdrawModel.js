import mongoose from "mongoose";

const fundWithdrawSchema = mongoose.Schema(
  {
  
    clientId: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    bankAccount: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

const FundWithdraw = mongoose.model("FundWithdraw", fundWithdrawSchema);

export default FundWithdraw;
