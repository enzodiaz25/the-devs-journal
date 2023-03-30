import LabeledTextArea from "../../components/atoms/LabeledTextArea";
import LabeledTextInput from "../../components/atoms/LabeledTextInput";
import { ReactComponent as FormIllustration } from "../../assets/images/chatConversation.svg";
import "./contactMe.css";
import Button from "../../components/atoms/Button";
import SocialMediaGroup from "../../components/atoms/SocialMediaGroup";

export default function ContactMePage() {
  return (
    <section className="contact-me-section">
      <div className="contact-me-section__form">
        <h2 className="contact-me-section__form__heading">
          Let's get in touch!
        </h2>
        <p className="contact-me-section__form__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <LabeledTextInput
          name="contact[name]"
          placeholder="Geralt of Rivia"
          label="Name"
          className="contact-me-section__form__field"
          flow={true}
          glow={true}
        />
        <LabeledTextInput
          name="contact[email]"
          placeholder="your_email@domain.com"
          label="E-mail"
          className="contact-me-section__form__field"
          flow={true}
          glow={true}
        />
        <LabeledTextArea
          name="contact[message]"
          placeholder="Enter a message..."
          label="Message"
          flow={true}
          glow={true}
        />
        <Button
          className="contact-me-section__form__submit"
          type="submit"
          label="Submit"
          flow={true}
        />
        <SocialMediaGroup className="contact-me-section__form__social-media" />
      </div>
      <FormIllustration className="contact-me-section__illustration" />
    </section>
  );
}
