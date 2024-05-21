document.getElementById("generateLink").addEventListener("click", function() {
  const musicLink = document.getElementById("musicLink").value;
  fetch(`https://api.odesli.co/matches?url=${musicLink}&songIfSingle=true`)
    .then(response => response.json())
    .then(data => {
      const songTitle = data.title;
      const smartLink = `https://example.com/${songTitle.replace(/ /g, "-")}`; 
      document.getElementById("smartLink").innerText = smartLink;
    })
    .catch(error => console.error('Error:', error));
});