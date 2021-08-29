import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provide a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    clientId: {
      type: String,
      minlength: 4,
    },
    image: {
      type: String,
    },
    qrimage: {
      type: String,
    },
    phone: {
      type: String,
    },
    pan: {
      type: String,
    },
    demate: {
      type: String,
    },
    bankAccount: {
      type: String,
    },
    bankName: {
      type: String,
    },
    capital: {
      type: String,
    },
    netProfit: {
      type: String,
    },
    netLoss: {
      type: String,
    },
    segments: [{
      type: String,
    }],
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);
  return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;
