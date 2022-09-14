//creating dom variables

const rateOne  = document.querySelectorAll(".rate-one")
const rateTwo  = document.querySelectorAll(".rate-two")
const rateThree  = document.querySelectorAll(".rate-three")
const rateFour  = document.querySelectorAll(".rate-four")
const button = document.querySelector(".button")

let clickValue = {};


function createRating(rate, position) {
    for(let x= 0; x < rate.length; x++){
        rate[x].value = x+1;
        ["mouseover", "mouseout", "click"].forEach(function(e){
            rate[x].addEventListener(e, myRating)
        })
    }
    
    function myRating(e){
        let type = e.type
        let value  = this.value
    
        rate.forEach(function(ele,index){
            if(type === "click"){
                if(index < value && value === 1){
                    setColor(ele,["red"])
                    removeColor(ele,["orange","lime","green"])
                    clickValue[position] = value||0
                }
                else if(index < value && value <=3){
                    setColor(ele,["orange"])
                    removeColor(ele,["red","lime","green"])
                    clickValue[position] = value||0
                }
                else if(index < value && value <=4){
                    setColor(ele,["lime"])
                    removeColor(ele,["red","orange","green"])
                    clickValue[position]=  value||0
                }
                else if(index < value && value <=5){
                    setColor(ele,["green"])
                    removeColor(ele,["red","lime","orange"])
                    clickValue[position] = value||0
                }
                
                else{
                    removeColor(ele,["red","lime","green", "orange"])
                }
                
            }
            
        })        
    }
    
    function setColor(ele, color=[]){
        color.forEach((item)=>{
            ele.classList.add(item)
        })
    }
    function removeColor(ele, color=[]){
        color.forEach((item)=>{
            ele.classList.remove(item)
        })
    }
   
}

//calling the function

button.addEventListener("click", function(){
    console.log(clickValue)
    })

createRating(rateOne,"first")
createRating(rateTwo,"second")
createRating(rateThree,"third")
createRating(rateFour,"fourth")


