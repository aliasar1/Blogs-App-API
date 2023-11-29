const express = require('express');
const router = express.Router();
const {
    getAllBlogs,
    getBlog,
    addBlog,
    updateBlog,
    deleteBlog,
    getAllUserBlogs
    } = require('../controllers/blogController'); 
const validateToken = require('../middlewares/validateTokenHandler');

router.get('/all', getAllBlogs);

router.get('/', validateToken, getAllUserBlogs);

router.post('/', validateToken, addBlog);

router.get('/:id', validateToken, getBlog);

router.put('/:id', validateToken, updateBlog);

router.delete('/:id', validateToken, deleteBlog);

module.exports = router;