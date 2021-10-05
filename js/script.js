
function newItem(){

//javascript
//1. Adding a new item to the list of items:
   // let li = document.createElement("li");
   // let inputValue = document.getElementById("input").value;
   // let text = document.createTextNode(inputValue);
   // li.appendChild(text);
   let li = $('<li></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     // let list = document.querySelector('#list');
     // list.appendChild(li);
     let list = $('#list');
     list.append(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		// li.classList.toggle("strike");
    li.toggleClass('strike');
 	}

 	// li.addEventListener("dblclick",crossOut);
  li.on('dblclick', crossOut);

 //3(i). Adding the delete button "X":
  //  let crossOutButton = document.createElement("crossOutButton");
 	// crossOutButton.appendChild(document.createTextNode("X"));
 	// li.appendChild(crossOutButton);
  let deleteButton = $('<deleteButton>X</deleteButton>');
  li.append(deleteButton);

 	// crossOutButton.addEventListener("click", deleteListItem);
  deleteButton.on('click', deleteListItem);

 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		// li.classList.add("delete")
    li.addClass('delete');
 	}
 // 4. Reordering the items:
   $('#list').sortable();

}
