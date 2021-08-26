import asyncHandler from 'express-async-handler'
import FundAdd from '../models/fundAddModel.js'

// @desc    Fetch all funds
// @route   GET /api/funds
// @access  Private

const getFundsRequest = asyncHandler(async (req, res) => {
  const funds = await FundAdd.find({})
  res.json(funds)
})


// @desc    Delete a funds
// @route   DELETE /api/funds/:id
// @access  Private/Admin
const deleteFundsRequest = asyncHandler(async (req, res) => {
  const funds = await FundAdd.findById(req.params.id)

  if (funds) {
    await funds.remove()
    res.json({ message: 'funds removed' })
  } else {
    res.status(404)
    throw new Error('funds not found')
  }
})

// @desc    Create a funds
// @route   POST /api/funds
// @access  Private
const createFundsRequest = asyncHandler(async (req, res) => {
  const {     
    name,
    clientId,
    phone,
    amount,
    bankAccount } = req.body

// const client = await FundAdd.find({client: clientId})
// console.log(client)
// return;

  const funds = new FundAdd({

    name,
    clientId,
    phone,
    amount,
    bankAccount

  })

  const createdFunds = await funds.save()
  res.status(201).json(createdFunds)
})


export {
getFundsRequest,
deleteFundsRequest,
createFundsRequest,
}
