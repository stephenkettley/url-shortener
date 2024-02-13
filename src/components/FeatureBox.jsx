const FeatureBox = ({ iconLink, heading, text, boxType }) => {
  let classes;
  if (boxType === "middle") {
    classes =
      "relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8";
  } else if (boxType === "bottom") {
    classes =
      "relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-16";
  } else {
    classes =
      "relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3";
  }
  return (
    <div className={classes}>
      <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
        <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
          <img src={iconLink}></img>
        </div>
      </div>
      <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
        {heading}
      </h5>
      <p className="text-center text-gray-400 md:text-left">{text}</p>
    </div>
  );
};

export default FeatureBox;
