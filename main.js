search_track="fight song"
search_artist="rachel platten"
search_album=""
url=`http://api.musixmatch.com/ws/1.1/track.search?q_track=${search_track}&apikey=63293915c47a2ed74116f3c64a445ee3&q_artist=${search_artist}&s_track_rating=desc&page_size=1&page=1`
fetch(url).then(()=>{}).catch(()=>{console.log("hit error");})