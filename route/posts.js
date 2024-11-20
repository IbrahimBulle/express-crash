import express from 'express'
const router=express.Router()

let posts = [
    { id: 1, title: "post one" },
    { id: 2, title: "post two" },
    { id: 3, title: "post tree" },
    { id: 4, title: "post four" },
  ];
  // get all post
  router.get("/", (req, res) => {
      const lim=parseInt(req.query.limit)
      if(!isNaN(lim) && lim > 0){
         return res.status(300).json(posts.slice(0,lim))
      }
      res.status(200).json(posts);
  }); 
  // get single post
  router.get("/:slug", (req, res) => {
      const id=parseInt(req.params.slug)
      const post=posts.find((post)=>post.id===id)
      if(!post){
         return res
         .status(404)
         .json({message:'post does not exis'})
      }
      res.status(200).json(post)
      
    });


export default router