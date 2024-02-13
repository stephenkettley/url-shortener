import MenuContainer from "./MenuContainer";
import SocialContainer from "./SocialContainer";

const Footer = () => {
  return (
    <div className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 lg:flex-row lg:space-y-0 lg:items-start">
        <img src="images/logo.svg"></img>
        <MenuContainer></MenuContainer>
        <SocialContainer></SocialContainer>
      </div>
    </div>
  );
};

export default Footer;
