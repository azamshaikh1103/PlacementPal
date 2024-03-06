import { Link, useNavigate } from "react-router-dom";

export default function Calender() {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Remove token
    localStorage.removeItem("token");

    // Redirect to login pahe
    navigate("/login");
  };

  if (!!isLoggedIn) {
  }
  return (
    <>
      <h1>Navigate Links</h1>
      <p>This is resources Page</p>
      {isLoggedIn ? (
        <div>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/companies">Companies</Link>
          </button>
          <button>
            <Link to="/resources">Resources</Link>
          </button>
          <button>
            <Link to="/calendar">Calendar</Link>
          </button>
          <button>
            <Link to="/ask">ASK</Link>
          </button>
          <button onClick={handleLogOut}>
            <Link to="/">Logout</Link>
          </button>
        </div>
      ) : (
        <div>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/companies">Companies</Link>
          </button>
          <button>
            <Link to="/resources">Resources</Link>
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      )}
    </>
  );
}
