import { useState } from "react";

// PostActions handles interactive features like likes
function PostActions({ likes }) {
  // useState to store like count
  const [count, setCount] = useState(likes);

  return (
    <div className="post-actions">
      {/* Button increases like count when clicked */}
      <button onClick={() => setCount(count + 1)}>
        ❤️ Like
      </button>

      {/* Display current number of likes */}
      <span>{count} Likes</span>
    </div>
  );
}

export default PostActions;