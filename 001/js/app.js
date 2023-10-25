let lienzo = document.querySelector(".lienzo");
let buttonGrid = document.getElementById("submit__grid");
let buttonClearGrid = document.getElementById("clear__grid");
let gridWidth = document.getElementById("width__range");
let gridHeight = document.getElementById("height__range");
let buttonColor = document.getElementById("color__input");
let buttonErase = document.getElementById("erase__btn");
let buttonPaint = document.getElementById("paint__btn");
let valueWidth = document.getElementById("width__value");
let valueHeight = document.getElementById("height__value");


let events = { 
  mouse:{ 
    down:"mousedown",
    move:"mousemove",
    up:"mouseup", 
  },
  touch:{ 
    down:"touchstart",
    mobe:"touchmove",
    up:"touchend",
  },
};

let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => { 
  try{ 
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) { 
    deviceType ="mouse";
    return false;
  }
};

isTouchDevice();

buttonGrid.addEventListener("click", () =>{ 

  lienzo.innerHTML = "";
  let count = 0;
  for (let i = 0; i < gridHeight.value; i++) {
    count +=2;
    let container = document.createElement("div");
    container.classList.add("gridRow");

    for (let j = 0; j < gridWidth.value; j++) {
      count +=2;
      let col = document.createElement("div");
      col.classList.add("gridCol");
      col.setAttribute("id", `gridCol${count}`);
      col.addEventListener(events[deviceType].down, () =>{ 
        draw = true;
        if (erase) {
          col.style.backgroundColor="transparent";
        } else{ 
          col.style.backgroundColor= buttonColor.value;
        } 
      });
      col.addEventListener(events[deviceType].move, (e) =>{ 
        let elementId = document.elementFromPoint(
          !isTouchDevice() ? e.clientX : e.touches[0].clientX,
          !isTouchDevice() ? e.clientY : e.touches[0].clientY, 
        ).id;
        checker(elementId); 
      });
      col.addEventListener(events[deviceType].up, () =>{ 
          draw = false;
      }); 
      container.appendChild(col); // ********* <--
    }

    lienzo.appendChild(container);
   }
});

function checker(elementId) {
  let gridColums = document.querySelectorAll(".gridCol");
  gridColums.forEach((element) => { 
    if (elementId == element.id) {
      if (draw && !erase) {
        element.style.backgroundColor = buttonColor.value;
      }else if( draw && erase) { 
        element.style.backgroundColor =" transparent"; 
      } 
    }
  });
}

buttonClearGrid.addEventListener("click" ,()  => {  
  lienzo.innerHTML = ""; 
});
buttonErase.addEventListener("click",() =>{ 
  erase = true;
});

buttonPaint.addEventListener("click",() =>{ 
  erase = false;
});

gridWidth.addEventListener("input", () =>{ 
  valueWidth.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
});

gridHeight.addEventListener("input",() =>{ 
  valueHeight.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;  
});

window.onload = () =>{  
  gridHeight.value = 0;
  gridWidth.value = 0;
};





