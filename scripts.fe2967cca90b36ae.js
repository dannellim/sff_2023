function shareLink(t){navigator.share?(console.log(`Previously visited page URL: ${t}`),navigator.share({title:document.title,text:"DISCOVER THE CR\xc9DIT AGRICOLE GROUP",url:t}).then(()=>console.log("Successful share")).catch(e=>console.log("Error sharing:",e))):console.log("sharing not allowed")}function initImgModal(){initLocationImg(),initBoothImg()}function initLocationImg(){var t=document.getElementById("myModal"),e=document.getElementById("locationImg"),o=document.getElementById("img01"),l=document.getElementById("caption");e&&(e.onclick=function(){console.log(e),t.style.display="block",o.src=this.src,l.innerHTML=this.alt});var n=document.getElementsByClassName("close")[0];n&&(n.onclick=function(){t.style.display="none"})}function initBoothImg(){var t=document.getElementById("myModal"),e=document.getElementById("boothImg"),o=document.getElementById("img01"),l=document.getElementById("caption");e&&(e.onclick=function(){console.log(e),t.style.display="block",o.src=this.src,l.innerHTML=this.alt});var n=document.getElementsByClassName("close")[0];n&&(n.onclick=function(){t.style.display="none"})}