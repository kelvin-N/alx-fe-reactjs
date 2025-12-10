import { Link } from "react-router-dom";

const blogPosts = [
  { id: 1, title: "Understanding React Router" },
  { id: 2, title: "Advanced Routing Techniques" },
  { id: 3, title: "How Dynamic Routes Work" },
];

function BlogList() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
