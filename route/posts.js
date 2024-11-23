import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postcontroller.js'
const router=express.Router()


  // get all post
  router.get("/", getPosts); 
  // get single post
  router.get("/:id", getPost);
// create new post
router.post('/',createPost)
// update post
router.put('/:id',updatePost)
// delete 
router.delete("/:id", deletePost);

export default router