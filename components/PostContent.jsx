// Displays post text and image
function PostContent({ content, img }) {
  return (
    <div className="post-content">
      {/* Post text */}
      <p>{content}</p>

      {/* Post image (only shown if exists) */}
      {img && (
        <img
          src={img}
          alt="post"
          className="post-image"
        />
      )}
    </div>
  );
}

export default PostContent;