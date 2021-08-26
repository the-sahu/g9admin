import mongoose from "mongoose";

const fundAddSchema = mongoose.Schema(
  {
  
    name: {
      type: String,
      required: true,
    },
    clientId: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    bankAccount: {
      type: Number,
      required: true,
    },
    // client: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
  },
  {
    timestamps: true,
  }
);

const FundAdd = mongoose.model("FundAdd", fundAddSchema);

export default FundAdd;
