import asyncHandler from 'express-async-handler'
import Careers from '../models/careersModel.js'

// @desc    Fetch all careers
// @route   GET /api/careers
// @access  Private

const getCareers = asyncHandler(async (req, res) => {
  const careers = await Careers.find({})
  res.json(careers)
})

// @desc    Fetch single Careers
// @route   GET /api/Careerss/:id
// @access  Public
const getCareersById = asyncHandler(async (req, res) => {
  const careers = await Careers.findById(req.params.id)

  if (careers) {
    res.json(careers)
  } else {
    res.status(404)
    throw new Error('Careers not found')
  }
})

// @desc    Delete a career
// @route   DELETE /api/careers/:id
// @access  Private/Admin
const deleteCareer = asyncHandler(async (req, res) => {
  const career = await Careers.findById(req.params.id)

  if (career) {
    await career.remove()
    res.json({ message: 'career removed' })
  } else {
    res.status(404)
    throw new Error('career not found')
  }
})

// @desc    Create a career
// @route   POST /api/careers
// @access  Private/Admin
const createCareer = asyncHandler(async (req, res) => {
  const {     
    title,
    location, 
    designation,
    experience,
    description,
    qualification } = req.body

  const career = new Careers({
    title,
    location, 
    designation,
    experience,
    description,
    qualification,

  })

  const createdCareer = await career.save()
  res.status(201).json(createdCareer)
})

// @desc    Update a career
// @route   PUT /api/careers/:id
// @access  Private/Admin
const updateCareer = asyncHandler(async (req, res) => {
  const career = await Careers.findById(req.params.id)
  const {
    title,
    location, 
    designation,
    experience,
    description,
    qualification
  } = req.body
  
  
  if (career) {
    career.title = title
    career.location = location
    career.designation = designation
    career.experience = experience
    career.description = description
    career.qualification = qualification
    
    
    const updatedCareer = await career.save()
    res.json(updatedCareer)
  } else {
    res.status(404)
    throw new Error('Career not found')
  }
})

export {
  getCareers,
  getCareersById,
  createCareer,
  deleteCareer,
  updateCareer,

}
