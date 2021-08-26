import asyncHandler from 'express-async-handler'
import FundWithdraw from '../models/fundWithdrawModel.js'

// @desc    Fetch all funds
// @route   GET /api/funds
// @access  Private

const getWithdrawFundsRequest = asyncHandler(async (req, res) => {
  const funds = await FundWithdraw.find({})
  res.json(funds)
})


// @desc    Delete a funds
// @route   DELETE /api/funds/:id
// @access  Private/Admin
const deleteWithdrawFundsRequest = asyncHandler(async (req, res) => {
  const funds = await FundWithdraw.findById(req.params.id)

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
const createWithdrawFundsRequest = asyncHandler(async (req, res) => {
  const {     
    
    clientId,
    otp,
    number,
    amount,
    bankAccount } = req.body

// const client = await FundAdd.find({client: clientId})
// console.log(client)
// return;

  const funds = new FundWithdraw({

    
    clientId,
    otp,
    number,
    amount,
    bankAccount

  })

  const createdFunds = await funds.save()
  res.status(201).json(createdFunds)
})


export {
getWithdrawFundsRequest,
createWithdrawFundsRequest,
deleteWithdrawFundsRequest,
}
