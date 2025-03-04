import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Transformer Architecture",
    excerpt: "An in-depth look at the transformer architecture that powers modern NLP models.",
    date: "2023-06-01",
  },
  {
    id: 2,
    title: "Optimizing Convolutional Neural Networks",
    excerpt: "Techniques to improve the performance and efficiency of CNNs in computer vision tasks.",
    date: "2023-05-15",
  },
  // Add more blog posts as needed
]

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

