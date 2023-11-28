const getAllBlogs = (req, res) => {
    res.status(200).json({message: 'All Blogs are here'});
};

const getBlog = (req, res) => {
    res.status(200).json({message: 'Blog are here'});
};

const addBlog = (req, res) => {
    res.status(200).json({message: 'Add Blog are here'});
};

const updateBlog = (req, res) => {
    res.status(200).json({message: 'Update Blog are here'});
};

const deleteBlog = (req, res) => {
    res.status(200).json({message: 'Delete Blog are here'});
};

module.exports = { getAllBlogs, getBlog, addBlog, updateBlog, deleteBlog };