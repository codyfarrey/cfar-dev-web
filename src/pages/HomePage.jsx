import BlogSection from "../components/BlogSection";
import HeroSection from "../components/HeroSection";

export default function HomePage() {
  return (
    <div className="content-area-transactions" link={false}>
      <HeroSection />
      <BlogSection />
    </div>
  );
}