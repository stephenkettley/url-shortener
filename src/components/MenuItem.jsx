const MenuItem = ({ heading, menuItems }) => {
  return (
    <div className="flex flex-col items-center w-full md:items-start">
      <div className="mb-5 font-bold text-white capitalize">{heading}</div>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className="capitalize text-grayishViolet hover:text-cyan"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
