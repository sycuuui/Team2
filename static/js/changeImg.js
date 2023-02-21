var imgArray = new Array();
imgArray[0]="https://angelplayer.tistory.com/172";
imgArray[1]="https://ifh.cc/g/dQPHnb.png";
imgArray[2]="https://ifh.cc/g/on5993.png";
imgArray[3]="https://ifh.cc/g/XqarZK.png";

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
        
        