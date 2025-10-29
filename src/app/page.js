import Hero from "@/components/Hero/Hero"
import ArticlesSection from "@/components/HomeSections/ArticlesSection"
import GallerySection from "@/components/HomeSections/GallerySection"
import NewsSection from "@/components/HomeSections/NewsSection"
import VideosSection from "@/components/HomeSections/VideosSection"

const Home = () => {
  return (
    <div>
      <Hero />
      <ArticlesSection />
      <NewsSection />
      <VideosSection />
      <GallerySection />
      
    </div>
  )
}

export default Home