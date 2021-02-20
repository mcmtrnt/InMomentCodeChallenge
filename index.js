
function showDetails(i) {
    arrow = document.getElementById("arrow" + i);
    details = document.getElementById("details" + i);

    allDetails = document.getElementsByClassName("details");
    for( item of allDetails ) {
        index = item.id.substr(-1);
        if( index == i ) {
            if( document.getElementById("arrow" + i).innerHTML == "↑" ) {
                arrow.innerHTML = "↓";
                details.style.display = "none";
            }
            else{
                arrow.innerHTML = "↑";
                details.style.display = "block";
            }
        }
        else {
            document.getElementById("arrow" + index).innerHTML = "↓";
            document.getElementById("details" + index).style.display = "none";
        }
    }

};
