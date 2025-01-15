import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import axios from "axios";
import About from "./components/About.jsx";
import Settings from "./components/Settings.jsx";
import PostsList from "./components/posts/PostsList.jsx";
import AddPost from "./components/posts/AddPost.jsx";

function App() {

  const URL_USERS = "http://127.0.0.1:5000/api/users";
  const URL_POSTS = "http://127.0.0.1:5000/api/posts";
  const URL_COMMENTS = "http://127.0.0.1:5000/api/comments";

  const [posts, setPosts] = useState([]);
  const [view, setView] = useState("PostsList");

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

  const changeView = (newView) => {
    setView(newView);
    console.log(view);
  }
  const handleGetOnePost = (id) => {
    console.log("handle get one post");
    axios.post(URL_POSTS + "/get/" + id);
  }

  const handleAddPost = (newPost) => {
    console.log("handle add one post");
    axios.post(URL_POSTS + "/add", newPost)
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
        fetchPosts();
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
        fetchPosts();
      })
      .catch((error) => {
        console.error("failed to delete post, error:", error);
      });
  }

  const handleSearchPost = () => {
    console.log("handle search post");
  }

  // COMMENTS METHODS

  const handleAddComment = (newComment) => {
    console.log("handle add one comment");
    axios.post(URL_COMMENTS + "/add", newComment)
      .then(() => {
        console.log("comment added from front");
        fetchPosts();
      })
      .catch((error) => {
        console.error("failed to add one comment, error:", error);
      });
  }



  useEffect(() => {
    fetchPosts();
  }, []);


  return <div>
    <Header changeView={changeView} />
    {view === "PostsList" ?
      <PostsList posts={posts} handleAddComment={handleAddComment} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost} />
      : (view === "AddPost" ? <AddPost handleAddPost={handleAddPost} changeView={changeView} />
        : (view === "About" ? <About />
          : <Settings />))}
  </div>;
}

export default App;
