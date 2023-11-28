const asyncHandler = require('express-async-handler');
const Blog = require('../models/blog');

const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
});

const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if(!blog){
        res.status(404);
        throw new Error("Blog not found with given ID.");
    }

    res.status(200).json(blog);
});

const addBlog = asyncHandler(async (req, res) => {
    const {name, description} = req.body;
    if(!name || !description){
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const blog = new Blog({name, description});
    await blog.save();
    res.status(200).send(blog);
});

const updateBlog = asyncHandler(async (req, res) => {
    const {name, description} = req.body;
    if(!name || !description){
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const blog = await Blog.findByIdAndUpdate(req.params.id, {name, description}, { new: true });
    if(!blog){
        res.status(404);
        throw new Error("Blog not found with given ID.");
    }

    res.status(200).send(blog);
});

const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findByIdAndDelete({_id: req.params.id});
    if(!blog){
        res.status(404);
        throw new Error("Blog not found with given ID.");
    }
    res.status(200).send(blog);
 });
 

module.exports = { getAllBlogs, getBlog, addBlog, updateBlog, deleteBlog };