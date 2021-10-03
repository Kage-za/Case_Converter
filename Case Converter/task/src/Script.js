document.getElementById("upper-case").addEventListener("click", function() {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toUpperCase();

});

document.getElementById("lower-case").addEventListener("click", function() {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();
    var aS = document.querySelector("textarea").value.split(" ");
    for (let i =0; i< aS.length; i++) {   //aS = arrayString for storing the text area as a array seperated by " "
        aS[i] = aS[i].charAt(0).toUpperCase() + aS[i].slice(1);
    }
    var sS = aS.join(' ');  //sentenceString for rejoining the string to present in text area.
    document.querySelector("textarea").value = sS;

});

document.getElementById("sentence-case").addEventListener("click", function() {
    document.querySelector("textarea").value = document.querySelector("textarea").value.toLowerCase();
    var aS = document.querySelector("textarea").value.split(". ");
    for (let i =0; i< aS.length; i++) {   //aS = arrayString for storing the text area as a array seperated by "."
        aS[i] = aS[i].charAt(0).toUpperCase() + aS[i].slice(1);
    }
    var sS = aS.join(". ");  //sentenceString for rejoining the string to present in text area.
    document.querySelector("textarea").value = sS;
});


document.getElementById("save-text-file").addEventListener("click", function () {
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    download("text.txt", document.querySelector("textarea").value);
});