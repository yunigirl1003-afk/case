const list = document.querySelector("#list");
const button=document.querySelector("button")

function onClick() {
    list.innerHTML=" "
    const genius=document.createElement("h3");
    let member=Math.floor(Math.random() * 5) +1
    if (member==1){
        genius.textContent="海獅";
    }
    else if (member==2){
        genius.textContent="Dong"
    }
    else if (member==3){
        genius.textContent="Chou"
    }
    else if (member==4){
        genius.textContent="趙雲"
    }
    else if (member==5){
        genius.textContent="燒雞"
    }
    list.appendChild(genius);
}
button.addEventListener("click",onClick);