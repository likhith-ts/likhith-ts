import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "ML Image Classifier",
    description: "A deep learning model for image classification using TensorFlow.",
    githubUrl: "https://github.com/yourusername/ml-image-classifier",
    liveUrl: "https://ml-image-classifier.vercel.app",
  },
  {
    id: 2,
    title: "NLP Sentiment Analyzer",
    description: "A natural language processing model for sentiment analysis.",
    githubUrl: "https://github.com/yourusername/nlp-sentiment-analyzer",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                GitHub
              </Link>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

