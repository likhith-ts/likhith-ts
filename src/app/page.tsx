import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Portfolio Site</h1>
      <Image
        src="/placeholder.svg?height=200&width=200"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full mb-6"
      />
      <p className="text-xl mb-8 text-center max-w-2xl">
        Hi, I'm Likhith. I'm a machine learning developer passionate about creating intelligent systems and solving
        complex problems. Here, you'll find my projects, publications, and thoughts on AI and ML.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Latest Project</h2>
          <p>Brief description of your most recent or notable project.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Recent Publication</h2>
          <p>Title and brief summary of your latest article or paper.</p>
        </div>
      </div>
    </div>
  )
}

