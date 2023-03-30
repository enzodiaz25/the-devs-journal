import "./homePage.css";
import HomeHeader from "../../components/molecules/HomeHeader";
import BlogArticleCard from "../../components/molecules/BlogArticleCard";
import SocialMediaGroup from "../../components/atoms/SocialMediaGroup";

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHeader />
      <section className="home-page__blog-section">
        <BlogArticleCard className="home-page__article-card" />
        <BlogArticleCard
          title="😻️  Lorem ipsum dolor sit amet"
          className="home-page__article-card"
        />
        <BlogArticleCard className="home-page__article-card" />
        <BlogArticleCard className="home-page__article-card" />
      </section>
      <footer className="home-page__footer">
        <SocialMediaGroup className="home-page__social-media" />
        <p className="home-page__footer__ownership-statement">
          2023 - Enzo Diaz
        </p>
      </footer>
    </div>
  );
}
