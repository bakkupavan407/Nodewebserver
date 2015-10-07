
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
    path:"DSCN7474.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7475.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7478.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7480.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7481.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7484.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7491.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7492.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7496.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7499.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7501.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7517.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7524.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7526.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7538.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7540.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7542.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7544.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7550.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7555.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7557.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7560.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7565.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7570.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7573.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7576.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7577.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7579.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7582.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7583.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7588.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7589.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7591.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7595.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7596.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7602.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7474.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7608.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7611.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7663.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7665.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7675.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7676.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7678.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7686.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7690.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7691.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7694.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7701.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7702.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7703.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7705.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7711.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7711.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7715.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7717.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7474.jpg"
},{
    title:"bakkupeta",
    path:"DSCN7720.jpg"
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