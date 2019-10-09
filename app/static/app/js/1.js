//Json Object
var groceryList = [
    {
      Category: "fruit",
      Item: "apples",
      Type: "Honey Crisp",
      Brand: "Little cuties",
      Qty: 10
    },
    {
      Category: "beverage",
      Item: "milk",
      Type: "2%",
      Brand: "generic",
      Qty: "1 gallon"
    },
    { Category: "pasta", Item: "Pasta", Type: "Penne", Brand: "Barilla", Qty: 3 },
    {
      Category: "dessert",
      Item: "Gelatin dessert",
      Type: "Green",
      Brand: "Jello",
      Qty: 3
    },
    {
      Category: "dairy",
      Item: "Yogurt",
      Type: "Assorted flavors",
      Brand: "Chobani",
      Qty: 12
    },
    {
      Category: "pasta",
      Item: "Pasta",
      Type: "Linguini",
      Brand: "Barilla",
      Qty: 3
    },
    {
      Category: "beverage",
      Item: "Apple juice",
      Type: "regular",
      Brand: "Happy Farms",
      Qty: 2
    },
    {
      Category: "beverage",
      Item: "Vodka",
      Type: "Tangerine",
      Brand: "Grey Goose",
      Qty: 1
    }
  ];
  // loop through the array and get each item
  for (i = 0; i < groceryList.length; i++) {
    // Create variables for Json Values
    var Category = groceryList[i].Category;
    var Item = groceryList[i].Item;
    var Type = groceryList[i].Type;
    var Brand = groceryList[i].Brand;
    var Qty = groceryList[i].Qty;
    // Create HTML Output
    $("#groceryList").append(
      "<tr>" +
        '<td data-label="Category"><div class="' +
        Category +
        '"></div>' +
        Category +
        "</td>" +
        '<td data-label="Item">' +
        Item +
        "</td>" +
        '<td data-label="Type">' +
        Type +
        "</td>" +
        '<td data-label="Brand">' +
        Brand +
        "</td>" +
        '<td data-label="Quantity">' +
        Qty +
        "</td>" +
        "</tr>"
    );
  }
  