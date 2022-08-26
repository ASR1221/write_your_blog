import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, loading, error } = useFetch("http://localhost:8000/blogs/" + id);

    return (  
        <div>
            { loading && <p>Loading...</p> }
            { error && <p>{error}</p>}
            { blogs && (
                <div className="blogDetails">
                    <h3 className="blogDetails-title">{blogs.title}</h3>
                    <p className="blogDetails-auther">written by {blogs.auther}</p>
                    <p className="blogDetails-body">{blogs.body}</p>
                </div>
            )}
            
        </div>
    );
}             
 
export default BlogDetails;