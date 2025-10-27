import { Schema, Types, model } from "mongoose";

const volcanoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Volcano name is required!"],
    minLength: [2, "Name should be at least 2 characters long."],
  },
  location: {
    type: String,
    required: [true, "Volcano location is required!"],
    minLength: [3, "Location should be at least 3 characters long."],
  },
  elevation: {
    type: Number,
    required: [true, "Volcano elevation is required!"],
    min: [0, "Elevation cannot be negative."],
  },
  lastEruption: {
    type: Number,
    required: [true, "Year of last eruption is required!"],
    min: [0, "Year of last eruption cannot be negative."],
    max: [2024, "Year of last eruption cannot be in the future."],
  },
  imageUrl: {
    type: String,
    required: [true, "Volcano image is required!"],
    match: [/^https?:\/\//, "Volcano image should start with http:// or https://"],
  },
  typeVolcano: {
    type: String,
    required: [true, "Volcano type is required!"],
    enum: {
      values: [
        "Supervolcanoes",
        "Submarine",
        "Subglacial",
        "Mud",
        "Stratovolcanoes",
        "Shield",
      ],
      message:
        "Invalid volcano type. Choose one of: Supervolcanoes, Submarine, Subglacial, Mud, Stratovolcanoes, Shield.",
    },
  },
  description: {
    type: String,
    required: [true, "Volcano description is required!"],
    minLength: [10, "Description should be at least 10 characters long."],
  },
  owner: {
    type: Types.ObjectId,
    ref: "User",
  },
  voters: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
});

const Volcano = model("Volcano", volcanoSchema);

export default Volcano;
