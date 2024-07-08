
const screen = document.querySelector(".screen");
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApretado = boton.textContent;

        if(boton.id === "c"){
            screen.textContent = "0";
            return;
        }

        if (boton.id === "delete"){
            if(screen.textContent.length === 1 || screen.textContent === "Error!"){
                screen.textContent = "0";
            }else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "equal"){
            try{
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Error!";
            }
            return;
        }

        if (screen.textContent=== "0" || screen.textContent === "Error!" ){
            screen.textContent= botonApretado;
        } else{
            screen.textContent += botonApretado;
        }
    })
})