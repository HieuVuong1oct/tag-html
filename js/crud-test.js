function createItem(){
     const newItemValue = document.getElementById('newItem').value;

     if (newItemValue.trim() === '') {
        alert('Please enter a valid item.');
        return;
    }
    
     const itemList = document.getElementById('itemList');

     const listItem =document.createElement('li');
     listItem.className = 'item';

     const itemText = document.createElement('span');
     itemText.textContent = newItemValue;

     const editButton = document.createElement('button');
     editButton.textContent = 'Edit';
     editButton.onclick = function(){
        editItem(listItem, itemText);
     };
     const deleteButton = document.createElement('button');
     deleteButton.textContent = 'Delete';
     deleteButton.onclick = function(){
        deleteItem(listItem);
     };

     listItem.appendChild(itemText);
     listItem.appendChild(editButton);
     listItem.appendChild(deleteButton);
     itemList.appendChild(listItem);

     document.getElementById('newItem').value = '';

}

function editItem(listItem, itemText){
    const newValue = prompt('Sửa : ' , itemText.textContent);
    if (newValue !== null && newValue.trim() !== ''){
        itemText.textContent = newValue;
    }
}

function deleteItem(listItem){
    if(confirm('Bạn có muốn xóa?')){
        listItem.remove();
    }
}