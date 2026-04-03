// Story component displays individual story
function Story({ user, img }) {
  return (
    <div className="story">
      {/* Story image */}
      <img src={img} alt={user} />

      {/* Username */}
      <p>{user}</p>
    </div>
  );
}

export default Story;