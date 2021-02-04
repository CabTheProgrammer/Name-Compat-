

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
    DispAns("88%");
    return (array2[0]+array2[1]);
    
}

function DispAns(aString)
{
    let ans = aString;
   document.getElementById("Answer").innerHTML=ans;
}