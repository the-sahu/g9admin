import mongoose from "mongoose";

const withdawalSchema = mongoose.Schema(
  {
  
    clientId: {
      type: String,
      required: true,
    },
    OTP: {
      type: Number,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    accountNumber: {
      type: Number,
      required: true,
    },
    amount: {
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

const Withdraw = mongoose.model("Withdraw", withdawalSchema);

export default Withdraw;
