import './App.css';
import React, {useState, useEffect} from 'react'

function Posts () {

    // Komponentin tilan määritys
const [posts, setPosts] = useState([])
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
        <h2> Posts from typicode </h2>

        {
           posts && posts.map(p => 
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