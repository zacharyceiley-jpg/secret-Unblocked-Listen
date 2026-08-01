// search.js

document.addEventListener("DOMContentLoaded", () => {

    // Create search box
    const search = document.createElement("input");
    search.type = "text";
    search.placeholder = "Search songs...";
    search.id = "searchBar";

    search.style.width = "100%";
    search.style.padding = "12px";
    search.style.margin = "20px 0";
    search.style.fontSize = "16px";
    search.style.borderRadius = "8px";
    search.style.border = "none";
    search.style.outline = "none";
    search.style.background = "#1e1e1e";
    search.style.color = "white";

    const playlist = document.getElementById("playlist");
    playlist.parentNode.insertBefore(search, playlist);

    search.addEventListener("input", () => {
        const value = search.value.toLowerCase();
        const songs = document.querySelectorAll(".song");

        songs.forEach(song => {
            const title = song.querySelector("p").textContent.toLowerCase();

            if (title.includes(value)) {
                song.style.display = "";
            } else {
                song.style.display = "none";
            }
        });
    });

});
