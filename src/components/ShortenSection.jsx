import { useState } from "react";
import fetchShortLink from "../http";
import InputForm from "./InputForm";
import ShortLink from "./ShortLink";

const ShortenSection = () => {
  const [links, setLinks] = useState([]);
  const [isError, setIsError] = useState(false);

  async function handleSubmit(longLink) {
    const shortItem = await fetchShortLink(longLink);
    setIsError(false);

    if (shortItem.link !== undefined) {
      console.log(shortItem.link);
      setItems(shortItem);
    } else {
      setIsError(true);
    }
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
        {isError && (
          <p className="text-red text-md font-bold">
            There was an error loading your short link from the server.
          </p>
        )}
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
