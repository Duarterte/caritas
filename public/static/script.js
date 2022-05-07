var displayStateAdd = false;
var displayStateWhatch = false;
var count = 0;
var theBuilding = {"Nombre del Edificio":"", "Calle del Edificio":"", "Grupo Responsable Del Edificio":"","Beneficiado (persona que necesita ayuda, caso tenerla)":"","Comfirmar y Enviar":null}


window.onload = ()=>{

    var actualVal = document.getElementById("actualVal");
    var changingInp = document.getElementById("bdi");
    var faterEle = document.getElementById("edf");

    function addBuilding(e) {
        let anadirEdificios = document.getElementById("mdiv")
        let verEdificios = document.getElementById("mdiv2")
        console.log(e.target.innerHTML)
        if (e.target.innerHTML=="Añadir Edificios"){
            if (!displayStateAdd) {
                verEdificios.style.display = "none"
                anadirEdificios.style.display = "block"
                document.getElementById("bdi").focus()
                displayStateAdd = !displayStateAdd
                count = 0;
            }
        }
        if (e.target.innerHTML == "Ver Edificios") {
            if(displayStateAdd) {
                anadirEdificios.style.display = "none";
                verEdificios.style.display = "block";
                displayStateAdd = !displayStateAdd
                count = 0;
            }
        }
    }

    (function handleOnclickArr() {
        let theArrElemnts = document.getElementsByClassName("arr");
        for(let i of theArrElemnts) {
            i.onmouseover = function() {
                i.style.onmouseover = "#4CAF50"
                i.style.cursor = "pointer"
            }
            i.onmousedown = function() {
                i.style.backgroundColor = "#4885ed"
            }
            i.onmouseup = function() {
                i.style.backgroundColor = "#fff"
            }
        } 
    })()

    let handleOpt = false;
    let handleMouseDown = (e)=>{e.target.style.background="#4885ed"}
    let handleMouseUp = (e) => {e.target.style.background="rgb(239, 65, 53)"}
    let resTbody = document.createElement("tbody");
    document.getElementById("arrowr").addEventListener("click",()=>{
        theBuilding[Object.keys(theBuilding)[count]] = changingInp.value;

        if(count < 4) {
            count++;
            actualVal.innerHTML = Object.keys(theBuilding)[count]

            
            if(count == 4){

                for(let i = 0; i< Object.keys(theBuilding).length-1;i++){
                    let resTr = document.createElement("tr");
                    resTr.innerHTML = `
                    <td>${Object.keys(theBuilding)[i]}:</td>
                    <td>${Object.values(theBuilding)[i]}</td>
                    `
                    resTbody.appendChild(resTr);
                }
                faterEle.appendChild(resTbody);

                changingInp.setAttribute("type","button");
                changingInp.setAttribute("id","changb");
                changingInp.setAttribute("class","bed");
                changingInp.value = "Enviar"
                changingInp.addEventListener("mousedown", handleMouseDown)
                changingInp.addEventListener("mouseup", handleMouseUp)
                resTbody.remove();
                handleOpt = true;
            }
            else {
                if(handleOpt){
                    changingInp = document.getElementById("changb")
                    changingInp.style.backgroundColor="white !important"
                    changingInp.setAttribute("type","text");
                    changingInp.setAttribute("id","bdi");
                    changingInp.setAttribute("class","bdi");
                    changingInp.value = "";
                    resTbody.remove();
                    changingInp.removeEventListener("mousedown",handleMouseDown)
                    changingInp.removeEventListener("mouseup",handleMouseUp)
                    handleOpt = false;
                }
                changingInp.focus();
            }
        }
    })
    document.getElementById("arrowl").addEventListener("click",()=>{
        if(count > 0) {
            count --;
            actualVal.innerHTML = Object.keys(theBuilding)[count]
            if(handleOpt){
                changingInp = document.getElementById("changb")
                changingInp.style.backgroundColor="white !important"
                changingInp.setAttribute("type","text");
                changingInp.setAttribute("id","bdi");
                changingInp.setAttribute("class","bdi");
                changingInp.value = "";
                resTbody.remove();
                changingInp.removeEventListener("mousedown",handleMouseDown)
                changingInp.removeEventListener("mouseup",handleMouseUp)
                handleOpt = false;
            }
            changingInp.focus();
        }
    })


    document.getElementById("bed2").onclick = addBuilding
    document.getElementById("bed1").onclick = addBuilding
}