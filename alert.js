
$(document).ready(function(){
    // alert('hello ' + document.location.href);
{/* <script> */}
    // window.onload=
  track_share_url_sliced=`https://www.musixmatch.com/lyrics/Rachel-Platten/Fight-Song`
  // track_url=`//www.musixmatch.com/lyrics/Rachel-Platten/Fight-Song`
  url1=`${track_share_url_sliced}/embed?theme=dark`
  url2=`${track_share_url_sliced}`
  embed_html=`<div><iframe src="${url1}" style="border:none;background:transparent;" width="100%" height="380" border=0></iframe><a href="${url2}">View Fight Song Lyrics by Rachel Platten</a> at <a href="https://www.musixmatch.com/">Musixmatch</a></div>`
  var new_element=document.createElement('div')
  new_element.innerHTML=embed_html
  document.querySelector('body').insertBefore(new_element,document.querySelector('body').firstChild)
  // var eElement; // some E DOM instance
  // var newFirstElement; //element which should be first in E
  
  // eElement.insertBefore(newFirstElement, eElement.firstChild);
  //   </script>
    // var div = document.getElementById("top_bar");
    // alert(div.innerHTML);
  });

  // from:
//   https://stackoverflow.com/questions/25045917/chrome-extension-accessing-the-dom-of-the-popup-html-and-getting-jquery-to-work