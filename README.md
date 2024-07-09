In my HTML structure, I've set up an input field (itemInput) where users can enter new items, along with buttons (addItemBtn and clearListBtn) to add items to the list and clear the entire list, respectively. The list itself is displayed within a container (itemList).

For styling, I've included a CSS file that provides basic styling to enhance the visual appeal and usability of the app.

In JavaScript, I've created an array called shoppingList to store items, each with properties name and completed.

I've defined several functions:

renderList(): This function updates the HTML to reflect the current state of shoppingList, clearing and re-rendering the list based on its contents.
addItem(): When the user clicks the "Add" button (addItemBtn), this function adds a new item entered into itemInput to shoppingList and updates the UI to display it.
toggleCompleted(index): When a user clicks on a list item, this function toggles the completed status of that item in shoppingList and updates the UI to visually indicate whether the item has been completed.
I've also attached event listeners to the buttons:

The "Add" button (addItemBtn) triggers addItem() to add a new item.
The "Clear List" button (clearListBtn) clears all items from shoppingList.
Upon loading the page, I call renderList() to initialize the UI with any existing items that may be in shoppingList.

For bonus features:

To allow editing of existing items, I extended the functionality to include an edit feature where users can modify the name of an item directly within the list.
To ensure persistence across page reloads, I used localStorage to save shoppingList. This way, the list would be saved locally and retrieved when the page is refreshed, ensuring the user's data remains intact.
These additions should further enhance the functionality and usability of the shopping list application.