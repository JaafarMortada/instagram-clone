import PostCard from "../post card/Index";
import SideBar from "../sidebar";

const Home = () => {
    return ( 
        <>
        <div className="sidebar-container">
            <SideBar/>
        </div>
        
        <div className="posts">
            <PostCard/>
            <PostCard/>
        </div>
        
        </>
        
    );
}

export default Home;