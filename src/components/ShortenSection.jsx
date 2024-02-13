import { useState } from "react";
import fetchShortLink from "../http";
import InputForm from "./InputForm";
import ShortLink from "./ShortLink";

const ShortenSection = () => {
  const [links, setLinks] = useState([]);

  async function handleSubmit(longLink) {
    const shortItem = await fetchShortLink(longLink);
    console.log(shortItem.link);
    setItems(shortItem);
  }

  function setItems(shortItem) {
    setLinks((prevLinks) => {
      return [
        ...prevLinks,
        {
          id: shortItem.id,
          longLink: shortItem.long_url,
          shortLink: shortItem.link,
        },
      ];
    });
  }

  return (
    <div className="relative bg-gray-100">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <InputForm onSubmit={handleSubmit}></InputForm>
        {links.map((item) => (
          <ShortLink
            key={item.id}
            longLink={item.longLink}
            shortLink={item.shortLink}
          ></ShortLink>
        ))}
      </div>
    </div>
  );
};

export default ShortenSection;
