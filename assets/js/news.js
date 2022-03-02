function fetchNews() {
  fetch(
    "https://newsapi.org/v2/everything?q=digital+marketing+tips&apiKey=4caf0272e0ff44c0b851826db018aa51"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.articles);
      const renderNews = data.articles
        .map((article, index) => {
          return (
            `<h3>${article.title}</h3>` + `<img src="${article.urlToImage}/>`
          );
        })
        .join("");
      document
        .querySelector("#singleArticle")
        .insertAdjacentHTML("afterbegin", renderNews);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchNews();
