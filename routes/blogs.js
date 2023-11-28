const express = require('express');
const router = express.Router();
const {
    getAllBlogs,
    getBlog,
    addBlog,
    updateBlog,
    deleteBlog
    } = require('../controllers/blogController'); 

router.get('/', getAllBlogs);

router.post('/', addBlog);

router.get('/:id', getBlog);

router.put('/:id', updateBlog);

router.delete('/:id', deleteBlog);

module.exports = router;