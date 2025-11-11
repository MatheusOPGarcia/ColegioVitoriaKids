

document.addEventListener('DOMContentLoaded', () => {
    

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    function setupCarousel(trackId, prevBtnId, nextBtnId, dotsId, totalPages) {
        const track = document.getElementById(trackId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        const dotsContainer = document.getElementById(dotsId);


        if (!track || !prevBtn || !nextBtn || !dotsContainer) {
            console.warn(`Carrossel não iniciado: Elementos faltando para ${trackId}`);
            return;
        }

        let currentPage = 0;
        let dots = []; 
        const movePercentage = 100 / totalPages; 

        
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === 0) {
                dot.classList.add('active'); 
            }
            dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
            
            dot.addEventListener('click', () => {
                currentPage = i;
                updateSlider();
            });
            
            dotsContainer.appendChild(dot);
            dots.push(dot); 
        }
        
        function updateSlider() {
            track.style.transform = `translateX(-${currentPage * movePercentage}%)`;

            
            prevBtn.disabled = (currentPage === 0);
            nextBtn.disabled = (currentPage === totalPages - 1);
            
            
            dots.forEach((dot, index) => {
                if (index === currentPage) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages - 1) {
                currentPage++;
                updateSlider();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentPage > 0) {
                currentPage--;
                updateSlider();
            }
        });

        
        updateSlider();
    }

    

    
    setupCarousel('pilar-track', 'pilar-prev', 'pilar-next', 'pilar-dots', 2);
    setupCarousel('gallery-track', 'gallery-prev', 'gallery-next', 'gallery-dots', 3);
    setupCarousel('lagoa-track', 'lagoa-prev', 'lagoa-next', 'lagoa-dots', 3);
    setupCarousel('parnamirim-track', 'parnamirim-prev', 'parnamirim-next', 'parnamirim-dots', 3);
    setupCarousel('satelite-track', 'satelite-prev', 'satelite-next', 'satelite-dots', 3);
    setupCarousel('main-gallery-track', 'main-gallery-prev', 'main-gallery-next', 'main-gallery-dots', 7);

});

