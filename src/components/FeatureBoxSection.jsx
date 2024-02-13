import FeatureBox from "./FeatureBox";

const FeatureBoxSection = () => {
  return (
    <div className="pb-32 bg-gray-100">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        <div className="hidden absolute top-24 left-16 h-3 bg-cyan md:block w-10/12"></div>
        <div className="absolute w-2 h-full -ml-1 bg-cyan md:hidden left-1/2"></div>
        <FeatureBox
          iconLink="images/icon-brand-recognition.svg"
          heading="Detailed Records"
          text="Boost your brand recognition with each click. Generic links don't mean a
          thing. Branded links help instil confidence in your content."
          boxType="top"
        ></FeatureBox>
        <FeatureBox
          iconLink="images/icon-detailed-records.svg"
          heading="Brand Recognition"
          text="Gain insights into who is clicking your links. Knowing when and where people 
          engage with your content helps inform better decisions."
          boxType="middle"
        ></FeatureBox>
        <FeatureBox
          iconLink="images/icon-fully-customizable.svg"
          heading="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links,
          supercharging audience engagement."
          boxType="bottom"
        ></FeatureBox>
      </div>
    </div>
  );
};

export default FeatureBoxSection;
