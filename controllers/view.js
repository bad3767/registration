var mongoose = require("mongoose");
const user = require("../models/model");

//register method
exports.userRegister = async (req, res) => {
  try {
    let info = req.body;
    let object = {
      username: info.username,
      email: info.email,
      password: info.password,
      phone_number: info.phone_number,
    };
    await user
      .findOne({ email: info.email })
      .then((existingDocument) => {
        if (existingDocument) {
          console.log("this data is already exits");
          res.send("this data already exists");
        } else {
          user.create(object).then((result) => {
            if (result != null || result != "") {
              res.json({
                status: true,
                msg: "user created successfully",
                data: result,
              });
            } else {
              res.json({ status: false, msg: "data unsaved", data: [] });
            }
          });
        }
      })
      .catch((error) => {
        "error", error;
      });
  } catch (err) {
    res.json({ status: false, msg: "Something went wrong", response: err });
  }
};

//login page
exports.Userlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    user.findOne({ email: email }).then((existingDocument) => {
      if (existingDocument) {
        if (existingDocument.password === password) {
          res.send("Your login was successful.");
        } else {
          res.send("Please enter the correct password.");
        }
      } else {
        res.send("Your data is not registered. Please register.");
      }
    });
  } catch (err) {
    console.log("err", err);
  }
};

//get method
exports.userget = async (req, res) => {
  user
    .find({})
    .then((existingDocument) => {
      console.log("existingDocument", existingDocument);
      res.json(existingDocument);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

//get by name

exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    user
      .findOne({ email: email })
      .then((existingDocument) => {
        console.log("existingDocument", existingDocument);
        res.json(existingDocument);
      })
      .catch((error) => {
        console.log("error", error);
        res
          .status(500)
          .json({ error: "An error occurred while fetching user data." });
      });
  } catch (err) {
    console.log("err", err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user data." });
  }
};
// update method by email
exports.user_update = async (req, res) => {
  try {
    const { email } = req.body;
    user
      .findOneAndUpdate({ email: email }, req.body, { new: true })
      .then((updatedDocument) => {
        if (updatedDocument) {
          console.log("User updated successfully");
          res.json(updatedDocument);
        } else {
          console.log("User not found");
          res.status(404).json({ error: "User not found" });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        res
          .status(500)
          .json({ error: "An error occurred while updating user data" });
      });
  } catch (error) {
    console.log("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating user data" });
  }
};
// delete method by email

exports.user_delete = async (req, res) => {
  try {
    const { email } = req.body;
    user
      .findOneAndDelete({ email: email })
      .then((deleteDocument) => {
        if (deleteDocument) {
          console.log("user delete sucessfully");
          res.json(deleteDocument);
        } else {
          console.log("User not found");
          res.status(404).json({ error: "User not found" });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        res
          .status(500)
          .json({ error: "An error occurred while deleting user data" });
      });
  } catch (error) {
    console.log("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting user data" });
  }
};

//--------------------------------------
//
//
//-------------------------------------------
//   const bookId = req.params.id;
//   const updatedBookData = req.body;

//   book
//     .findByIdAndUpdate(
//       bookId,
//       { $set: updatedBookData },
//       { new: true, useFindAndModify: false }
//     )
//     .then((updatedBook) => {
//       if (updatedBook) {
//         console.log(updatedBook);
//         res.json(updatedBook);
//       } else {
//         res.status(404).send("Book not found");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Error occurred while updating book");
//     });
// });

//-------------------------------------------------
// exports.Userlogin = async (req, res) => {
//   try {
//     let object = {
//       email: req.body.email,
//       password: req.body.password,
//     };
//     user.then((existingDocument) => {
//       if (email == req.body.email && password == req.body.password) {
//         console.log("your login successfully");
//       } else if (email!== req.body.email || password !== req.body.password) {
//         console.log("please enter correct password again")
//       } else {
//         console.log("your data not register properly ! please register ");
//       }
//     });
//   } catch (err) {
//     console.log("err", err);
//   }
// };

// var pattern = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

//     user
//       .find({email: req.body.email})
//       .then((existingDocument) => {
//         if (existingDocument) {
//           console.log("this data is already exits");
//           res.send("this data already exists");
//         } else {
//           user.create(object).then((result) => {
//             if (result != null || result != "") {
//               res.json({
//                 status: true,
//                 msg: "user created successfully",
//                 data: result,
//               });
//             } else {
//               res.json({ status: false, msg: "data unsaved", data: [] });
//             }
//           });
//         }
//       })
//       .catch((error) => {
//         "error", error;
//       });
//   } catch (err) {
//     res.json({ status: false, msg: "Something went wrong", response: err });
//   }
// };
