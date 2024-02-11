const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <img src="images/logo.svg"></img>
          <div className="hidden lg:flex space-x-8 font-bold">
            <a href="" className="text-grayishViolet hover:text-veryDarkViolet">
              Features
            </a>
            <a href="" className="text-grayishViolet hover:text-veryDarkViolet">
              Pricing
            </a>
            <a href="" className="text-grayishViolet hover:text-veryDarkViolet">
              Resources
            </a>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-6 font-bold text-grayishViolet">
          <div className="hover:text-veryDarkViolet">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
