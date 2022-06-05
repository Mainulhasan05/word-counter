const word=document.getElementById("word")
const character=document.getElementById("character")
function calculate(){
    var text=document.getElementsByName("text")[0].value
    var msg=""
    msg=text
    msg.trim()
    const myArray = text.split(" ");
    
    var countSpace=0;
    
    for(let i =0; i<text.length; i++){
        if(text[i]==" " && text[i+1]==" "){
            countSpace++;
        }
    }
    var words=0;
    var characters=text.length-countSpace;
    if((myArray.length==1 && myArray[0]=="") || text[text.length-1]==" "){
        word.innerText=myArray.length-countSpace-1
    }
    else{
        word.innerText=myArray.length-countSpace
    }
    
    console.log(myArray)
    character.innerText=characters
    
}