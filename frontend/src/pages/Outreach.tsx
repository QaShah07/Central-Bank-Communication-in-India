// frontend/src/pages/Outreach.tsx

import React, { useState, useEffect } from "react";
import api from "../services/api";
import CommentForm, { Comment } from "../components/CommentForm";

interface Podcast {
  id: number;
  title: string;
  episode_number: number;
  speaker: string;
  description: string;
  media_url: string;
  thumbnail_url: string | null;
  published_on: string;
}

interface BlogPost {
  id: number;
  title: string;
  category: "policy_updates" | "communication_analysis" | "media_mentions";
  excerpt: string;
  slug: string;
  image_url: string | null;
  published_on: string;
}

const Outreach: React.FC = () => {
  // 1. State for podcasts, blog posts, comments
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 2. Fetch all data on mount
  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [podRes, blogRes, comRes] = await Promise.all([
          api.get<Podcast[]>("/outreach/podcasts/"),
          api.get<BlogPost[]>("/outreach/blogs/"),
          api.get<Comment[]>("/outreach/comments/"),
        ]);
        setPodcasts(podRes.data);
        setBlogPosts(blogRes.data);
        setComments(comRes.data);
      } catch (err) {
        console.error("Error fetching outreach data:", err);
        setError("Failed to load data. Please refresh.");
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  // 3. Callback when a new comment is posted
  const handleNewComment = (newComment: Comment) => {
    setComments((prev) => [newComment, ...prev]); // prepend to list
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* 4. Podcasts Section */}
      <section id="podcasts">
        <h1 className="text-3xl font-semibold mb-6">Podcasts</h1>
        <div className="space-y-8">
          {podcasts.map((pod) => (
            <div
              key={pod.id}
              className="flex flex-col md:flex-row items-start bg-gray-50 rounded-xl p-6"
            >
              {/* Thumbnail */}
              <div className="md:w-1/4 w-full mb-4 md:mb-0">
                {pod.thumbnail_url ? (
                  <img
                    src={pod.thumbnail_url}
                    alt={pod.title}
                    className="w-full h-auto rounded"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Text & Play Button */}
              <div className="md:w-3/4 w-full md:pl-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {pod.title}{" "}
                  <span className="text-sm text-gray-500">
                    (Episode {pod.episode_number}: {pod.speaker})
                  </span>
                </h2>
                <p className="text-gray-600 mb-4">{pod.description}</p>
                <a
                  href={pod.media_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                >
                  ▶️ Play Episode
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Blog Section */}
      <section id="blog">
        <h1 className="text-3xl font-semibold mb-6">Blog</h1>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col md:flex-row items-start bg-white rounded-xl shadow p-6"
            >
              {/* Image */}
              <div className="md:w-1/3 w-full mb-4 md:mb-0">
                {post.image_url ? (
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-full h-auto rounded"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="md:w-2/3 w-full md:pl-6">
                <p className="text-sm uppercase text-blue-500 mb-1">
                  {post.category === "policy_updates"
                    ? "Policy Updates"
                    : post.category === "communication_analysis"
                    ? "Communication Analysis"
                    : "Media Mentions"}
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Comments Section */}
      <section id="comments">
        <CommentForm onCommentPosted={handleNewComment} />

        <div className="space-y-6">
          {comments.map((cmt) => (
            <div
              key={cmt.id}
              className="bg-gray-50 rounded-xl p-4 flex items-start"
            >
              {/* Avatar */}
              <div className="mr-4">
                {cmt.avatar_url ? (
                  <img
                    src={cmt.avatar_url}
                    alt={cmt.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-white uppercase text-lg">
                      {cmt.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              {/* Name, Timestamp, Text */}
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800">
                    {cmt.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(cmt.created_at).toLocaleDateString()}{" "}
                    {new Date(cmt.created_at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{cmt.comment_text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Outreach;
