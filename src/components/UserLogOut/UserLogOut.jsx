import "./UserLogOut.css";

function UserLogOut(props) {
  return (
    <div className="UserLogOut">
      <div>Name: {props.name}</div>
      <div>Email: {props.email}</div> 
      <button className="btn-sm" onClick={props.handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default UserLogOut;
