/**
  * @param {String} url - address for the HTML to fetch
  * @return {String} the resulting HTML string fragment
  */
 async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

/**
  * @param {String} url - address for the HTML to fetch
  */
async function loadHTML(url, id) {
    const contentDiv = document.getElementById(id);
    contentDiv.innerHTML = await fetchHtmlAsText(url);
}