import Blog from "../models/Blog.js";

// getAll function for the catalog
export function getAll() {
  return Blog.find();
}

// getOne for details
export function getOne(blogId) {
  return Blog.findById(blogId).populate(["owner", "followers"]);
}

// getLatest blogs for the home page
export function getLatest() {
  return Blog.find().sort({ _id: -1 }).limit(3);
}

// create function for creating blogs
export function create(blogData, userId) {
  return Blog.create({
    ...blogData,
    owner: userId,
  });
}

// follow function for blog details
export async function follow(blogId, userId) {
  const blog = await Blog.findById(blogId);

  if(blog.owner.equals(userId)) {
    throw new Error("Owner cannot follow their own blog!")
  }

  blog.followers.push(userId);

  return blog.save();
}

// detele function for blog details
export async function remove(blogId, userId) {
  const blog = await Blog.findById(blogId);

  if (!blog.owner.equals(userId)) {
    throw new Error("Cannot delete if you are not owner!");
  }

  return Blog.findByIdAndDelete(blogId);
}

// edit function for blog details
export function edit(blogId, blogData) {
  return Blog.findByIdAndUpdate(blogId, blogData, { runValidators: true });
}

// get all for specific owner - Profile Bonus
export function getAllByOwner(ownerId) {
  return Blog.find({ owner: ownerId });
}

// get all followed blogs = Profile Bonus
export function getAllByFollower(followerId) {
  return Blog.find().in("followers", followerId);
}
