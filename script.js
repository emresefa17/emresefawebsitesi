// ... existing code ...

// SSS Akordiyon Fonksiyonu
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        question.addEventListener('click', () => {
            // Diğer tüm açık öğeleri kapat
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = '0';
                    otherItem.querySelector('.faq-icon').innerHTML = '+';
                }
            });
            
            // Tıklanan öğeyi aç/kapat
            const isActive = item.classList.contains('active');
            
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = '0';
                icon.innerHTML = '+';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.innerHTML = '-';
            }
        });
    });
    
    // Kategori Filtreleme Fonksiyonu
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedCategory = button.getAttribute('data-category');
            
            // Aktif buton stilini güncelle
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Projeleri filtrele
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    // Kartı göster
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                    card.classList.remove('hidden');
                    card.classList.add('visible');
                } else {
                    // Kartı gizle
                    card.style.display = 'none';
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    card.classList.add('hidden');
                    card.classList.remove('visible');
                }
            });
            
            // Proje sayısını güncelle
            updateProjectCount(selectedCategory);
        });
    });
    
    // Proje sayısını güncelleme fonksiyonu
    function updateProjectCount(category) {
        const visibleProjects = category === 'all' 
            ? projectCards.length 
            : document.querySelectorAll(`.project-card[data-category="${category}"]`).length;
        
        // Eğer proje sayısı gösteren bir element varsa güncelle
        const projectCountElement = document.querySelector('.project-count');
        if (projectCountElement) {
            projectCountElement.textContent = `${visibleProjects} proje bulundu`;
        }
    }
    
    // Sayfa yüklendiğinde tüm projeleri göster
    updateProjectCount('all');
    
    // Başlangıçta proje sayısını güncelle
    const projectCountElement = document.querySelector('.project-count');
    if (projectCountElement) {
        projectCountElement.textContent = '8 proje bulundu';
    }
});
// ... existing code ...