function ClickedUsers({ clickedUsers }) {
  return (
    <div className="clicked-users-wrapper">
      <div className="clicked-users">
        <h1>{clickedUsers}</h1>
        <h6>users who clicked the linked</h6>
      </div>
    </div>
  );
}

export default ClickedUsers;
