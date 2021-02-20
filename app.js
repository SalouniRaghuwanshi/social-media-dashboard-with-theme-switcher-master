const d=document.getElementById("dark-mode");
d.addEventListener("click",Darkmode);
function Darkmode(){
    console.log("checking");
    if(d.checked){
        console.log("dark on");
        DarkmodeOn();
    }
    else
    {
        console.log("dark off");
        DarkmodeOf();
    }
}
function  DarkmodeOn()
{
    document.body.classList.add("dark-mode1");
}
function DarkmodeOf(){
    document.body.classList.remove("dark-mode1");
}