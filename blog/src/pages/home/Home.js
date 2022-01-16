import { useState, useEffect } from "react";
import Header from "../../components/header/header";
import "./home.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/sidebar";
import { useLocation } from "react-router";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      // console.log(res);
    };
    fetchPosts(); 
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
