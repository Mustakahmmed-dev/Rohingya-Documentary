import Hero from "@/components/Hero/Hero"
import ArticlesSection from "@/components/HomeSections/ArticlesSection"
import GallerySection from "@/components/HomeSections/GallerySection"
import VideosSection from "@/components/HomeSections/VideosSection"

const Home = () => {
  return (
    <div>
      <Hero />
      <ArticlesSection />
      <VideosSection />
      <GallerySection />
    <p>A quick brown fox jumps over the lazy dog.</p>
    </div>
  )
}

export default Home