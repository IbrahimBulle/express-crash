const output=document.querySelector('#output')
const btn=document.querySelector('#get-posts-btn')
const form=document.querySelector('#add-post-form')

async function showPosts(){
    try {
        const res = await fetch('http://localhost:8000/api/posts')
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    const posts =await res.json()
    output.innerHTML=''
    posts.forEach((element) => {
        const postel=document.createElement('div')
        postel.textContent=element.title;
        output.appendChild(postel);
    });
    } catch (error) {
        console.log('Error fetching posts',error)
    }
    
}
// submit new post
async function addPost(e){
    e.preventDefault()
    const formData=new FormData(this)
    const title=formData.get('title')
    try {
        const res= await fetch('http://localhost:8000/api/posts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title})
        })
        if(!res.ok){
            throw new Error('Failed to add new post')
        }
        const newPost=await res.json()
        const postEl=document.createElement('div')
        postEl.textContent=newPost.title;
        output.appendChild(postEl)
        showPosts()
    } catch (error) {
        console.error('Error adding post')
    }
}
// eventlistener
btn.addEventListener('click',showPosts)
form.addEventListener('submit',addPost)