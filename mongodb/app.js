import mongoose from "mongoose";

const URL =
  "mongodb+srv://seshuk2409_db_user:seshu242829@bookstore.tqxa9bx.mongodb.net/";

// connect with mongoDB
mongoose
  .connect(URL)
  .then(() => console.log("Connected to DataBase"))
  .catch((e) => console.log("Error", e));

//   Create Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// connect with models
const User = mongoose.model("User", userSchema);

async function getQueryExamples() {
  try {
    // to create new user we can directly use User Model by await or by new User({})  await newUser.save();
    // first method to create
    // const newUser = await User.create({
    //   name: "raju",
    //   email: "raju@gmail.com",
    //   age: 44,
    //   isActive: false,
    //   tags: ["developer"],
    // });

    // second method to create
    // const newUser = new User({
    //   name: "Seshu",
    //   email: "seshu@gmail.com",
    //   age: 98,
    //   isActive: true,
    //   tags: ["developer", "designer", "Manager"],
    // });

    // await newUser.save();

    // console.log("New User created");

    // get all users
    // const getAllResults = await User.find({});
    // console.log(getAllResults);

    // get by query
    console.log("Quering the database");
    // const getUsersByAge = await User.find({ age: { $lt: 40 } });
    // console.log(getUsersByAge);

    // const getUsersByActive = await User.find({ isActive: false });
    // console.log(getUsersByActive);

    // const getUserbyName = await User.find({ name: "Seshu" });
    // console.log(getUserbyName);

    // const getUserById = await User.findById("694ce70a0e5eef19341f0fd8");
    // console.log(getUserById);

    // Query only selected Fields
    // const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);

    // const limitedUsers = await User.find().limit(5).skip(1);
    // console.log(limitedUsers);

    // largest to smallest
    // const sortUsers = await User.find().sort({ age: -1 });
    // console.log(sortUsers);

    // smallest to largest
    // const sortUser = await User.find().sort({ age: 1 });
    // console.log(sortUser);

    // count documents in the database

    // const countDocuments = await User.countDocuments({
    //   isActive: !true,
    //   age: { $gt: 40 },
    // });

    // update the document
    const updateDocument = await User.findByIdAndUpdate(
      "694ce70a0e5eef19341f0fd8",
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      {
        new: true,
      }
    );

    console.log("updated document", updateDocument);

    
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

getQueryExamples();
