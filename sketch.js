var bg="sunrise1.png"

function preload(){
    
    backgroundImage=loadImage(bg)
}

function setup(){
    createCanvas(1200,800)
    bgImg()
    
}

function draw(){
    

    if(backgroundImage) 
    background(backgroundImage);
    

    
    
} 

async function bgImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    var responseJSON= await response.json()
    //console.log(responseJSON)

    hour=responseJSON.datetime.slice(11,13)

    if(hour>=04&&hour<06){
        
        bg="sunrise1.png"
    }
    else if(hour>=06&&hour<08){
        
        bg="sunrise2.png"
    }
    else if(hour>=08&&hour<10){
        
        bg="sunrise3.png"
    }
    else if(hour>=10&&hour<12){
         
        bg="sunri0se4.png"
    }
    else if(hour>=12&&hour<14){
         
        bg="sunrise5.png"
    }
    else if(hour>=14&&hour<16){
         
        bg="sunrise6.png"
    }
    else if(hour>=16&&hour<18){
        // 
        bg="sunset7.png"
    }
    else if(hour>=18&&hour<20){
         
        bg="sunset8.png"
    }
    else if(hour>=20&&hour<22){
         
        bg="sunset9.png"
    }
    else if(hour>=22&&hour==00){
         
        bg="sunset10.png"
    }
    else if(hour>=00&&hour<02){
         
        bg="sunset11.png"
    }
    else{
         
        bg="sunset12.png"
    }
    backgroundImage=loadImage(bg)
}
