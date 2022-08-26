import { Link } from "react-router-dom";

const HomeBlogs = (props) => {
    //const blogs = props.blogs;
    return ( 
        <div className="home-readBlogs-flex">
            { props.blogs.map((blog) => (
                <div className="home-readBlogs-blogs" key={blog.id} >
                    <Link to={`/blog/${blog.id}`} className='link'>
                        <h3>{ blog.title }</h3>
                        <p>{ blog.auther }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default HomeBlogs;