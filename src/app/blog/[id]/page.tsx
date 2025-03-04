import { notFound } from "next/navigation"
import Comments from "./comments"

interface BlogPost {
  id: number
  title: string
  content: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Transformer Architecture",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2023-06-01",
  },
  // Add more blog posts as needed
]

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{post.date}</p>
      <div className="prose max-w-none mb-8">
        <p>{post.content}</p>
      </div>
      <Comments postId={post.id} />
    </div>
  )
}

