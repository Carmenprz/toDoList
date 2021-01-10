const list = document.getElementById("list");
const input = document.getElementById("input"); 

// const check = "check"; 
// const uncheck = "uncheck"; 
// const line_through = "linethrough"; 

let LIST = []
    , id = 0; 

const current_date = new Date(); 
const options = {month:"long", year:"numeric"}


document.getElementById("current_date").innerHTML = current_date.toLocaleDateString("en-EU", options);


function addToDo(toDo, id){
    const item =    `<li class="item">
                        <i class="one material-icons" id=${id}>radio_button_unchecked</i>
                        <p class="two text"> ${toDo} </p>
                        <span class="three material-icons" id=${id}">delete</span>
                     </li>`;

    const position = "beforeend"; 

    list.insertAdjacentHTML(position, item);
}


document.getElementById("add").addEventListener("click", addToList); 

function addToList() {
        const toDo = input.value; 
        if(toDo){
            addToDo(toDo); 
        }
        input.value = "";
};

