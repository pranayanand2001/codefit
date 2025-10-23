import { useState } from "react";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        title,
        coverImage,
        content,
        date: new Date().toDateString(),
      });
      alert("✅ Blog added successfully!");
      setTitle("");
      setCoverImage("");
      setContent("");
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("❌ Failed to add blog");
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 text-white"
          required
        />
        <div className="bg-white text-black rounded">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            modules={modules}
            formats={formats}
            placeholder="Write your blog content here..."
            className="h-96"
          />
        </div>
        <button
          type="submit"
          className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
