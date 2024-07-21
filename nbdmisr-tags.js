var yy = document.getElementById("nbdmisr-tags").innerHTML;
document.getElementById("nbdmisr-tags").innerHTML = yy.replace(/#([أ-يa-zA-Z0-9\s-]+)/gi, "<a class='nbdmisr-tags' href='//www.nbdmisr.com/search?q=$1&amp;max-results=10' target='_blank' title='$1'>$1</a>").replace(/,/gi,"");
