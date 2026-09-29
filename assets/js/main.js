/**
 * Etikoni Hope Charity Foundation - Interactive Functionality
 * Fast, lightweight, accessible vanilla JS
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initCopyButtons();
  initFaqAccordion();
  initLightbox();
  initDonationTiers();
});

function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('is-active');

    toggleBtn.innerHTML = !isExpanded 
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });
  });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  if (!copyButtons.length) return;

  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg><span class="toast-message">Copied to clipboard!</span>';
    document.body.appendChild(toast);
  }

  let toastTimer = null;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Copied';

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(label + ': ' + textToCopy + ' copied!');
      } catch (err) {
        const tempInput = document.createElement('input');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast(label + ': ' + textToCopy + ' copied!');
      }
    });
  });

  function showToast(message) {
    clearTimeout(toastTimer);
    toast.querySelector('.toast-message').textContent = message;
    toast.classList.add('is-visible');
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  }
}

function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-button');
  if (!faqButtons.length) return;

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');

      const parentList = item.closest('.faq-list');
      if (parentList) {
        parentList.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('is-open');
            otherItem.querySelector('.faq-button').setAttribute('aria-expanded', 'false');
          }
        });
      }

      item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', !isOpen);
    });
  });
}

function initLightbox() {
  const galleryItems = document.querySelectorAll('[data-lightbox-src]');
  if (!galleryItems.length) return;

  let modal = document.querySelector('.lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = '<div class="lightbox-content"><button class="lightbox-close-btn" aria-label="Close modal"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button><div class="lightbox-img-wrapper"><img src="" alt="" id="lightbox-image"></div><div class="lightbox-info"><h4 id="lightbox-title" style="font-size:1.15rem; font-weight:700; color:var(--color-primary-dark); margin-bottom:0.25rem;"></h4><p id="lightbox-caption" style="font-size:0.9rem; color:var(--color-text-muted);"></p></div></div>';
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.lightbox-close-btn');
    const closeAction = () => modal.classList.remove('is-active');

    closeBtn.addEventListener('click', closeAction);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAction();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeAction();
      }
    });
  }

  const modalImg = document.getElementById('lightbox-image');
  const modalTitle = document.getElementById('lightbox-title');
  const modalCaption = document.getElementById('lightbox-caption');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-lightbox-src');
      const title = item.getAttribute('data-title') || '';
      const caption = item.getAttribute('data-caption') || '';

      modalImg.src = src;
      modalImg.alt = title;
      modalTitle.textContent = title;
      modalCaption.textContent = caption;

      modal.classList.add('is-active');
    });
  });
}

function initDonationTiers() {
  const tierCards = document.querySelectorAll('.giving-card[data-amount]');
  const customInput = document.getElementById('custom-donation-amount');
  const paybillAmountNote = document.getElementById('selected-donation-note');

  if (!tierCards.length) return;

  tierCards.forEach(card => {
    card.addEventListener('click', () => {
      tierCards.forEach(c => c.classList.remove('featured'));
      card.classList.add('featured');

      const amount = card.getAttribute('data-amount');
      const title = card.querySelector('.giving-title')?.textContent || '';

      if (customInput) customInput.value = amount;
      if (paybillAmountNote) {
        paybillAmountNote.textContent = 'Selected: KSh ' + Number(amount).toLocaleString() + ' (' + title + ')';
      }
    });
  });

  if (customInput && paybillAmountNote) {
    customInput.addEventListener('input', () => {
      const val = customInput.value.replace(/[^0-9]/g, '');
      if (val) {
        paybillAmountNote.textContent = 'Target Amount: KSh ' + Number(val).toLocaleString();
      } else {
        paybillAmountNote.textContent = '';
      }
    });
  }
}
