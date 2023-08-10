import PostCard from "../post card/Index";
import SideBar from "../sidebar";
import axios from "axios";
import { useState, useEffect } from "react";



const Home = () => {
    const [posts, setPosts] = useState([])
    const searchPosts = async () => {
        
        const response = await axios.get('http://127.0.0.1:8000/api/feed'
        , {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
        )
        setPosts(response.data.posts)
    }
    

    useEffect(( () => {
        searchPosts()
    }), [])

    return ( 
        <>
        <div className="sidebar-container">
            <SideBar/>
        </div>
        
        {/* <div className="posts"> */}
        {
                posts?.length > 0
                ? ( <div className="posts">
                    {
                        posts.map((post)=>(
                            <PostCard 
                            key={post.id} 
                            post_id={post.id}
                            description={post.description} 
                            image_path={post.image_path}
                            likes={post.likes.length}
                            poster={post.username}
                            liked={post.is_liked}
                            />
                        ))
                    }
                </div> 
                ) :
                (
                    <div className="empty">
                        <h2>No posts found</h2>
                    </div>
                )
                
            }
        {/* </div> */}
        
        </>
        
    );
}

export default Home;