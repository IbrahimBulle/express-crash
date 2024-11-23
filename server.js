import express from "express";
import path from "path";
import {fileURLToPath} from "url";
import posts from './route/posts.js'
import logger from './middleware/logger.js'
import error from './middleware/error.js'
const port = process.env.PORT || 8000;
const filepath = fileURLToPath(import.meta.url);
const dirname = path.dirname(filepath);
// console.log(filepath)
// console.log(dirname)
const app = express();
// setup static folder
app.use(express.static(path.join(dirname,'public')))

app.get('/',(req,res)=>{
    // res.send('<h1>hello world</h1>')
    res.sendFile(path.join(dirname,'public','index.html'))
})
app.get('/about',(req,res)=>{
    // res.send('<h1>About</h1>')
    res.sendFile(path.join(dirname,'public','about.html'))
})
// body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger)
// routes
app.use('/api/posts',posts);
// loger middleware

app.use((req,res,next)=>{
    const error = new Error('NOT FOUND')
    error.status=404;
    next(error )
})
// error middleware
app.use(error)

app.listen(port, () => console.log(`running on port ${port}`));
