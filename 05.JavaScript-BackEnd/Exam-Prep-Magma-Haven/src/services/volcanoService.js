import Volcano from "../models/Volcano.js";

// getAll function for the catalog
export function getAll() {
  return Volcano.find();
}

// getOne for details
export function getOne(volcanoId) {
  return Volcano.findById(volcanoId).populate(["owner", "voters"]);
}

// getLatest volcanos for the home page
export function getLatest() {
  return Volcano.find().sort({ _id: -1 }).limit(3);
}

// create function for creating volcanos
export function create(volcanoData, userId) {
  return Volcano.create({
    ...volcanoData,
    owner: userId,
  });
}

// vote function for volcano details
export async function vote(volcanoId, userId) {
  const volcano = await Volcano.findById(volcanoId);

  if(volcano.owner.equals(userId)) {
    throw new Error("Owner cannot follow their own blog!")
  }

  volcano.voters.push(userId);

  return volcano.save();
}

// detele function for volcano details
export async function remove(volcanoId, userId) {
  const volcano = await Volcano.findById(volcanoId);

  if (!volcano.owner.equals(userId)) {
    throw new Error("Cannot delete if you are not owner!");
  }

  return Volcano.findByIdAndDelete(volcanoId);
}

// edit function for volcano details
export function edit(volcanoId, volcanoData) {
  return Volcano.findByIdAndUpdate(volcanoId, volcanoData, { runValidators: true });
}
