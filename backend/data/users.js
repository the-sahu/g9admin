import bcrypt from "bcryptjs";

const users = [
  {
    name: "Sachin Patil",
    email: "g9portfoliomng@gmail.com",
    clientId: "Admin123",
    password: bcrypt.hashSync("g9@12345", 10),
    isAdmin: true,
  },
  {
    name: "Sachin Tichkule",
    email: "test@test.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    clientId: 12345,
    image: "123",
    phone: 1234567890,
    pan: "CTPD4567890",
    demate: "1234567890",
    bankAccount: 1234567890,  
    segments: ["NSE","BSE", "MOC"],
  },
];

export default users;
