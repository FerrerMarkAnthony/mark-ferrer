import Comment from "../models/Comment.js";
import Blog from "../models/Blog.js";

// Add a Comment
const addComment = async (req, res) => {
  try {
    const { text, blogId } = req.body;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    // console.log("Blog ID" + blogId);
    const comment = await Comment.create({
      text,
      blog: blog._id,
      user: req.user._id,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get Comments for a Blog
const getCommentsByBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blogComments = await Comment.find({ blog: id });
    if (!blogComments.length) {
      return res.status(400).json({ error: "No Comment Found" });
    }
    res.status(200).json(blogComments);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a Comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    if (comment.user.toString() !== req.user._id) {
      return res.status(403).json({ error: "Not Authorized" });
    }

    await Comment.deleteOne({ _id: id });
    res.status(200).json({ message: "Comment Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export { addComment, getCommentsByBlog, deleteComment };
