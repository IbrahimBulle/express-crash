let posts = [
    { id: 1, title: "post one" },
    { id: 2, title: "post two" },
    { id: 3, title: "post tree" },
    { id: 4, title: "post four" },
  ];

// @desc gets all posts
// @route GET /api/posts
export const getPosts=(req, res,next) => {
    const lim=parseInt(req.query.limit)
    if(!isNaN(lim) && lim > 0){
       return res.status(300).json(posts.slice(0,lim))
    }
    res.status(200).json(posts);
}

// desc GET single post
// route GET /api/posts/:id
export const getPost= (req, res,next) => {
    const id=parseInt(req.params.id)
    const post=posts.find((post)=>post.id===id)
    if(!post){
      const error =new Error(`post with the id ${id} does not exist`)
      error.status=404
      return next(error)
    }
    res.status(200).json(post)
    
  }
//   @desc Create new post
// @route POST /api/posts
export const createPost=(req,res,next)=>{
    const newPost={
        id: posts.length + 1,
        title: req.body.title,
    }
    if(!newPost.title){
        const error =new Error('please include a title')
        error.status=400
        return next(error)
    }
    posts.push(newPost)
    res.status(201).json(posts)
}
//   @desc Update post
// @route PUT /api/posts/:id
export const updatePost=(req,res,next)=>{
    const id=parseInt(req.params.id);
    const post =posts.find((post)=>post.id===id)
    if(!post){
        const error =new Error(`post with the id ${id} does not exist`)
        error.status=404
        return next(error)
    }
    post.title=req.body.title;
    res.status(200).json(posts)
} 


//   @desc Delete post
// @route DELETE /api/posts/:id
export const deletePost=(req, res,next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if (!post) {
        return res.status(404).json({ msg: "Post not found" });
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
}