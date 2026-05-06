document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.getElementById('logSearch');
        const logCards = document.querySelectorAll('#logList .log-card');
        const noResultsMsg = document.getElementById('noResultsMsg');
        searchInput.addEventListener('keyup', function(e) {
            const term = e.target.value.toLowerCase();
            let visibleCount = 0;
            logCards.forEach(function(card) {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(term)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
            if (visibleCount === 0) {
                noResultsMsg.style.display = 'block';
            } else {
                noResultsMsg.style.display = 'none';
            }
        });
        const backToTopBtn = document.getElementById("backToTopBtn");
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add("show");
            } else {
                backToTopBtn.classList.remove("show");
            }
        });
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        });