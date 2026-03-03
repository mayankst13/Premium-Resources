function loadBatch(file) {
  fetch("batches/" + file)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = extractBody(data);
    });
}

// HTML file se sirf body content nikalega
function extractBody(html) {
  let parser = new DOMParser();
  let doc = parser.parseFromString(html, "text/html");
  return doc.body.innerHTML;
}