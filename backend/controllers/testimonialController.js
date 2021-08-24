import asyncHandler from "express-async-handler";
import Testimonial from "../models/testimonialModel.js";

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  public
const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({});
  res.json(testimonials);
});
// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private/Admin
const createTestimonial = asyncHandler(async (req, res) => {
  // const { image, name } = req.body;
  const { name, designation, image, description } = req.body;
  const testimonial = new Testimonial({
    name,
    designation,
    image,
    description,
  });

  const createdTestimonial = await testimonial.save();
  res.status(201).json(createdTestimonial);
});
// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private/Admin
const deleteTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);

  if (testimonial) {
    await testimonial.remove();
    res.json({ message: "testimonial removed" });
  } else {
    res.status(404);
    throw new Error("testimonial not found");
  }
});

// @desc    Get testimonial by ID
// @route   GET /api/testimonials/:id
// @access  Private/Admin
const getTestimonialById = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);

  if (testimonial) {
    res.json(testimonial);
  } else {
    res.status(404);
    throw new Error("testimonial not found");
  }
});

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private/Admin
const updateTestimonial = asyncHandler(async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    const { image, name, description, designation } = req.body;
    if (testimonial) {
      testimonial.name = name;
      testimonial.image = image;
      testimonial.description = description;
      testimonial.designation = designation;
    }
    const updatedTestimonial = await testimonial.save();
    // console.log(updatedTestimonial);
    res.status(201).send(updatedTestimonial);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export {
  getTestimonials,
  deleteTestimonial,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
};
