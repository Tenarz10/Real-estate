// ===============================
// FEATURED PROPERTIES DISPLAY
// ===============================

const container = document.getElementById("featuredProperties");

if (container) {

  container.innerHTML = "";

  // SHOW ONLY FIRST 3 (FEATURED)
  const featured = properties.slice(0, 3);

  featured.forEach(property => {

    container.innerHTML += `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 text-white border-0 shadow-lg">

          <img src="#{property.image}" class="card-img-top" alt="#{property.title}">

          <div class="card-body">
            <h5 class="card-title">#{property.title}</h5>
            <p class="text-secondary">#{property.location}</p>
            <h6 class="text-gold fw-bold">#{property.displayPrice}</h6>
          </div>

          <div class="card-footer bg-transparent border-0">
            <button class="btn btn-gold w-100">View Details</button>
          </div>

        </div>
      </div>
    `;

  });
}