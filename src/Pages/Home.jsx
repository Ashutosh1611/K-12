import EducationHero from "../AppComponents/EducationHero";
import Partners from "../AppComponents/Partners";
import Services from "../AppComponents/Services";
import ServiceAnimation from "../AppComponents/ServiceAnimation";
import ServiceAnimationMobile from "../AppComponents/ServiceAnimationMobile";
import SuccessStory from "../AppComponents/SuccessStory";
import FeaturedResources from "../AppComponents/FeaturedResources";
import FAQs from "../AppComponents/FAQs";
import Earth from "../AppComponents/Earth";

export default function Home() {
  return (
    <div>
      <Partners />
      <EducationHero />
      <Services />
      <div className="hidden md:block">
        <ServiceAnimation />
      </div>
      <div className="block md:hidden">
        <ServiceAnimationMobile />
      </div>
      <Earth />
      <SuccessStory />
      <FeaturedResources />
      <FAQs />
    </div>
  );
}