const MobileMenu = ({ showing }) => {
  let classes;

  if (showing) {
    classes =
      "absolute flex p-6 rounded-lg bg-darkViolet left-4 right-4 top-20 z-100 lg:hidden";
  } else {
    classes =
      "absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 lg:hidden";
  }
  return (
    <div className={classes}>
      <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
        <a href="#" className="w-full text-center">
          Features
        </a>
        <a href="#" className="w-full text-center">
          Pricing
        </a>
        <a href="#" className="w-full text-center">
          Resources
        </a>
        <a
          href="#"
          className="w-full pt-6 border-t border-gray4800 text-center"
        >
          Login
        </a>
        <a
          href="#"
          className="w-full text-center py-3 rounded-full bg-cyan hover:bg-cyanLight"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
