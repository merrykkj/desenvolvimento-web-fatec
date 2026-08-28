const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-white');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.add('bg-transparent');
        header.classList.remove('bg-white');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('dynamic-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    
    const cards = document.querySelectorAll('.product-card');

    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const price = card.getAttribute('data-price');
            const img = card.getAttribute('data-img');

            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalPrice.textContent = price;
            modalImg.src = img;
            modalImg.alt = title;

            modal.showModal();
        });
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.close());
    }

    if (modal) {
        modal.addEventListener('click', (event) => {
            const rect = modal.getBoundingClientRect();
            const isInDialog = (
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom
            );
            if (!isInDialog) {
                modal.close();
            }
        });
    }
});

  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', (event) => {
      const searchTerm = event.target.value.toLowerCase().trim();

      productCards.forEach((card) => {
        const title = (card.getAttribute('data-title') || '').toLowerCase();

        if (title.includes(searchTerm)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });