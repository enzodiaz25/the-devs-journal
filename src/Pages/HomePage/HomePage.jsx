import "./homePage.css";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import BlogArticleCard from "../../components/BlogArticleCard/BlogArticleCard";

export default function HomePage() {
  return (
    <div>
      <HomeHeader />
      <BlogArticleCard className="home-page__article-card" />
      <BlogArticleCard
        title="😻️  Lorem ipsum dolor sit amet"
        className="home-page__article-card"
      />
      <BlogArticleCard className="home-page__article-card" />
      <BlogArticleCard className="home-page__article-card" />
    </div>
  );
}
