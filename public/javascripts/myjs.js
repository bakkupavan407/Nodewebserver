
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

/*var myJsonObj = [{
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
}];*/

var myJsonObj = [{
    title:"bakkupeta",
    path:"DSCN7474.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7475.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7478.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7480.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7481.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7484.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7491.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7492.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7496.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7499.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7501.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7517.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7524.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7526.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7538.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7540.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7542.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7544.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7550.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7555.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7557.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7560.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7565.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7570.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7573.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7576.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7577.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7579.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7582.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7583.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7588.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7589.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7591.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7595.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7596.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7602.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7474.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7608.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7611.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7663.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7665.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7675.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7676.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7678.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7686.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7690.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7691.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7694.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7701.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7702.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7703.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7705.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7711.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7711.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7715.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7717.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7474.JPG"
},{
    title:"bakkupeta",
    path:"DSCN7720.JPG"
}];

setTimeout(function() {
    for (var i = 0; i < myJsonObj.length; i++) {
        var maincontainer, subcontainer, anchortag, imgtag, loader;

        maincontainer = document.getElementById('links');

        subcontainer = document.createElement('div');
        // subcontainer.className = "col-sm-6 col-md-3";
        subcontainer.style.display = "inline-block";

        anchortag = document.createElement('a');
        anchortag.href = "images/baks/" + myJsonObj[i].path;
        // anchortag.className = "thumbnail";

        imgtag = document.createElement('img');
        imgtag.src = "images/baks/" + myJsonObj[i].path;
        imgtag.className = "img-responsive thumbnail";

        anchortag.appendChild(imgtag);

        subcontainer.appendChild(anchortag);
        maincontainer.appendChild(subcontainer);

        maincontainer.style.display = "block";

        loader = document.getElementById('loader');
        loader.style.display = "none";
    }
}, 2000);