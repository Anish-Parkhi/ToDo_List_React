import React,{useState, useEffect} from 'react'
import axios from 'axios'
function Image() {

    const[posts,setPosts] = useState([])
    const[id,setId] = useState('')
    const x = Math.floor((Math.random() * 100)+1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${x}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })


  return (
    <div>
        <button >Click to generate random text</button>
        <p>{posts.title}</p>
    </div>
  )
}

export default Image