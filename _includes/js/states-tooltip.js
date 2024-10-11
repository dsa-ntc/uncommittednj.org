var tooltipSpan = document.getElementById('details-box');
var stateList = {{ site.data.states | json | replace: '=>', ':'}}
console.log(stateList);
console.log("hi");

/*        window.addEventListener("load", (e) => {
          var els = document.querySelectorAll(".swing");
          els.forEach((el) => {
            var wrapper = document.createElement("a");
            wrapper.setAttribute("href", stateList[el.classList[0]].url);
            el.parentNode.insertBefore(wrapper, el);
            wrapper.appendChild(el);
          });
        });
*/

document.addEventListener('mouseover', function (e) {
    var stateAbbrev = e.target.classList[0];
    console.log(stateAbbrev);
    if (e.target.tagName == 'path' && e.target.classList[1] == "swing") {
        if (tooltipSpan.firstChild != null) {
          tooltipSpan.removeChild(tooltipSpan.firstChild); 
        }
        var state = stateList[stateAbbrev];
        var petitionImg = document.createElement("img");
        var petitionImgUrl = "/assets/" + state.img;

        petitionImg.setAttribute("src", petitionImgUrl);
        petitionImg.setAttribute("max-height", "100px");

        tooltipSpan.appendChild(petitionImg);
        tooltipSpan.style.opacity = "100%";
    }
    else {
        tooltipSpan.style.opacity = "0%";
    }
});

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x) + 'px';
};
