let str="";
let buttons=document.querySelectorAll("button");
let num=document.querySelectorAll(".num");
let cap=document.querySelector(".caption");
let res=document.querySelector(".result");
let el6=document.querySelector("#hiddenElement");
let blEl=document.querySelector("#blankElement");

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        
        if(button.innerText==="="){
            if(str.charAt(0)==="*" || str.charAt(0)==="/"){
                document.querySelector(".result").value=str+" : Input cannot start with * or /, please check and enter again!";
                res.style.color="red";
                res.style.fontSize="15px";
            } 
            else if(str.slice(-1)==="*" || str.slice(-1)==="/" || str.slice(-1)==="-" || str.slice(-1)==="+"){
                document.querySelector(".result").value=str+" : Input cannot end with *, /, - or +, please check and enter again!";
                res.style.color="red";
                res.style.fontSize="15px";
            }
            else{
            document.querySelector(".result").value=str;
            }
            str=eval(str);
            document.querySelector(".result").value=str;
            res.classList.add("resClass");
            cap.classList.add("capClass");
            el6.style.display="none";
            blEl.style.display="block";
            for (var i = 0; i < num.length; i++) {
                var currentNum = num[i];
                currentNum.style.color = "#181f32";
            }
        }

        else if(button.innerText==="RESET"){
            str="";
            document.querySelector(".result").value=str;
            res.classList.remove("resClass");
            cap.classList.remove("capClass");
            el6.style.display="block";
            blEl.style.display="none";
            res.style.fontSize = "3rem";
            res.style.color= "#ffffff";
            for (var i = 0; i < num.length; i++) {
                var currentNum = num[i];
                currentNum.style.color = "#3b4664";
            }
        }
        else if(button.innerText==="DEL"){
            str = str.slice(0, -1); 
            document.querySelector(".result").value=str;
        }
        else{
            str=str+button.innerText;
            document.querySelector(".result").value=str;

        }
    })})