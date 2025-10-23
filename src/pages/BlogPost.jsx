import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl">Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/blog')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <div className="bg-neutral-900 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-gray-400 hover:text-white transition-colors group"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4 leading-tight text-white">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-400 mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-lg">{post.date}</span>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-8">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-gray-300 leading-relaxed text-lg space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate('/blog')}
              className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Posts
            </button>
            <div className="text-sm text-gray-500">
              Published on {post.date}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
