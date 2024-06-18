import { useState } from 'react';

function Form() {
    const [blogs, setBlogs] = useState([]);
    const [titleBlog, setTitleBlog] = useState('');

    const handleTitle = (event) => {
        event.preventDefault();

        setBlogs([...blogs, titleBlog]);

        setTitleBlog('');
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
            <div>
                {
                    blogs.map((title, index) => <h3 key={`title_${index}`}>{title }</h3>)
                }
            </div>
        </div>
    )
}

export default Form