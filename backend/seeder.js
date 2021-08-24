import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    // const sampleArticles = blogs.map((blog) => {
    //   return { ...blog };
    // });
    // const sampleClients = clients.map((client) => {
    //   return { ...client };
    // });
    // const sampleTestimonials = testimonials.map((testimonial) => {
    //   return { ...testimonial };
    // });

    // await Client.insertMany(sampleClients);
    // await Article.insertMany(sampleArticles);
    // await Testimonial.insertMany(sampleTestimonials);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await Article.deleteMany();
    // await Client.deleteMany();
    // await Testimonial.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
