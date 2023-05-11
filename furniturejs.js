const furnitureItems = [
    { name: "dining table 1", price:  },
    { name: "sofa 1", price: 199.99 },
    { name: "sofa 2", price: 149.99 },
    { name: "Bed 1", price: 299.99 },
    { name: "Queen size bed", price: 299.99 },
  ];
  function displayFurnitureItems() {
    const list = document.getElementById("furniture-list");
    list.innerHTML = "";
    furnitureItems.forEach((item) => {
      const listItem = document.createElement("li");
      const nameSpan = document.createElement("span");
      nameSpan.innerText = item.name;
      listItem.appendChild(nameSpan);
      const priceSpan = document.createElement("span");
      priceSpan.innerText = "$" + item.price.toFixed(2);
      listItem.appendChild(priceSpan);
      list.appendChild(listItem);
    });
  }
  
  // Define a function to add a new furniture item to the array
  function addFurnitureItem() {
    const nameInput = document.getElementById("name-input");
    const priceInput = document.getElementById("price-input");
  
    // Validate the inputs
    if (!nameInput.value || !priceInput.value) {
      alert("Please enter a name and price for the new item.");
      return;
    }
    const price = parseFloat(priceInput.value);
  
    // Add the new item to the array
    furnitureItems.push({ name: nameInput.value, price: price });
  
    // Clear the inputs
    nameInput.value = "";
    priceInput.value = "";
  
    // Update the displayed list
    displayFurnitureItems();
  }
  
  // Call the display function when the page loads
  displayFurnitureItems();
  