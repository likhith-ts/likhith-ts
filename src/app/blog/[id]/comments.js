"use client"

import { useState, useEffect } from "react"

export default function Comments({ postId }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    // Fetch comments for the post
    // This is a mock implementation. In a real app, you'd fetch from an API
    setComments([
      { id: 1, author: "Alice", content: "Great article!", date: "2023-06-02" },
      { id: 2, author: "Bob", content: "Very informative, thanks!", date: "2023-06-03" },
    ])
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you'd send this to your API
    const comment = {
      id: comments.length + 1,
      author: "Current User",
      content: newComment,
      date: new Date().toISOString().split("T")[0],
    }
    setComments([...comments, comment])
    setNewComment("")
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <p className="font-semibold">{comment.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{comment.date}</p>
          <p>{comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg mb-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          rows={3}
          placeholder="Add a comment..."
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Post Comment
        </button>
      </form>
    </div>
  )
}

