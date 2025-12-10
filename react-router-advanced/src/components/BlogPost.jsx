import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); 

  return (
    <div>
      <h2>Blog Post #{id}</h2>
      <p>This is a dynamic blog post page. Content loads based on the post ID.</p>
    </div>
  );
};

export default BlogPost;
