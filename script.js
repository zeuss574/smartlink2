document.getElementById("generateLink").addEventListener("click", function() {
  const musicLink = document.getElementById("musicLink").value;
  fetch(`https://api.allorigins.win/raw?url=https://api.odesli.co/matches?url=${musicLink}`)
    .then(response => response.json())
    .then(data => {
      // Access the song IDs from the Spotify data
      const spotifySongIds = data.metadataByUniqueId['spotify|album|'+ data.id].songIds; 

      // Create an array to store smart links
      const smartLinks = [];

      // Loop through each song ID 
      spotifySongIds.forEach(songId => {
        // Get song title from Spotify data (assuming song titles are in the same order as IDs)
        const songTitle = data.metadataByUniqueId['spotify|album|'+ data.id].title; 
        const smartLink = `https://example.com/${songTitle.replace(/ /g, "-")}/${songId}`; 
        smartLinks.push(smartLink);
      });

      // Display the smart links in the paragraph
      document.getElementById("smartLink").innerText = smartLinks.join('\n'); 
    })
    .catch(error => console.error('Error:', error));
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Origin: https://zeuss574.github.io/smartlink2/
});
