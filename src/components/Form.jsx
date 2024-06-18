import { useState } from 'react';

import { BsTrash } from "react-icons/bs";

function Form() {
    const [blogs, setBlogs] = useState([]);
    const [titleBlog, setTitleBlog] = useState('');

    const handleTitle = (event) => {
        event.preventDefault();

        setBlogs([...blogs, titleBlog]);

        setTitleBlog('');
    }

    const deleteTitle = indexTitle => { 
        setBlogs(blogs => blogs.filter((_, index) => indexTitle !== index))
    }

    return (
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={handleTitle}>
                <input
                    type="text"
                    value={titleBlog}
                    onChange={event => setTitleBlog(event.target.value)}
                />
                <button>Invia</button>
            </form>
            <div className="text-container">
                {
                    blogs.map((title, index) => (
                        <div className="text">
                            <h3 key={`title_${index}`}>{title}</h3>
                            <button onClick={() => deleteTitle(index)}><BsTrash /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Form