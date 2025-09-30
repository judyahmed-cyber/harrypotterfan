const getQuoteBtn = document.getElementById("getQuote");
const quoteBox = document.getElementById("quoteBox");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

getQuoteBtn.addEventListener("click", async () => {
    try {
        const res = await fetch("https://potterhead-api.vercel.app/api/movies");
        if (!res.ok) throw new Error("Failed to fetch!");
        const data = await res.json();
        const randomMovie = data[Math.floor(Math.random() * data.length)];

        quoteText.textContent = `"${randomMovie.title}" released in ${randomMovie.release_date}`;
        quoteAuthor.textContent = randomMovie.summary || "No summary available";

        quoteBox.style.display = "block";
    } catch (error) {
        quoteText.textContent = "Oops! Couldn’t fetch movie info.";
        quoteAuthor.textContent = "";
        quoteBox.style.display = "block";
    }
});
