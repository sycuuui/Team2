var imgArray = new Array();
imgArray[0]="img/1.png";
imgArray[1]="img/2.png";
imgArray[2]="img/3.png";
imgArray[3]="img/4.png";

var count = 0;

function changeImage(){
        var objImg = document.getElementById("blossom");
        objImg.src=imgArray[count];
        count++;
        if(count>3){
            count=0;
        }
        setTimeout(changeImage,500);
        
}
        
        