// Proje Filtreleme İşlevselliği
document.addEventListener('DOMContentLoaded', function() {
    // Filtreleme butonlarını seçelim
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Her filtreleme butonuna tıklama olayı ekleyelim
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aktif sınıfını tüm butonlardan kaldıralım
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tıklanan butona aktif sınıfını ekleyelim
            this.classList.add('active');
            
            // Seçilen filtreyi alalım
            const filter = this.getAttribute('data-filter');
            
            // Projeleri filtreleyelim
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
    
    // Hamburger menü işlevselliği
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
});