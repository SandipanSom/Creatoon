import React from "react"
import { ImageCard } from "@/components/image-card"

const exampleImages = [
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=face",
    prompt: "Cute cartoon character with big eyes and colorful outfit"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=face",
    prompt: "Adorable cartoon animal in a magical forest"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=face",
    prompt: "Cartoon superhero with vibrant colors and dynamic pose"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=face",
    prompt: "Whimsical cartoon house with smiling windows"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=face",
    prompt: "Cartoon robot with friendly expression and metallic shine"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=face",
    prompt: "Magical cartoon princess in a sparkling dress"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=face",
    prompt: "Cartoon space explorer with helmet and rocket ship"
  },
  {
    url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=face",
    prompt: "Cute cartoon food character with happy face"
  }
]

export function ExampleImagesGrid() {
  return (
    <section className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {exampleImages.map((data, idx) => (
        <ImageCard key={idx} imgUrl={data.url} prompt={data.prompt} />
      ))}
    </section>
  )
}
