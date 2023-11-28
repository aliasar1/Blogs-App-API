const asyncHandler = require('express-async-handler');
const Blog = require('../models/blog');
const blog = require('../models/blog');

const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
});

const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if(!blog) return res.status(404).send('Blog with the given ID is not found.');

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
    res.status(200).json({message: 'Update Blog are here'});
});

const deleteBlog = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Delete Blog are here'});
});

module.exports = { getAllBlogs, getBlog, addBlog, updateBlog, deleteBlog };