"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

export default function Comments({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    // Fetch comments for the post
    // This is a mock implementation. In a real app, you'd fetch from an API
    setComments([
      { id: 1, author: "Alice", content: "Great article!", date: "2023-06-02" },
      { id: 2, author: "Bob", content: "Very informative, thanks!", date: "2023-06-03" },
    ])
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your API
    const comment: Comment = {
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
        <div key={comment.id} className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="font-semibold">{comment.author}</p>
          <p className="text-sm text-gray-600 mb-2">{comment.date}</p>
          <p>{comment.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-lg mb-2"
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

