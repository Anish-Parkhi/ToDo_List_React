import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Data() {

    const[posts,setPosts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts=>{
            console.log(posts)
            setPosts(posts.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })

  return (
    <div>
        <ul>
            {
                posts.map(post=><li key={post.id} >{post.title}</li>)
            }
        </ul>
    </div>
  )
}

export default Data