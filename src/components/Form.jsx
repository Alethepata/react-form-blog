import { useState } from 'react';

import { BsTrash } from "react-icons/bs";

function Form() {
    const dataDefault = {
        title: '',
        description: ''
    } 

    const [blogs, setBlogs] = useState([]);
    const [blogData, setBlogData] = useState(dataDefault);

    const handleTitle = (event) => {
        event.preventDefault();

        setBlogs(array => ([...array, blogData]));

        setBlogData(dataDefault);
    }

    const deleteTitle = indexTitle => { 
        setBlogs(blogs => blogs.filter((_, index) => indexTitle !== index))
    }

    const addData = (key, newData) => {
        setBlogData(data => ({...data, [key]: newData}))
    }

    return (
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={handleTitle}>

                <div>
                    <label for="title">Titolo</label>
                    <input
                        id="title"
                        type="text"
                        value={blogData.title}
                        onChange={event => addData('title', event.target.value)}
                    />
                </div>

                <div className="margin">
                    <label for="description">Descrizione</label>
                    <textarea
                        id="description"
                        value={blogData.description}
                        onChange={event => addData('description', event.target.value)}
                    ></textarea>
                </div>

                <button>Invia</button>
            </form>
            <div className="text-container">
                {
                    blogs.map((blog, index) => (
                        <div key={`title_${index}`} className="text">

                            <div className="title">
                                <h3>{blog.title}</h3>
                                <button onClick={() => deleteTitle(index)}><BsTrash /></button>
                            </div>

                            <div className="description">
                                <p>{blog.description}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Form