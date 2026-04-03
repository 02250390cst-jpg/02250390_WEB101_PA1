// Displays user profile information
function PostHeader({ user }) {
  return (
    <div className="post-header">
      {/* Profile image */}
      <img
        src={`https://i.pravatar.cc/40?u=${user}`}
        alt={user}
      />

      {/* Username */}
      <strong>{user}</strong>
    </div>
  );
}

export default PostHeader;