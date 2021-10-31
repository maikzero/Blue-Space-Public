import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";
import cookieParser from "cookie-parser";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const userRouter = express.Router();
const clientId = '506755665568-6jjmmjkcpuc4of62a2s5idulrbuebr69.apps.googleusercontent.com';
userRouter.use(cookieParser());
//authenthication

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(clientId);




userRouter.post("/auth/google", async (req, res) => {
  console.log("entered auth google");
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId,
  });
  const {name, email, picture} = ticket.getPayload();
  const payload = ticket.getPayload;
  console.log('payload: ', payload)
  console.log(ticket);
  console.log(req.body);
  console.log('email: ', email);
  console.log('name: ', name);

  // Setup stuff
  console.log(req.params.email);
  var query = { email: email },
    update = { expire: new Date() },
    options = { upsert: true };
  //req.session.email = email;
  // Find the document


  
  const loggedUser = User.findOne(query, function (error, user) {
    console.log("find one and update");
    console.log("error:", error);
    console.log("next is error msg: ");
    if (!error) {
      // If the document doesn't exist
      console.log("no errors");
      console.log(user);
      console.log(!user);
      // console.log(user.length == 0);
      if (!user) {
        // Create it
        console.log('entered create user');
        var randomName = "";
        randomName += name.toLowerCase();
        randomName = randomName.replace(/\s+/g, '');
        randomName += Math.floor((Math.random() * 100) + 1);
        console.log("randomname: ", randomName);
        user = new User({username: randomName, expire: new Date(), email: email});
        
        console.log("saved user: ", user);
        console.log("username: ", user.username);
        console.log("email: ", user.email);
        console.log("email retrieived: ", email);
        
      }
      // Save the document
      
      console.log("saving username: ", user.username);
      console.log("what user", user);
      user
        .save()
        .then(() => {
          return res.status(200).json({
            success: true,
            id: user._id,
            username: user.username,
            email: user.email,
            actualName: name,
            message: "User updated!",
          });
        })
        .catch((error) => {
          console.log(error);
          return res.status(404).json({
            error,
            message: "User not updated!",
          });
        }); 
        


      /*
      if (!user.id){
        req.session.userId = user.id;
      }
      if (!user.email){
        req.session.email = user.email;
      }  */
      //res.json(user);
      }
      /*
      if (!loggedUser){
        var randomName = "";
        randomName += name.toLowerCase();
        randomName = randomName.replace(/\s+/g, '');
        randomName += Math.floor((Math.random() * 100) + 1);
        console.log("randomname: ", randomName);
        newUser = new User({username: randomName, expire: new Date(), _email: email})
        const createdUser = await User.insert(newUser);
      }else {
        const updateUser = 
      } */
  });

  
  
  
});
userRouter.delete("/auth/logout", async (req, res) => {
  await req.session.destroy();
  res.status(200);
  res.json({
    message: "Logged out successfully",
  });
});

userRouter.put("/createuser", async (req, res) => {
  console.log("entered create user");
  if (!req.session.email){
    await req.session.destroy();
    res.redirect('/');
  }
  

});

export default userRouter;