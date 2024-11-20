import express from "express";
import path from "path";
import url from "url";
import posts from './route/posts.js'
const port = process.env.PORT || 8000;
// const filepath = url.fileURLToPath(import.meta.url);
// const dirname = path.dirname(filepath);
// console.log(filepath)
// console.log(dirname)
const app = express();
// setup static folder
// app.use(express.static(path.join(dirname,'public')))

// app.get('/',(req,res)=>{
//     // res.send('<h1>hello world</h1>')
//     res.sendFile(path.join(dirname,'public','index.html'))
// })
// app.get('/about',(req,res)=>{
//     // res.send('<h1>About</h1>')
//     res.sendFile(path.join(dirname,'public','about.html'))
// })

// routes
app.use('/api/posts',posts);

app.listen(port, () => console.log(`running on port ${port}`));
