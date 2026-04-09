// const container = document.getElementById("allProperties");

// function displayProperties(list) {
//   container.innerHTML = "";

//   list.forEach(property => {
//     container.innerHTML += `...`;
//   });
// }

// // Load all properties
// displayProperties(properties);

// // Filter logic
// function filterProperties() {
//   const search = document.getElementById("searchInput").value.toLowerCase();
//   const price = document.getElementById("priceFilter").value;

//   const filtered = properties.filter(property => {
//     const matchesSearch = property.location.toLowerCase().includes(search);
//     const matchesPrice = price ? property.price <= price : true;
//     return matchesSearch && matchesPrice;
//   });

//   displayProperties(filtered);
// }