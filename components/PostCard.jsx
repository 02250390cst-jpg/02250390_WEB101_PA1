// Import child components
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";

// PostCard component receives post data as props
function PostCard({ post }) {
  return (
    <div className="post-card">
      {/* Display post header (user info) */}
      <PostHeader user={post.user} />

      {/* Display post content (text + image) */}
      <PostContent content={post.content} img={post.img} />

      {/* Display actions like like button */}
      <PostActions likes={post.likes} />
    </div>
  );
}

export default PostCard;