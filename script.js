document.addEventListener('DOMContentLoaded', function() {
    // Check if we are on the home page (index.html)
    // The search functionality is most relevant here as recommendations are displayed.
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const clearButton = document.getElementById('clearButton');
        const recommendationItems = document.querySelectorAll('.recommendation-item');
        let noResultsMessage = document.getElementById('noResultsMessage');

        // Create the no results message element if it doesn't exist
        if (!noResultsMessage) {
            noResultsMessage = document.createElement('p');
            noResultsMessage.id = 'noResultsMessage';
            noResultsMessage.textContent = 'No recommendations found for your search.';
            document.querySelector('main').appendChild(noResultsMessage);
        }

        // Function to filter recommendations
        function filterRecommendations() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            let resultsFound = false;

            recommendationItems.forEach(item => {
                const itemText = item.textContent.toLowerCase();
                if (itemText.includes(searchTerm)) {
                    item.classList.remove('hidden'); // Show item
                    resultsFound = true;
                } else {
                    item.classList.add('hidden'); // Hide item
                }
            });

            // Show/hide no results message
            if (resultsFound) {
                noResultsMessage.style.display = 'none';
            } else {
                noResultsMessage.style.display = 'block';
            }
        }

        // Event Listeners
        if (searchButton) {
            searchButton.addEventListener('click', filterRecommendations);
        }

        if (clearButton) {
            clearButton.addEventListener('click', function() {
                searchInput.value = ''; // Clear the input field
                recommendationItems.forEach(item => {
                    item.classList.remove('hidden'); // Show all items
                });
                noResultsMessage.style.display = 'none'; // Hide no results message
            });
        }

        // Allow searching by pressing Enter key
        if (searchInput) {
            searchInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    filterRecommendations();
                }
            });
        }
    }

    // You can add other JS functionalities here that apply to all pages
    console.log("JavaScript loaded!"); // Just a test to see if JS is working
});