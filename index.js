let div=document.createElement("div")
let btn1=document.createElement("button")
btn1.id="button1"
btn1.innerHTML="Change background color"

let btn2=document.createElement("button")
btn2.id="button2"
btn2.textContent="Hex color code"

div.append(btn1,btn2)
document.body.append(div)





btn1.addEventListener('click',MyButton)

let color=["blue","BlueViolet","Brown","BurlyWood","CadetBlue",
           "Chartreuse","Chocolate","Coral","CornflowerBlue","CornSilk",
           "Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray"]
let code=["#0000FF","#8A2BE2","#A52A2A","#DEB887","#5F9EA0",
          "#7FFF00","#D2691E","#FF7F50","#6495ED","#FFF8DC",
          "#DC143C","#00FFFF","#00008B","#008B8B","#B8860B","#A9A9A9"]
let G=0
let Co=0
function MyButton(){
   
   document.body.style.backgroundColor=color[G]
       btn1.innerText=color[G]
       btn2.innerHTML=code[Co]
     
       G++;
       Co++;
       if(G==color.length-1)
       {
       G=0;
       Co=0;
       }
}
