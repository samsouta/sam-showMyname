const myName= "si thu min";
export function showMyName (x){
    return x;
}
export function showMyNameUI(y){
    const h1 =document.querySelector("h1");
    h1.innerText = y;
    h1.style.position = "fixed";
    h1.style.zIndex = 100000;
    h1.style.fontSize = 100+"px";
    h1.style.fontWeight = "bold ";
    h1.style.top = 0;
    h1.style.right = 0;
    h1.style.backgroundColor = "red";
    document.body.append(h1);

}
