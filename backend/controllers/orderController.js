// import Razorpay from 'razorpay'
import crypto from 'crypto'
// import shortid from 'shortid'
import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    order.isDelivered = true
    order.deliveredAt = Date.now()

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
  res.json(orders)
})

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user', 'id name')
  res.json(orders)
})

// @desc    Razorpay payment
// @route   GET /api/razorpay
// @access  Private
const createRazorpayOrder = asyncHandler(async (req, res) => {
  
      const razorpay = new Razorpay({  key_id: process.env.RAZORPAY_KEY_ID,  key_secret: process.env.RAZORPAY_KEY_SECRET})
      
      console.log(req.params.id)
      const amount = req.body.amount
      // console.log(amount);
      const payment_capture = 1 
      const currency = 'INR'

      const options =  {
          amount: (amount*100).toString(), 
          currency, 
          receipt: shortid.generate(),
          payment_capture
      }

    try {
      const response = await razorpay.orders.create(options);
      // console.log(response);
      // return;
      const order = await Order.findById(req.params.id)
      console.log(order);
      if (order) {
        order.razorpayOrderId = response.id
        const updatedOrder = await order.save()
      }

      res.json({
          id: response.id,
          amount: response.amount,
          secret_key: process.env.RAZORPAY_KEY_ID,
          currency: response.currency
      })

    } catch (error) {
      console.log(error)  
    }

})
// @desc    Razorpay payment Verification Webhook
// @route   GET /api/razorpay
// @access  Private
const razorpayVerification = asyncHandler(async (req, res) => {
     // do validation
     const secret = process.env.RAZORPAY_WEBHOOK_SECRET
     const shasum = crypto.createHmac('sha256', secret)
     shasum.update(JSON.stringify(req.body))
     const digest = shasum.digest('hex')
     
     console.log(digest, req.headers['x-razorpay-signature']);
     if (digest === req.headers['x-razorpay-signature']) {
       // process it
       const razorpay_order_id = req.body.payload.payment.entity.order_id
       const razorpay_payment_id = req.body.payload.payment.entity.id
      //  console.log(req.body.payload.payment.entity.order_id)
      //  res.send(req.params)
      //  return;
       const order = await Order.findOne({razorpayOrderId: razorpay_order_id})
       console.log(order);
       if (order) {
         order.isPaid = true
         order.razorpayPaymentId = razorpay_payment_id
         order.paidAt = Date.now()

         const updatedOrder = await order.save()
       }
     } else {
       // pass it
     }
 
   res.json({status: "ok"})

})




export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
  createRazorpayOrder,
  razorpayVerification,
}
