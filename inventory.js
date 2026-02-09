// Inventory page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // In a real app, this would filter the car inventory
        });
    });

    // Car card interaction
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.addEventListener('click', function() {
            // Get car details
            const brand = this.querySelector('.car-brand').textContent;
            const model = this.querySelector('.car-model').textContent;
            const year = this.querySelector('.car-year').textContent.replace('Year: ', '');
            const price = this.querySelector('.car-price').textContent;
            
            // Store in session storage for use in other pages
            sessionStorage.setItem('selectedCar', JSON.stringify({
                brand: brand,
                model: model,
                year: year,
                price: price
            }));
            
            // Navigate to credentials page
            window.location.href = 'pages/credentials.html';
        });
    });
});
