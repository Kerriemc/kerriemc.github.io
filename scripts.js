document.addEventListener('DOMContentLoaded', function() {
    // Sample data for listings
    const listings = [
        {
            id: 1,
            title: "Waterfront Colonial in Mattapoisett",
            address: "123 Harbor View Drive, Mattapoisett, MA 02739",
            price: "$869,000",
            image: "images/house1.jpeg",
            status: "For Sale",
            bedrooms: 4,
            bathrooms: 2.5,
            sqft: 2800
        },
        {
            id: 2,
            title: "Historic Home in Marion",
            address: "45 Village Way, Marion, MA 02738",
            price: "$1,150,000",
            image: "images/house2.jpeg",
            status: "For Sale",
            bedrooms: 5,
            bathrooms: 3,
            sqft: 3500
        },
        {
            id: 3,
            title: "Charming Cape in Fairhaven",
            address: "78 Sconticut Neck Road, Fairhaven, MA 02719",
            price: "$525,000",
            image: "images/house3.jpeg",
            status: "For Sale",
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1800
        },
        {
            id: 4,
            title: "Farmhouse on Acreage in Rochester",
            address: "210 Hartley Road, Rochester, MA 02770",
            price: "$675,000",
            image: "images/house4.jpeg",
            status: "For Sale",
            bedrooms: 4,
            bathrooms: 2,
            sqft: 2400
        },
        {
            id: 5,
            title: "Condo with Water Views in New Bedford",
            address: "56 Union Street, New Bedford, MA 02740",
            price: "$499,000",
            image: "images/house5.jpeg",
            status: "For Sale",
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1500
        },
        {
            id: 6,
            title: "Renovated Victorian in Wareham",
            address: "127 Main Street, Wareham, MA 02571",
            price: "$589,000",
            image: "images/house6.jpeg",
            status: "For Sale",
            bedrooms: 4,
            bathrooms: 2.5,
            sqft: 2600
        }
    ];

    // Sample data for testimonials
    const testimonials = [
        {
            id: 1,
            text: "Kerrie was absolutely amazing throughout our entire home buying process. As first-time buyers, we had countless questions, and Kerrie was always available with clear answers and guidance. She knows the SouthCoast market inside and out!",
            name: "Sarah & Michael Johnson",
            role: "First-time Homebuyers in Mattapoisett",
            image: "https://placehold.co/60x60"
        },
        {
            id: 2,
            text: "When it came time to sell our family home of 30 years in Marion, we knew we needed someone special. Kerrie handled everything with such professionalism and compassion. She got us $50k over asking price and made the transition so much easier.",
            name: "Robert Thompson",
            role: "Home Seller in Marion",
            image: "https://placehold.co/60x60"
        },
        {
            id: 3,
            text: "Working with Kerrie to find our forever home in Dartmouth was the best decision we made. Her negotiation skills are unmatched, and she truly listened to our needs. She found us the perfect waterfront property that checked all our boxes!",
            name: "Jennifer & David Wilson",
            role: "Homebuyers in Dartmouth",
            image: "https://placehold.co/60x60"
        },
        {
            id: 4,
            text: "Kerrie helped me with my investment property search in New Bedford and her knowledge of potential rental returns in different neighborhoods was invaluable. She's detail-oriented, responsive, and genuinely cares about her clients' success.",
            name: "Mark Richards",
            role: "Property Investor in New Bedford",
            image: "https://placehold.co/60x60"
        },
        {
            id: 5,
            text: "After months of searching on our own, we contacted Kerrie and found our dream home in Fairhaven within weeks. Her expertise of the local market and connections with other agents made all the difference in this competitive market.",
            name: "Lisa & Paul Martinez",
            role: "Homebuyers in Fairhaven",
            image: "https://placehold.co/60x60"
        },
        {
            id: 6,
            text: "As an out-of-state buyer looking for a vacation home in Wareham, Kerrie's virtual tours and local insights were priceless. She handled everything when we couldn't be there in person and made the process seamless.",
            name: "Thomas Bradley",
            role: "Second Home Buyer in Wareham",
            image: "https://placehold.co/60x60"
        }
    ];

    // Populate listings
    const listingsContainer = document.getElementById('listings-container');
    
    if (listingsContainer) {
        listings.forEach(listing => {
            const listingCard = document.createElement('div');
            listingCard.className = 'col-lg-4 col-md-6';
            listingCard.innerHTML = `
                <div class="property-card">
                    <div class="property-img">
                        <img src="${listing.image}" alt="${listing.title}">
                        <div class="property-status">${listing.status}</div>
                        <div class="property-price">${listing.price}</div>
                    </div>
                    <div class="property-info">
                        <h3 class="property-title">${listing.title}</h3>
                        <p class="property-address"><i class="fas fa-map-marker-alt"></i> ${listing.address}</p>
                        <div class="property-features">
                            <div class="feature">
                                <i class="fas fa-bed"></i>
                                <span>${listing.bedrooms} Beds</span>
                            </div>
                            <div class="feature">
                                <i class="fas fa-bath"></i>
                                <span>${listing.bathrooms} Baths</span>
                            </div>
                            <div class="feature">
                                <i class="fas fa-ruler-combined"></i>
                                <span>${listing.sqft} sqft</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            listingsContainer.appendChild(listingCard);
        });
    }

    // Populate testimonials
    const testimonialContainer = document.getElementById('testimonial-container');
    
    if (testimonialContainer) {
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.innerHTML = `
                <p>${testimonial.text}</p>
                <div class="testimonial-client">
                    <div class="client-info">
                        <h4>${testimonial.name}</h4>
                        <span>${testimonial.role}</span>
                    </div>
                </div>
            `;
            testimonialContainer.appendChild(testimonialCard);
        });
    }
        // removed image from the above output
                    // <div class="client-img">
                    //     <img src="${testimonial.image}" alt="${testimonial.name}">
                    // </div> 

    // Testimonial slider functionality
    let currentSlide = 0;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const totalSlides = testimonialCards.length;
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    // Calculate how many testimonials to show per slide based on screen width
    function getSlidesPerView() {
        if (window.innerWidth >= 992) {
            return 3; // Desktop: 3 testimonials per slide
        } else if (window.innerWidth >= 768) {
            return 2; // Tablet: 2 testimonials per slide
        } else {
            return 1; // Mobile: 1 testimonial per slide
        }
    }
    
    // Function to update slider position
    function updateSlider() {
        const slidesPerView = getSlidesPerView();
        const maxSlides = totalSlides - slidesPerView;
        
        // Prevent sliding past the last testimonial
        if (currentSlide > maxSlides) {
            currentSlide = maxSlides;
        }
        
        if (currentSlide < 0) {
            currentSlide = 0;
        }
        
        // Calculate percentage to translate
        const cardWidth = 100 / slidesPerView;
        const translateValue = -currentSlide * cardWidth;
        
        if (testimonialContainer) {
            testimonialContainer.style.transform = `translateX(${translateValue}%)`;
        }
    }
    
    // Add event listeners for slider buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide--;
            updateSlider();
        });
        
        nextBtn.addEventListener('click', function() {
            currentSlide++;
            updateSlider();
        });
    }
    
    // Update slider on window resize
    window.addEventListener('resize', updateSlider);
    
    // Initial call to position slider correctly
    updateSlider();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.querySelector('textarea[name="message"]').value;
            
            // In a real implementation, you would send this data to a server
            console.log({
                name,
                email,
                subject,
                message
            });
            
            // Show success message
            alert(`Thank you, ${name}! Your message has been received. Kerrie will contact you shortly.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        backToTopButton.style.display = 'none'; // Hide initially
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 50) {
                navbar.style.padding = '10px 0';
            } else {
                navbar.style.padding = '15px 0';
            }
        });
    }
});