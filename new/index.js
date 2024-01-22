function jpChangeColor(){
    var x = document.getElementById('jp');
    var y = document.getElementById('kr');
    x.style.backgroundColor = 'azure';
    y.style.backgroundColor = 'white';

    var div = document.getElementById('krcont');
    var div2 = document.getElementById('jpcont');
    div.style.display = "none";
    div2.style.display = "flex";
    div2.className = 'divShow';
}

function krChangeColor(){
    var x = document.getElementById('jp');
    var y = document.getElementById('kr');
    x.style.backgroundColor = 'white';
    y.style.backgroundColor = 'azure';

    var div = document.getElementById('krcont');
    var div2 = document.getElementById('jpcont');
    div.style.display = "flex";
    div2.style.display = "none";
    div.className = 'divShow';
}