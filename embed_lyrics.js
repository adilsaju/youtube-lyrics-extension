// // track_share_url_sliced=``
// track_share_url_sliced=`https://www.musixmatch.com/lyrics/Rachel-Platten/Fight-Song`
// // track_url=`//www.musixmatch.com/lyrics/Rachel-Platten/Fight-Song`
// url1=`${track_share_url_sliced}/embed?theme=dark`
// url2=`${track_share_url_sliced}`
// {/* <div><iframe src="${url1}" style="border:none;background:transparent;" width="100%" height="380" border=0></iframe><a href="${url2}">View Fight Song Lyrics by Rachel Platten</a> at <a href="https://www.musixmatch.com/">Musixmatch</a></div> */}
// {/* <div><iframe src="https://www.musixmatch.com/lyrics/Rachel-Platten/Fight-Song/embed?theme=dark" style="border:none;background:transparent;" width="100%" height="380" border=0></iframe><a href="https://www.musixmatch.com/lyrics/Rachel-Platten/Fight-Song">View Fight Song Lyrics by Rachel Platten</a> at <a href="https://www.musixmatch.com/">Musixmatch</a></div> */}


// var app = chrome.runtime.getBackgroundPage();

function hello() {
    chrome.tabs.executeScript({
      file: 'alert.js'
    }); 
  }
  
  window.addEventListener('load', hello);