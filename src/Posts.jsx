import './App.css';
import React, {useState, useEffect} from 'react'

function Posts () {

    // Komponentin tilan määritys
const [posts, setPosts] = useState([])
const [showPosts, setShowPosts] = useState(false)

useEffect( () => {
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res => res.json()) //muutetaan json data javascriptiksi
.then(oliot => setPosts(oliot))
}
,
[]
)
  return (
  <>
        <h2 onClick={() => setShowPosts(!showPosts)}> Posts from typicode </h2>

        {
           showPosts && posts && posts.map(p => 
            <div className='posts' key={p.id}>

            <h1>{p.title}</h1>
            <h1>{p.userId}</h1>
            <p>{p.body}</p>
            </div>  
            ) 
        }
  </>
  );
}

export default Posts;