import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import HomeBlogs from "./homeBlogs";
import build from "../images/icons8-man-browser-window-100.png"
import mobile from "../images/icons8-iphone-se-100.png"
import idea from "../images/icons8-innovation-100.png"

const Home = () => {
    const { data: blogs, loading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <>
            <div className="home-intro">
                <h1 className="home-intro-h1">Blog Birth</h1>
            </div>

            <div className="home-create">
                <h2 className="home-create-h2">Create your blog</h2>
                <p className="home-create-p">Write whatever you like and its online</p>
                <Link to="/Create your blog" className="home-create-link">Create Blog</Link>
            </div>

            <div className="home-aboutBlog">
                <div className="home-aboutBlog-section">
                    <img src={build} alt="img" />
                    <p>Build your online presence easliy</p>
                </div>
                <div className="home-aboutBlog-section">
                    <img src={mobile} alt="img" />
                    <p>Edit from your phone with mobile view</p>
                </div>
                <div className="home-aboutBlog-section">
                    <img src={idea} alt="img" />
                    <p>Share your thoughts and ideas throw writing</p>
                </div>
            </div>

            <div className="home-readBlogs">
                <h2 className="home-readBlogs-h2">Read Blogs</h2>
                { error && <p>{error}</p>}
                { loading && <p>Loading...</p> }
                { blogs && <HomeBlogs blogs={blogs} />}
            </div>
        </>
    );
} 

export default Home;
