export const fetchRandomQuote = async () => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }
    const data = await response.json();

    // Check if data contains the expected quote and author
    if (data && data.quote) {
      return {
        quote: data.quote,
        author: data.author || "Anonymous", // Fallback to 'Anonymous' if no author is provided
      };
    } else {
      throw new Error("No quote data available");
    }
  } catch (error) {
    console.error("Error fetching quote:", error);
    return {
      quote: "Sorry, we couldn't fetch a quote right now.",
      author: "Anonymous",
    };
  }
};
