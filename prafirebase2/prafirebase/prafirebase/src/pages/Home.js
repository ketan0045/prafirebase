import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../redux/action";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };
  return (
    <div>
      <h2>Welcome to Our Site</h2>
      <button
        className="btn btn-danger"
        onClick={handleAuth}
        style={{ marginLeft: "1074px", marginTop: "-64px" }}
      >
        Logout
      </button>
      <br />
      <div className="home">
        <header>
          <h1>My Website</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="banner">
          <h1 style={{ color: "black" }}>Welcome to Our Site</h1>
          <p style={{ color: "black" }}>
            Here you can learn about my projects and contact me.
          </p>
        </section>
        <section className="content">
          <h2>Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
          </ul>
        </section>
        <footer>
          <p>&copy; My Website 2023</p>
        </footer>
      </div>
      <br />
    </div>
  );
};

export default Home;
