import ZoeTheCat from "../../assets/images/zoeTheCat.png";
import Heading from "../../components/atoms/Heading";
import SocialMediaGroup from "../../components/atoms/SocialMediaGroup";

export default function AboutMePage() {
  return (
    <section>
      <article className="blog-article">
        <div className="blog-article__header-image">
          <img src={ZoeTheCat} />
        </div>
        <Heading>About me</Heading>
        <div className="blog-article__content">
          <Heading level={2} separator={true}>
            Lorem title
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
            donec adipiscing tristique risus nec feugiat in fermentum posuere.
            Sed felis eget velit aliquet sagittis id. Vitae nunc sed velit
            dignissim sodales ut eu sem. Tincidunt vitae semper quis lectus
            nulla at. Dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit. Risus at ultrices mi tempus imperdiet nulla.
          </p>
          <Heading level={3}>Sub-content title</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              Diam donec adipiscing tristique risus nec feugiat in fermentum
              posuere. Sed felis eget velit aliquet sagittis id.
            </li>
            <li>Vitae nunc sed velit dignissim sodales ut eu sem. </li>
            <li>
              Tincidunt vitae semper quis lectus nulla at. Dolor sit amet
              consectetur adipiscing elit ut aliquam purus sit. Risus at
              ultrices.
            </li>
          </ul>
        </div>
        <SocialMediaGroup className="blog-article__social-media" />
      </article>
    </section>
  );
}
