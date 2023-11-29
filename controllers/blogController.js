const asyncHandler = require('express-async-handler');
const Blog = require('../models/blog');

const getAllBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
});

const getAllUserBlogs = asyncHandler(async (req, res) => {
    const blogs = await Blog.find({ user_id: req.user.id });
    res.status(200).send(blogs);
});

const getBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if(!blog){
        res.status(404);
        throw new Error("Blog not found with given ID.");
    }
    if(blog.user_id.toString() != req.user.id){
        res.status(403);
        throw new Error("User dont have permission to get blogs of another user");
    }

    res.status(200).send(blog);
});

const addBlog = asyncHandler(async (req, res) => {
    const {name, description} = req.body;
    if(!name || !description){
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const blog = new Blog({name, description, user_id: req.user.id});
    await blog.save();
    res.status(200).send(blog);
});

const updateBlog = asyncHandler(async (req, res) => {
    const {name, description} = req.body;
    if(!name || !description){
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const blog = await Blog.findById(req.params.id);
    
    if(!blog){
        res.status(404);
        throw new Error("Blog not found with given ID.");
    }
    
    if(blog.user_id.toString() != req.user.id){
        res.status(403);
        throw new Error("User dont have permission to update blogs of another user");
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {name, description}, { new: true });

    res.status(200).send(updatedBlog);
});

const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if(!blog){
        res.status(404);
        throw new Error("Blog not found with given ID.");
    }

    if(blog.user_id.toString() != req.user.id){
        res.status(403);
        throw new Error("User dont have permission to delete blogs of another user");
    }
    await Blog.deleteOne({ _id: req.params.id });
    res.status(200).send(blog);
 });
 

module.exports = { getAllBlogs, getAllUserBlogs, getBlog, addBlog, updateBlog, deleteBlog };