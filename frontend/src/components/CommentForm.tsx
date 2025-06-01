// frontend/src/components/CommentForm.tsx

import React, { useState, FormEvent } from "react";
import api from "../services/api";

export interface Comment {
  id: number;
  name: string;
  avatar_url?: string | null;
  comment_text: string;
  created_at: string;
}

interface CommentFormProps {
  onCommentPosted: (newComment: Comment) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onCommentPosted }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !commentText.trim()) {
      setError("Both name and comment are required.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: name.trim(),
        avatar_url: "",          // Optional: you could auto-generate or leave blank
        comment_text: commentText.trim(),
      };

      const response = await api.post<Comment>("/outreach/comments/", payload);
      onCommentPosted(response.data);

      // Clear form
      setName("");
      setCommentText("");
    } catch (err: any) {
      console.error("Failed to post comment:", err);
      setError("Failed to post comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Comments</h3>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div>
          <textarea
            name="comment_text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Share your thoughts..."
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none resize-none"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={submitting}
            className={`
              px-6 py-2 text-white font-medium rounded-full
              ${submitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}
              focus:outline-none
            `}
          >
            {submitting ? "Posting..." : "Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
