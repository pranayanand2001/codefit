import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6">
      <h1 className="text-4xl font-bold mb-6 mt-6 text-center">My Blog 🧠</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.length === 0 ? (
          <p className="text-gray-400 text-center col-span-full">
            No blog posts found.
          </p>
        ) : (
          posts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="bg-neutral-900 p-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="rounded-lg mb-3"
              />
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-300 line-clamp-3" dangerouslySetInnerHTML={{ __html: post.content }} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
