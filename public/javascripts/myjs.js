
document.getElementById('links').onclick = function(event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {
            index: link,
            event: event
        },
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

var myJsonObj = [{
    title: "bakkupeta",
    path: "bkpvinayaka.jpg"
}, {
    title: "bakkupeta",
    path: "bkpyouth.jpg"
}, {
    title: "bakkupeta",
    path: "bkpvinayaka.jpg"
}, {
    title: "bakkupeta",
    path: "bkpyouth.jpg"
}, {
    title: "bakkupeta",
    path: "bkpvinayaka.jpg"
}];

setTimeout(function() {
    for (var i = 0; i < myJsonObj.length; i++) {
        var maincontainer, subcontainer, anchortag, imgtag, loader;

        maincontainer = document.getElementById('links');

        subcontainer = document.createElement('div');
        // subcontainer.className = "col-sm-6 col-md-3";
        subcontainer.style.display = "inline-block";

        anchortag = document.createElement('a');
        anchortag.href = "images/" + myJsonObj[i].path;
        // anchortag.className = "thumbnail";

        imgtag = document.createElement('img');
        imgtag.src = "images/" + myJsonObj[i].path;
        imgtag.className = "img-responsive thumbnail";

        anchortag.appendChild(imgtag);

        subcontainer.appendChild(anchortag);
        maincontainer.appendChild(subcontainer);

        maincontainer.style.display = "block";

        loader = document.getElementById('loader');
        loader.style.display = "none";
    }
}, 2000);