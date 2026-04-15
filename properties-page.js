// Naira formatter
function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}

// DISPLAY PROPERTIES
function displayProperties(list) {
  const container = document.getElementById("allProperties");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(property => {
    container.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 text-white border-0 shadow-lg">

          <img src="${property.image}" class="card-img-top">

          <div class="card-body">
            <h5>${property.title}</h5>
            <p class="text-secondary">${property.location}</p>
            <h6 class="text-gold">${formatNaira(property.price)}</h6>
          </div>

        </div>
      </div>
    `;
  });
}

// LOAD ALL PROPERTIES
displayProperties(properties);

// FILTER FUNCTION
function filterProperties() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const price = document.getElementById("priceFilter").value;
  const type = document.getElementById("typeFilter").value;

  const filtered = properties.filter(property => {

    const matchesSearch = property.location.toLowerCase().includes(search);

    const matchesPrice = price ? property.price <= price : true;

    const matchesType = type && type !== "Property Type"
      ? property.title.toLowerCase().includes(type.toLowerCase())
      : true;

    return matchesSearch && matchesPrice && matchesType;
  });

  displayProperties(filtered);
}
