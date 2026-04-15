// Naira formatter
function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}

// FEATURED PROPERTIES
const featuredContainer = document.getElementById("featuredProperties");

if (featuredContainer) {

  featuredContainer.innerHTML = "";

  const featured = properties.slice(0, 3);

  featured.forEach(property => {
    featuredContainer.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 text-white border-0 shadow-lg">

          <img src="${property.image}" class="card-img-top" alt="${property.title}">

          <div class="card-body">
            <h5 class="card-title">${property.title}</h5>
            <p class="text-secondary">${property.location}</p>
            <h6 class="text-gold fw-bold">${formatNaira(property.price)}</h6>
          </div>

          <div class="card-footer bg-transparent border-0">
            <button class="btn btn-gold w-100">View Details</button>
          </div>

        </div>
      </div>
    `;
  });

}

// PREVENT FORM RELOAD
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
