import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Jump from 'react-reveal/Jump';
import DataLoader from '../../../components/LoadingSpinner/DataLoader';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false)
            })
    }, []);
    return (
        <div className="my-5">
            <h6 className="text-info blog-title">Our blog</h6>
            <h2>LATEST BLOG & ARTICLES</h2>
            <p className="text-secondary">Our Latest Article For Our clients</p>
            <Container>
                <Jump>
                    <Row xs={1} md={2} className="g-4">
                        { loading ? <DataLoader /> :
                            blogs.map(blog => <Blog
                                key={blog._id}
                                blog={blog}
                            ></Blog>
                            )
                        }
                    </Row>
                </Jump>
            </Container>
        </div >
    );
};

export default Blogs;