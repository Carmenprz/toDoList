

let LIST = []
, id = 0; 


//date
const current_date = new Date(); 
const options = {month:"long", year:"numeric"}

document.getElementById("current_date").innerHTML = current_date.toLocaleDateString("en-EU", options);


//add to do function
const list = document.getElementById("list");
const input = document.getElementById("input"); 
const UNCHECK = "fa-circle"; 
const CHECK = "fa-check-circle"; 
const LINE_THROUGH = "linethrough"; 

function addToDo(toDo, id, done, trash){
    if(trash){return; } 

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    const item =    `<li class="item">
                        <i class="far ${DONE}" job="complete" id=${id}></i>
                        <p class="text ${LINE}"> ${toDo} </p>
                        <i class="fa fa-trash-o de" job="delete" id=${id}"></i>
                    </li>`;

    const position = "beforeend"; 

    list.insertAdjacentHTML(position, item);
}


//add an item to the list
document.getElementById("add").addEventListener("click", addToList); 

function addToList() {
        const toDo = input.value; 
        if(toDo){
            addToDo(toDo, id, false, false); 

            LIST.push({
                name : toDo, 
                id : id, 
                done : false, 
                trash: false
            });

            id++;
        }
        input.value = "";
};

// complete to do
function completeToDo(element) {
    element.classList.toggle(CHECK); 
    element.classList.toggle(UNCHECK); 
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true; 
}

//remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true; 
}

//target the items created dynamically 
list.addEventListener("click", function(event){
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    } else if(elementJob == "delete"){
        removeToDo(element);
    }
});