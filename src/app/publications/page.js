import Link from "next/link"

const publications = [
  {
    id: 1,
    title: "Advancements in Reinforcement Learning",
    type: "paper",
    description: "A comprehensive study on recent developments in reinforcement learning algorithms.",
    url: "https://example.com/reinforcement-learning-paper",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Implementing BERT for Text Classification",
    type: "article",
    description: "A step-by-step guide on using BERT for text classification tasks.",
    url: "https://medium.com/@yourusername/implementing-bert-for-text-classification",
    date: "2023-03-22",
  },
  {
    id: 3,
    title: "The Future of Computer Vision in Healthcare",
    type: "blog",
    description: "Exploring potential applications of computer vision in medical diagnosis and treatment.",
    url: "https://yourblog.com/computer-vision-healthcare",
    date: "2023-01-10",
  },
  // Add more publications as needed
]

export default function Publications() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Publications</h1>
      <div className="space-y-6">
        {publications.map((pub) => (
          <div key={pub.id} className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{pub.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)} • {pub.date}
            </p>
            <p className="mb-4">{pub.description}</p>
            <Link
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

