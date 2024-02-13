const token = "2893cab52c35d60031c437132982c600737ca5c7";

async function fetchShortLink(longLink) {
  try {
    const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: longLink,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
export default fetchShortLink;
