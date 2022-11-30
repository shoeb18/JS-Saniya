

//? snack water and gun game //
    
   let co = confirm("Do you want to Play The Game?  \nsnack \nwater \nGun")
     let player = prompt("Enter snack, water, Gun")
     let cpuI = Math.floor(Math.random() * 3); 
     let cpu = ["snack", "water" , "gun"][cpuI]
    
    const match = (cpu, player)=>{
        if(cpu===player){
            return "nobody\".match is tie"
        }
        //for cpu win 
        else if(cpu ==="snack" && player==="water"){
            return"CPU"
        }
        else if(cpu ==="water" && player==="gun"){
            return"CPU"
        }
        else if(cpu ==="snack" && player==="gun"){
            return"CPU"
        }
        //for player win 
        else if(cpu ==="water" &&player==="snack"){
            return"player"
        }
        else if(cpu ==="gun" && player==="water"){
            return"player"
        }
        else if(cpu ==="snack" && player==="gun"){
            return"player" 
        }
        
        
    }
    
    let result = match(cpu, player)
document.write(`<br>CPU: ${cpu} <br>Player: ${player} <br>The winner is : ${result.toUpperCase()}`)
    
     
    