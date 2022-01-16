import "./post.css";
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";  //Public Folder
  return (
    <div className="post">
      {post.photo &&
        <Link to={`/post/${post._id}`}>
        <img
          className="postImg"
            src={PF + post.photo}
          alt=""
        ></img>
        </Link>
      }

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

        <Link to={`/post/${post._id}`} className='link'>
          <span className="postTitle">{post.title}</span>
        </Link>

        
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>

        <div className="postDesc">
          <p>
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
