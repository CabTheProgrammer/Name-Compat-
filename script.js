function letterCount(word,letter){ //returns the number of times a letter repeats in a word
    word = word.trim();
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    let count = 0;
    for(let i = 0;i<word.length;i++)
    {
        if(word[i]==letter)
            count= count+1;
    }
    return count;
}



function compute(){

    //rewrites the entire webpage
    //document.write("<div class=\"loader\"></div>");

    let hisName = document.getElementById("mfirstname").value;
    let herName = document.getElementById("ffirstname").value;



    //In case they are blank
    if(hisName == "")
      hisName = "David";

    if(herName == "")
     herName = "Veronica";

     let joinName = hisName.concat(herName);
     joinName = joinName.trim();

    // console.log("His name is "+hisName);
    // console.log(test(hisName,"d"));
    masterCount(joinName);
}


function masterCount(name) //returns an array of letters in a word and their count in a word
{
    name = name.toLowerCase();
    let Array = [];
    let smolMap = new Map(); //Will hold one letter and its count
    console.log("Length: "+name.length);

    for(let i = 0;i<name.length;i++)
    {   
        // if (Array.includes(name.charAt(i))=="false")
        //     continue;
        //Array.push(name.charAt(i));
        
        if(smolMap.has(name.charAt(i))==true)
            continue;

        let count = letterCount(name,name.charAt(i));
        smolMap.set(name.charAt(i),count);
    }
    
    // for(let[key,value] of smolMap){ //prints out the keys and assoc. values of Map object
    //     console.log(key+"="+value);
    // }

    for(let value of smolMap.values()) 
        Array.push(value);

    console.log(arrayAdd(...Array));
}

function arrayAdd(...array){//Does that weird calculation to return the value of the compatability
    console.log("Im here");
    let Array = [...array];
    let array2 = [];
    

    console.log("Array before calculation "+ Array);

    while(Array.length>2)
    {
        while(Array.length>0)
        {   if(Array.length==1)
                array2.push(Array.pop());
            else
                array2.push((Array.shift()+Array.pop()))
        }
        console.log("Array after calculation is: "+ array2);
        arrayAdd(...array2);
    }
    load(fixUp(Array[0],Array[1]));
    //DispAns();

    //return (array2[0]+array2[1]);
    
}

function DispAns(aString)
{
    let ans = aString;
   document.getElementById("Answer").innerHTML=ans;
 
}

function fixUp(aString1,aString2){ //This function will take the output from the calculation and reformat it into a "percentage"
console.log("First String(function): "+ aString1);  
console.log("Second String: "+ aString2);  
let Ans = "";
let message = "";

    // if(aString1== undefined || aString2== undefined)
    //  {   Ans = "0%";
    //     console.log("Hey youd");
    //     return Ans;
    // }

    if(aString2>9)
    {
        aString2 = aString2%10;
        aString1 = aString1+(Math.round((aString2/10))); 
        Ans=aString1.toString() +aString2.toString + "%";
        
        if(aString1 > 9 || aString2>9)
            Ans = "100%"
        return Ans;
    }
else
    {
        aString1 = aString1.toString();
        aString2 = aString2.toString();
        Ans = aString1.concat(aString2,"%");
    }
    
    return Ans;
}




//Copied code
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


  function load(onn){
    console.log("The value for onn is: "+onn);

    let x = document.createElement("div");
    x.classList.add("loader");

    let style= document.createElement("style");
    // This is the CSS styling for the loading and quote screens
    style.innerHTML = `                                
    #box{
        display:grid;
        grid-auto-flow: row;
        justify-content:center;
        align-items:center;

        width:50%;
        background-color: #844fff; 
    }
    
    body{
        font-family:'Noto Sans JP',sans-serif;
        display:flex;
        justify-content: center;
    }

    @media (max-width:600px){
        html{
            font-size:large;
        }
    
        #box{
            padding-top:25%;
            width:100%;
        }
        
        #BUTTON{
            margin:20%;
            height:15%;
            font-size:1em;
        }
    }

    `;
    
        console.log("I am summoned");
        //Empties the element called "box"
        document.getElementById("box").innerHTML="";
        
        //Adds the loading icon
        document.getElementById("box").appendChild(x);
        
        //Styling
        document.head.appendChild(style);        
         

        
        setTimeout(function(){displayANS(onn,kashaQuotes(onn));}, 2500); //Tells how long for the loading animation was 2500
    }

    
    function displayANS(anum,quote)
    {
       let bttn = document.createElement("button");
       bttn.innerHTML = "Return";
       bttn.id = "BUTTON";
       bttn.onclick = function(){location.reload()};

       let Ans = document.createElement("div");
       let Quote = document.createElement("div");
       Quote.classList.add("Quote");
       Ans.classList.add("Answer");
      
        
       let box = document.getElementById("box");
       box.removeChild(box.childNodes[0]);
       

       Ans.innerHTML = anum;
       Quote.innerHTML ="<br>"+quote;

       box.appendChild(Ans);
       box.appendChild(Quote);
       box.appendChild(bttn); 
    }

    function kashaQuotes(aValue){ //returns a random quote based on value passed. 1 is good quote, 2 is bad
    let messageGood = ["\“Love takes off masks that we fear we cannot live without and know we cannot live within.\”","\“The most important thing in life is to learn how to give out love, and to let it come in.\”",+
                        "\“We are shaped and fashioned by what we love.\”"];

    let messageBad = ["Love is a promise delivered already broken","My wife and I were happy for twenty years. Then we met.","A kiss may ruin a human life"];
    
    aValue=aValue.slice(0,2);
    aValue=parseInt(aValue);
     //BUGFIX! The reason why the wrong quote was printing was because the percentage sign was included in the comparison
    if(aValue>50)
            return messageGood[getRandomInt(0,2)];
        else
            return messageBad[getRandomInt(0,2)];
    }
   