;(function () {
	// Dark mode toggle
	const darkToggle = document.getElementById("darkToggle")
	const body = document.body
	const icon = darkToggle.querySelector("i")
	if (localStorage.getItem("theme") === "dark") {
		body.classList.add("dark")
		icon.classList.remove("fa-moon")
		icon.classList.add("fa-sun")
	}
	darkToggle.addEventListener("click", () => {
		body.classList.toggle("dark")
		if (body.classList.contains("dark")) {
			icon.classList.remove("fa-moon")
			icon.classList.add("fa-sun")
			localStorage.setItem("theme", "dark")
		} else {
			icon.classList.remove("fa-sun")
			icon.classList.add("fa-moon")
			localStorage.setItem("theme", "light")
		}
	})

	// Mobile menu
	const toggleBtn = document.getElementById("menuToggle")
	const navLinks = document.getElementById("navLinks")
	toggleBtn.addEventListener("click", () => {
		if (navLinks.style.display === "flex") {
			navLinks.style.display = "none"
		} else {
			navLinks.style.display = "flex"
			navLinks.style.flexDirection = "column"
			navLinks.style.position = "absolute"
			navLinks.style.top = "70px"
			navLinks.style.left = "0"
			navLinks.style.width = "100%"
			navLinks.style.background = body.classList.contains("dark")
				? "#1e1e28"
				: "#fff"
			navLinks.style.padding = "20px"
			navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)"
		}
	})

	// Sample properties data
	const properties = [
		{
			id: 1,
			name: "Oceanview Villa",
			type: "Villa",
			bedrooms: 4,
			price: "$1,250,000",
			location: "Miami Beach",
			img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600",
			featured: true,
			description: "Panoramic ocean views, private pool, 4 ensuite bedrooms.",
		},
		{
			id: 2,
			name: "Modern Downtown Loft",
			type: "Apartment",
			bedrooms: 2,
			price: "$620,000",
			location: "Downtown",
			img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600",
			featured: true,
		},
		{
			id: 3,
			name: "Gated Community Estate",
			type: "Villa",
			bedrooms: 5,
			price: "$2,400,000",
			location: "Beverly Hills",
			img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
			featured: true,
		},
		{
			id: 4,
			name: "Beachfront Condo",
			type: "Condo",
			bedrooms: 3,
			price: "$890,000",
			location: "Malibu",
			img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600",
		},
		{
			id: 5,
			name: "Historic Brownstone",
			type: "Apartment",
			bedrooms: 3,
			price: "$1,850,000",
			location: "Brooklyn",
			img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
		},
	]

	// Populate carousel
	const track = document.getElementById("carouselTrack")
	const featured = properties.filter((p) => p.featured)
	track.innerHTML = featured
		.map(
			(p) => `
        <div class="carousel-card" onclick="openPropertyModal(${p.id})">
          <div class="carousel-img" style="background-image:url('${p.img}');"></div>
          <div class="carousel-info"><h3>${p.name}</h3><p>${p.location}</p><strong>${p.price}</strong></div>
        </div>
      `,
		)
		.join("")

	// Listings grid with filters
	const grid = document.getElementById("listingsGrid")
	function renderListings(
		filterType = "All Types",
		filterBed = "Any Beds",
		filterPrice = "Any Price",
	) {
		let filtered = properties
		if (filterType !== "All Types")
			filtered = filtered.filter((p) => p.type === filterType)
		if (filterBed !== "Any Beds") {
			const minBeds = parseInt(filterBed)
			filtered = filtered.filter((p) => p.bedrooms >= minBeds)
		}
		if (filterPrice !== "Any Price") {
			const priceVal = (p) => parseInt(p.price.replace(/[^0-9]/g, ""))
			if (filterPrice === "Under $500k")
				filtered = filtered.filter((p) => priceVal(p) < 500000)
			else if (filterPrice === "$500k-$1M")
				filtered = filtered.filter(
					(p) => priceVal(p) >= 500000 && priceVal(p) <= 1000000,
				)
			else if (filterPrice === "$1M+")
				filtered = filtered.filter((p) => priceVal(p) > 1000000)
		}
		grid.innerHTML = filtered
			.map(
				(p) => `
          <div class="property-card" onclick="openPropertyModal(${p.id})">
            <div class="property-img" style="background-image:url('${p.img}');"><span class="property-badge">${p.type}</span></div>
            <div class="property-info"><h3>${p.name}</h3><p>${p.location} · ${p.bedrooms} beds</p><div class="property-price">${p.price}</div></div>
          </div>
        `,
			)
			.join("")
	}
	renderListings()

	// Filter listeners
	document.getElementById("filterType").addEventListener("change", (e) => {
		renderListings(
			e.target.value,
			document.getElementById("filterBedrooms").value,
			document.getElementById("filterPrice").value,
		)
	})
	document.getElementById("filterBedrooms").addEventListener("change", (e) => {
		renderListings(
			document.getElementById("filterType").value,
			e.target.value,
			document.getElementById("filterPrice").value,
		)
	})
	document.getElementById("filterPrice").addEventListener("change", (e) => {
		renderListings(
			document.getElementById("filterType").value,
			document.getElementById("filterBedrooms").value,
			e.target.value,
		)
	})

	// Modal logic
	window.openPropertyModal = function (id) {
		const prop = properties.find((p) => p.id === id)
		if (!prop) return
		const modal = document.getElementById("propertyModal")
		const content = document.getElementById("modalContent")
		content.innerHTML = `
          <h2 style="font-size:2.2rem;">${prop.name}</h2>
          <p style="color:var(--accent-gold);">${prop.location}</p>
          <div class="gallery-thumbs">
            <img src="${prop.img}" onclick="this.requestFullscreen?.()"><img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200" onclick="this.requestFullscreen?.()"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200">
          </div>
          <p><strong>Price:</strong> ${prop.price}</p>
          <p>${prop.description || "Luxury property with premium finishes."}</p>
          <h4>Amenities:</h4><ul><li>Pool</li><li>Smart home</li><li>Concierge</li></ul>
          <h4>Nearby:</h4><p>Beach, fine dining, shopping</p>
          <button class="btn" onclick="alert('Booking request sent!')">Book / Inquire</button>
          <hr style="margin:20px 0;">
          <h4>Contact Agent</h4>
          <form onsubmit="alert('Message sent'); return false;"><input placeholder="Your name" style="width:100%; padding:12px; margin:8px 0; border-radius:40px; border:1px solid var(--border-light);"><textarea placeholder="Message" style="width:100%; padding:12px; border-radius:20px;"></textarea><button class="btn" type="submit">Send</button></form>
        `
		modal.style.display = "flex"
	}
	window.closeModal = function () {
		document.getElementById("propertyModal").style.display = "none"
	}
	window.onclick = (e) => {
		if (e.target.classList.contains("modal-overlay")) closeModal()
	}

	// Favorites demo
	document.getElementById("favoritesLink").addEventListener("click", (e) => {
		e.preventDefault()
		alert("Saved properties (demo)")
	})

	// Smooth scroll
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			const href = this.getAttribute("href")
			if (href === "#") return
			const target = document.querySelector(href)
			if (target) {
				e.preventDefault()
				target.scrollIntoView({ behavior: "smooth" })
			}
		})
	})
})()
