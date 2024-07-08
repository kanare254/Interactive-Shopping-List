const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const markPurchasedBtn = document.getElementById('markPurchasedBtn');
const clearListBtn = document.getElementById('clearListBtn');
const itemList = document.getElementById('itemList');

let shoppingList = [];

function renderList() {
    itemList.innerHTML = '';
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item.name;
        if (item.completed) {
            li.classList.add('completed');
        }
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        
        editBtn.addEventListener('click', () => {
            const newName = prompt('Edit item:', item.name);
            if (newName !== null && newName.trim() !== '') {
                item.name = newName;
                renderList();
            }
        });
        
        deleteBtn.addEventListener('click', () => {
            shoppingList.splice(index, 1);
            renderList();
        });

        li.addEventListener('click', () => {
            item.completed = !item.completed;
            renderList();
        });

        itemList.appendChild(li);
    });
    updateLocalStorage();
    }
    
    function addItem() {
        const newItemName = itemInput.value.trim();
        if (newItemName === '') {
            return;
        }
        const newItem = {
            name: newItemName,
            completed: false
        };
        shoppingList.push(newItem);
        renderList();
        itemInput.value = '';
    }
    
    function updateLocalStorage() {
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }
    
    function loadFromLocalStorage() {
        const storedList = localStorage.getItem('shoppingList');
        if (storedList) {
            shoppingList = JSON.parse(storedList);
            renderList();
        }
    }

    addItemBtn.addEventListener('click', addItem);

    markPurchasedBtn.addEventListener('click', () => {
        shoppingList.forEach(item => item.completed = true);
        renderList();
    });

    clearListBtn.addEventListener('click', () => {
        shoppingList = [];
        renderList();
    });

    loadFromLocalStorage();

