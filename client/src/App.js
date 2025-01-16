import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import axios from "axios";
import About from "./components/About.jsx";
import Settings from "./components/Settings.jsx";
import PostsList from "./components/posts/PostsList.jsx";
import UserPosts from "./components/posts/UserPostsList.jsx";
import AddPost from "./components/posts/AddPost.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {

  // URLs
  const URL_USERS = "http://127.0.0.1:5000/api/users";
  const URL_POSTS = "http://127.0.0.1:5000/api/posts";
  const URL_COMMENTS = "http://127.0.0.1:5000/api/comments";

  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [view, setView] = useState("PostsList");
  const [refreshToken, setRefreshToken] = useState(null || localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(null);

  // State to handle Errors
  const [errorMessage, setErrorMessage] = useState("");

  // POSTS METHODS

  const fetchPosts = () => {
    axios.get(URL_POSTS + "/getAll")
      .then((response) => {
        console.log("data from the fetchPosts func", response.data.data);
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const fetchPostsByUser = () => {
    const token = localStorage.getItem("token");
    // console.log(token);
    axios.get(URL_POSTS + "/getAllByUser", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log("data from the fetchPostsByUser func", response.data.data);
        setUserPosts(response.data.data);
      })
      .catch((error) => {
        console.error("failed to fetch posts by user, error:", error);
      });
  }

  const changeView = (newView) => {
    setView(newView);
    setErrorMessage("");
    console.log(view);
  }

  const handleAddPost = (newPost) => {
    console.log("handle add one post");
    const token = localStorage.getItem("token");
    // console.log(token);
    axios.post(URL_POSTS + "/add", newPost, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        console.log("post added from front");
        changeView("PostsList");
        fetchPosts();
      })
      .catch((error) => {
        console.error("failed to add one post, error:", error);
      });
  }

  const handleUpdatePost = (id, updatedTodo) => {
    console.log("handle update");
    axios.put(URL_POSTS + "/update/" + id, updatedTodo)
      .then(() => {
        console.log("todo updated from front");
        fetchPostsByUser();
      })
      .catch((error) => {
        console.error("failed to update todo, error:", error);
      });
  }

  const handleDeletePost = (id) => {
    console.log("handle delete post");
    axios.delete(URL_POSTS + "/delete/" + id)
      .then(() => {
        console.log("post deleted from front");
        fetchPostsByUser();
      })
      .catch((error) => {
        console.error("failed to delete post, error:", error);
      });
  }

  // COMMENTS METHODS

  const handleAddComment = (newComment) => {
    console.log("handle add one comment");
    const token = localStorage.getItem("token");
    axios.post(URL_COMMENTS + "/add", newComment, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        console.log("comment added from front");
        fetchPosts();
      })
      .catch((error) => {
        console.error("failed to add one comment, error:", error);
      });
  }

  // USERS METHODS

  const getCurrentUser = () => {
    console.log("func to get current user");
    const token = localStorage.getItem("token");
    axios.get(URL_USERS + "/getUser", { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => {
        console.log("current user from front", response, token);
        setCurrentUser(response.data);
      })
      .catch((error) => {
        console.error("failed to get current user, error:", error);
      });
  }

  // AUTH METHODS

  const handleRegister = (newUser) => {
    console.log("handle register user");
    axios.post(URL_USERS + "/register", newUser)
      .then(() => {
        console.log("user added from front");
        changeView("Login");
      })
      .catch((error) => {
        console.error("failed to register user, error:", error);
        setErrorMessage(error.response.data.message);
      });
  }

  const handleLogin = (user) => {
    console.log("handle login user");
    axios.post(URL_USERS + "/login", user)
      .then((response) => {
        console.log("user login from front");
        localStorage.setItem("token", response?.data?.token);
        setRefreshToken(response.data.token);
        changeView("PostsList");
      })
      .catch((error) => {
        console.error("failed to login user, error:", error.response.data.message);
        setErrorMessage(error.response.data.message);
      });
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setRefreshToken(null);
    changeView("Login");
  };

  // FILTER METHODS

  const handleSearchPosts = (valueSearched) => {
    // console.log("handle search post");
    if (valueSearched === "") {
      fetchPosts();
    }
    const filtered = posts.filter((post) => post.title.includes(valueSearched));
    setPosts(filtered);
  }

  const handleFilterPostsByCategories = (categorySearched) => {
    // console.log("handle search post");*
    if (categorySearched === "none") {
      fetchPosts();
    }
    const filtered = posts.filter((post) => post.category === categorySearched);
    setPosts(filtered);
  }


  useEffect(() => {
    fetchPosts();
    fetchPostsByUser();
    getCurrentUser();
  }, []);

  // console.log("refresh token: ", refreshToken, "view :", view);

  if (!refreshToken && (view === "Login" || view === "PostsList")) {
    return <Login handleLogin={handleLogin} changeView={changeView} errorMessage={errorMessage} />
  }
  else if (!refreshToken && view === "Register") {
    return <Register handleRegister={handleRegister} changeView={changeView} errorMessage={errorMessage} />
  }

  return <div>
    <Header changeView={changeView} refreshToken={refreshToken} handleLogOut={handleLogOut} />
    {!refreshToken && view === "Login" && <Login handleLogin={handleLogin} changeView={changeView} errorMessage={errorMessage} />}
    {!refreshToken && view === "Register" && <Register handleRegister={handleRegister} changeView={changeView} errorMessage={errorMessage} />}

    {refreshToken && view === "PostsList" ?
      <PostsList posts={posts} handleAddComment={handleAddComment} handleSearchPosts={handleSearchPosts} handleFilterPostsByCategories={handleFilterPostsByCategories} />
      : (view === "UserPosts" ?
        <UserPosts userPosts={userPosts} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost} handleSearchPosts={handleSearchPosts} handleFilterPostsByCategories={handleFilterPostsByCategories} />
        : (view === "AddPost" ? <AddPost handleAddPost={handleAddPost} changeView={changeView} />
          : (view === "About" ? <About />
            : view === "Settings" ? <Settings currentUser={currentUser} /> : null)))}
  </div>;
}

export default App;
