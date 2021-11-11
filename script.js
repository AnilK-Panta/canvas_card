const btnDownload = document.getElementById("btnDownload");
const canvas= document.querySelector("#front-canvas")
const bcanvas= document.querySelector("#back-canvas")
const ctx = canvas.getContext('2d');
const bctx = bcanvas.getContext('2d');


const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const position = document.getElementById("position");
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2");
const add3 = document.getElementById("add3");
const add4 = document.getElementById("add4");


const image = new Image();
image.src = "./photo.png";
// var reader = new FileReader();
const bimage = new Image();
bimage.src = "./back.png";

const photo = new Image();
const photo1 = new Image();
// photo.src = "./photo.jpg";
var s=1.0;
var s1=1.0;
var a=0;
var a1=0;
var b=0;
var b1=0;
var c=4;
var c1=4;
var d=1;
var d1=1;
var e=2.6;
var e1=2.6;
var f=1;
var f1=1;
var Font=['Montserrat', 'Roboto', 'KoHo'];
var g=0;
let u=999;
let v= 332;


window.onload = function () {   
    
    DrawImage();
    DrawLogo(); 

    // DrawImage();
    // photo.onload = function () {
    //     DrawImage(); 
        
    // }
    
    
}
function DrawLogo(){
    bctx.drawImage(bimage, 0, 0, bcanvas.width, bcanvas.height);
    previewLogo();
    console.log("fuck")
    console.log(photo1.width +" "+photo1.height)

}

function DrawImage(){
    // var w= photo.width;
    // var h= photo.height;
    // var r,x,y;
        
    //     if(h>w){
    //         r=h/w;
    //         w=100;
    //         h=w*r;
    //         x=625-50;
    //         y=325-50*r;            
    //     }
    //     else{
    //         r=w/h;
    //         h=100;
    //         w=100*r;
    //         x=625-50*r;
    //         y=325-50;
    //     }
        

        
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    canvas.style.letterSpacing = c + 'px';
    ctx.font = e + 'rem Montserrat'
	ctx.fillStyle = '#FFFFFF'
    
	ctx.fillText(fname.value, 41, 80)
    ctx.fillText(lname.value, 41, 120)
    canvas.style.letterSpacing = d + 'px';
    ctx.font = 'normal small-caps ' + f + 'rem ' + Font[g];
    ctx.fillText(position.value, 41, 150);
    console.log(ctx.font);
    

    ctx.fillStyle = '#000000'
    ctx.fillText(add1.value, 41, 300);
    ctx.font = f - 0.3 + 'rem ' + Font[g];
    ctx.fillText(add2.value, 41, 320);
    ctx.fillText(add3.value, 41, 340);
    ctx.font = 'normal small-caps ' + f + 'rem ' + Font[g];
    ctx.fillText(add4.value, 41, 360);
    ctx.save();


    // setImage()
    // ctx.clip();
    
    // ctx.drawImage(photo, x=x+(w-w*s)/2-a,y= y+(h-h*s)/2+b, w=w*s, h=h*s);
    // ctx.beginPath();
    // ctx.arc(625, 325, 50, 0, Math.PI * 2);
    // ctx.clip();
    // ctx.closePath();
    // ctx.restore();
    // console.log(x)
    previewFile()
   
    
}





fname.addEventListener('input', function () {
	DrawImage()
})
lname.addEventListener('input', function () {
	DrawImage()  
})
add1.addEventListener('input', function () {
	DrawImage()  
})
add2.addEventListener('input', function () {
	DrawImage()  
})
add3.addEventListener('input', function () {
	DrawImage()  
})
add4.addEventListener('input', function () {
	DrawImage()  
})
position.addEventListener('input', function () {
	DrawImage()
})
plus.addEventListener('click', function (){
    
    
    if(s<4){
        s = s + 0.1;
    }
    DrawImage() 
    
})
minus.addEventListener('click', function (){
    
    if(s>1){
        s = s - 0.1;
    }
    DrawImage()
})

left.addEventListener('click', function(){
    a=a+1;
    DrawImage()
})
right.addEventListener('click', function(){
    a=(a-1);
    DrawImage()
})
up.addEventListener('click', function(){
    b=b-1;
    DrawImage()
})
down.addEventListener('click', function(){
    b=b+1;
    DrawImage()
})
spaceIn.addEventListener('click', function(){
    c=c-0.5;
    DrawImage()
})
spaceOut.addEventListener('click', function(){
    c=c+0.5;
    DrawImage()
})
spaceIn1.addEventListener('click', function(){
    d=d-0.5;
    DrawImage()
})
spaceOut1.addEventListener('click', function(){
    d=d+0.5;
    DrawImage()
})
letterSizeSmall.addEventListener('click', function(){
    e=e-0.1;
    DrawImage()
})
letterSizeBig.addEventListener('click', function(){
    e=e+0.1;
    DrawImage()
})
letterSizeSmall1.addEventListener('click', function(){
    f=f-0.05;
    DrawImage()
})
letterSizeBig1.addEventListener('click', function(){
    f=f+0.05;
    DrawImage()
})
font1.addEventListener('click', function(){
    g=0;
    DrawImage()
})
font2.addEventListener('click', function(){
    g=1;
    DrawImage()
})
font3.addEventListener('click', function(){
    g=2;
    DrawImage()
})






console.log(bcanvas.width/2 +" "+ bcanvas.height/2)





// function previewImage(input){
//     // var reader = new FileReader();
//     reader.onload = function(e){
//         document.getElementById("preview").setAttribute("src", e.target.result);
//     };
    
//     reader.readAsDataURL(input.files[0]);
// }

// lol.addEventListener('input', function(input){
    
    
//     reader.readAsDataURL(input.files[0]);

//     ctx.clip();
//     ctx.drawImage(Image, 200,200, 100, 100);
//     ctx.beginPath();
//     ctx.arc(250, 250, 50, 0, Math.PI * 2);
//     ctx.restore();
// })
function previewFile() {
const file = document.querySelector('input[type=file]').files[0];
const reader = new FileReader();

(reader).addEventListener("load", function () {
    

    // convert image file to base64 string
    photo.src = reader.result;
    // photo.crossOrigin= "Anonymous";
    
    var w= photo.width;
    var h= photo.height;
    var r,x,y;
    
    if(h>w){
        r=h/w;
        w=100;
        h=w*r;
        x=625-50;
        y=325-50*r;            
    }
    else{
        r=w/h;
        h=100;
        w=100*r;
        x=625-50*r;
        y=325-50;
    }

    ctx.beginPath();
    ctx.arc(x+65,y+50, 50, 0, Math.PI * 2);

    ctx.clip();
    
    ctx.drawImage(photo, x=x+(w-w*s)/2-a,y= y+(h-h*s)/2+b, w=w*s, h=h*s);
    // ctx.beginPath();
    // ctx.arc(x+25,y+25, 50, 0, Math.PI * 2);
    // console.log(u + " " + v)
    // ctx.clip();
    ctx.closePath();
    ctx.restore();
    console.log(x + " " + y + " " + w + " " +h + " " +r)
    u=x;
    v=y;
    
    

  });
if (file) {
    reader.readAsDataURL(file);
  }


}

function previewLogo() {
    const file1 = document.querySelector('#lol1[type=file]').files[0];
    const reader1 = new FileReader();
    
    (reader1).addEventListener("load", function () {
        
    
        // convert image file to base64 string
        photo1.src = reader1.result;
        // photo.crossOrigin= "Anonymous";
        
        var w= photo1.width;
        var h= photo1.height;
        var r,x,y;
        
        if(h>w){
            r=h/w;
            w=100;
            h=w*r;
            x=bcanvas.width/2-50;
            y=bcanvas.height/2-50*r;            
        }
        else{
            r=w/h;
            h=100;
            w=100*r;
            x=bcanvas.width/2-50*r;
            y=bcanvas.height/2-50;
        }
    
        bctx.beginPath();
        bctx.arc(bcanvas.width/2, bcanvas.height/2, 50, 0, Math.PI * 2);
    
        bctx.clip();
        
        bctx.drawImage(photo1, x=x+(w-w*s1)/2-a1,y= y+(h-h*s1)/2+b1, w=w*s1, h=h*s1);
        console.log(x + " "+ y)
        // ctx.beginPath();
        // ctx.arc(x+25,y+25, 50, 0, Math.PI * 2);
        // console.log(u + " " + v)
        // ctx.clip();
        bctx.closePath();
        bctx.restore();
        console.log(x + " " + y + " " + w + " " +h + " " +r)
        // u=x;
        // v=y;
        
        
    
    });
    if (file1) {
        reader1.readAsDataURL(file1);
    }
}



plus1.addEventListener('click', function (){
    
    
    if(s1<4){
        s1 = s1 + 0.1;
    }
    DrawLogo() 
    
})
minus1.addEventListener('click', function (){
    
    if(s1>1){
        s1 = s1 - 0.1;
    }
    DrawLogo()
})

left1.addEventListener('click', function(){
    a1=a1+1;
    DrawLogo()
})
right1.addEventListener('click', function(){
    a1=(a1-1);
    DrawLogo()
})
up1.addEventListener('click', function(){
    b1=b1-1;
    DrawLogo()
})
down1.addEventListener('click', function(){
    b1=b1+1;
    DrawLogo()
})




// function setImage(){
//     var Image = document.getElementById("preview");
//     ctx.clip();
//     ctx.drawImage(Image, 200,200, 100, 100);
//     ctx.beginPath();
//     ctx.arc(250, 250, 50, 0, Math.PI * 2);
//     ctx.restore();

// }

// function setImage(){
    // var Image = document.getElementById("preview");
    // ctx.clip();
    // ctx.drawImage(Image, 200,200, 100, 100);
    // ctx.beginPath();
    // ctx.arc(250, 250, 50, 0, Math.PI * 2);
    // ctx.restore();

// }
// previewFile()



// let draggable= false;

// canvas.onmousedown=(e)=>{
//     console.log('mouse down', e.x ,e.y)
//     if(e.x>=(u-50) && e.x<=(u+50)){
//         console.log("Inside")
//         console.log(u)
//         // if(e.y>=(v-50) && e.y<=(v+50)){
//         //     console.log("Inside")
//         // }
        
//     }
//     else{
//         console.log("Outside")
//         console.log(u)
//     }

// }
// canvas.onmouseup=(e)=>{
//     console.log('mouse up')
//     draggable = false;
// }
// canvas.onmouseout=(e)=>{
//     console.log('mouse out')

//     draggable = false;

// }



