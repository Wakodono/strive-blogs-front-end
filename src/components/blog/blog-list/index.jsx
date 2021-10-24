import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import posts from "../../../data/posts.json";

const url = "http://localhost:3001/blogs"
export default class BlogList extends Component {

  state = {
    blogs: []
  }

  fetchBlogs = async () => {
  const  blogs = await fetch(url)
  const response = await blogs.json()
  this.setState({response})
  }

  componentDidMount() {
    this.fetchBlogs()
  }

  render() {
    return (
      <Row>
        {this.state.blogs.map((blog) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={blog.title} {...blog} />
          </Col>
        ))}
      </Row>
    );
  }
}
