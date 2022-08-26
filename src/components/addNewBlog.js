import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddNewBlog = () => {

    const [ inputs, setInputs ] = useState({});
    const history = useHistory();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(inputs)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="addNew">  
            <h2 className="addNew-header">Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                
                <label>Blog Title</label>
                <input 
                required
                type="text"
                name="title"
                value={ inputs.title || ""  }
                onChange={handleChange}
                ></input>

                <label>Blog Body</label>
                <textarea 
                 cols="41" rows="8"
                required
                name="body"
                value={ inputs.body || "" }
                onChange={handleChange}
                ></textarea>
                
                <label>Blog Auther :</label>
                <input
                required
                type="text"
                name="auther"
                value={ inputs.auther || "" }
                onChange={handleChange}
                >
                </input>
                <br/>
                <input type="submit" value="Create" className="submit"/>

            </form>
        </div>
    );
}
 
export default AddNewBlog;