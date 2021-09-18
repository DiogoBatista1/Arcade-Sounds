
            function play(string){
                var audio = document.getElementById(string);
                audio.play();

                switch(string){
                    case "q":
                    case "Q":
                        displayElement("Retro game notification!");
                    break;
                    case "w": 
                    case "W":
                        displayElement("Arcade game opener!");
                    break;
                    case "e": 
                    case "E":
                        displayElement("Arcade game complete or approved mision");
                    break;
                    case "s":
                    case "S":
                        displayElement("Arcade retro background");
                    break;
                    case "a":
                    case "A":
                        displayElement("Arcade bonus!");
                    break;
                    case "d":
                    case "D":
                        displayElement("Arcade changing tab");
                    break;
                    case "z":
                    case "Z":
                        displayElement("Failure arcade arlet notification!");
                    break;
                    case "x":
                    case "X":
                        displayElement("Arcade fast game over!!");
                    break;
                    case "c": 
                    case "C":
                        displayElement("Arcade retro game over!!!");
                    break;
                }
            }

            let displayElement = (str) => {
                return document.getElementById('display').innerText = str;
            };

            window.document.onkeyup = function (event){
                let keystrike = event.key;
                switch(keystrike){
                    case "q":
                    case "Q":
                        play("Q")
                        displayElement("Retro game notification!");
                    break;
                    case "w": 
                    case "W":
                        play("W")
                        displayElement("Arcade game opener!");
                    break;
                    case "e": 
                    case "E":
                        play("E")
                        displayElement("Arcade game complete or approved mision");
                    break;
                    case "s":
                    case "S":
                        play("S")
                        displayElement("Arcade retro background");
                    break;
                    case "a":
                    case "A":
                        play("A")
                        displayElement("Arcade bonus!");
                    break;
                    case "d":
                    case "D":
                        play("D")
                        displayElement("Arcade changing tab");
                    break;
                    case "z":
                    case "Z":
                        play("Z")
                        displayElement("Failure arcade arlet notification!");
                    break;
                    case "x":
                    case "X":
                        play("X")
                        displayElement("Arcade fast game over!!");
                    break;
                    case "c": 
                    case "C":
                        play("C")
                        displayElement("Arcade retro game over!!!");
                    break;
                }
            }
