document.getElementById("generateLink").addEventListener("click", function() {
  const musicLink = document.getElementById("musicLink").value;
  fetch(`https://api.odesli.co/matches?url=${musicLink}&songIfSingle=true`)
    .then(response => response.json())
    .then(data => {
      const songTitle = data.title;
      const smartLink = `https://zeuss574.github.io/smartlink2/${songTitle.replace(/ /g, "-")}`; 
      document.getElementById("smartLink").innerText = smartLink;
    })
 Access-Control-Allow-Origin: *
 Access-Control-Allow-Origin: https://zeuss574.github.io/smartlink2

});
