import MenuItem from "./MenuItem";

const MenuContainer = () => {
  return (
    <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
      <MenuItem
        heading="Features"
        menuItems={["Link Shortening", "Branded Links", "Analytics"]}
      ></MenuItem>
      <MenuItem
        heading="Resources"
        menuItems={["Blog", "Developers", "Support"]}
      ></MenuItem>
      <MenuItem
        heading="Company"
        menuItems={["About", "Our Team", "Careers", "Contact"]}
      ></MenuItem>
    </div>
  );
};

export default MenuContainer;
