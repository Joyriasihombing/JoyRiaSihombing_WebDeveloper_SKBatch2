'use strict';

/* ==========================================================================
   1. MOCK DATA
   ========================================================================== */
const ROLES = [
    {
        id: 'frontend',
        category: 'engineering',
        title: 'Frontend Developer',
        description: 'Build responsive, accessible web experiences using modern HTML, CSS, and JavaScript frameworks.',
        meta: [
            { label: 'Full-time', icon: 'briefcase' },
            { label: 'Remote', icon: 'location' },
            { label: 'Mid–Senior', icon: 'level' },
        ],
        responsibilities: [
            'Develop and maintain user-facing features with clean, reusable components',
            'Translate design mockups into pixel-accurate, responsive interfaces',
            'Collaborate with designers and backend engineers on API integration',
            'Optimize pages for speed, accessibility, and SEO',
        ],
    },
    {
        id: 'backend',
        category: 'engineering',
        title: 'Backend Developer',
        description: 'Design and scale reliable backend systems, APIs, and data pipelines that power our products.',
        meta: [
            { label: 'Full-time', icon: 'briefcase' },
            { label: 'Remote', icon: 'location' },
            { label: 'Senior', icon: 'level' },
        ],
        responsibilities: [
            'Build and maintain RESTful or GraphQL APIs with clean architecture',
            'Design efficient database schemas and write optimized queries',
            'Implement authentication, authorization, and data security best practices',
            'Monitor performance and troubleshoot production issues',
        ],
    },
    {
        id: 'ui-ux',
        category: 'design',
        title: 'UI/UX Designer',
        description: 'Craft intuitive interfaces and meaningful user experiences backed by research and testing.',
        meta: [
            { label: 'Full-time', icon: 'briefcase' },
            { label: 'Hybrid', icon: 'location' },
            { label: 'Mid–Senior', icon: 'level' },
        ],
        responsibilities: [
            'Conduct user research, interviews, and usability testing',
            'Create wireframes, prototypes, and high-fidelity designs in Figma',
            'Maintain and evolve the design system for consistency',
            'Work closely with engineers to ensure design quality at handoff',
        ],
    },
    {
        id: 'qa',
        category: 'quality',
        title: 'QA Engineer',
        description: 'Ensure product quality through systematic testing, automation, and careful evaluation.',
        meta: [
            { label: 'Full-time', icon: 'briefcase' },
            { label: 'Remote', icon: 'location' },
            { label: 'Mid', icon: 'level' },
        ],
        responsibilities: [
            'Design and execute manual and automated test plans',
            'Identify, document, and track bugs through resolution',
            'Build and maintain CI/CD test pipelines',
            'Champion quality standards across the engineering team',
        ],
    },
    {
        id: 'product-manager',
        category: 'product',
        title: 'Product Manager',
        description: 'Drive product vision, prioritize features, and ship value to learners across our platform.',
        meta: [
            { label: 'Full-time', icon: 'briefcase' },
            { label: 'Hybrid', icon: 'location' },
            { label: 'Senior', icon: 'level' },
        ],
        responsibilities: [
            'Define product roadmap based on user needs and business goals',
            'Write clear PRDs and collaborate with design and engineering',
            'Analyze metrics to measure and improve product performance',
            'Communicate updates to stakeholders and leadership',
        ],
    },
    {
        id: 'fullstack',
        category: 'engineering',
        title: 'Full-Stack Developer',
        description: 'Own features end-to-end — from polished frontend UI to robust backend services.',
        meta: [
            { label: 'Full-time', icon: 'briefcase' },
            { label: 'Remote', icon: 'location' },
            { label: 'Senior', icon: 'level' },
        ],
        responsibilities: [
            'Build end-to-end features from database to user interface',
            'Work across the stack with modern frameworks and tooling',
            'Review code and mentor junior developers',
            'Improve architecture and developer experience',
        ],
    },
];

/* SVG icon snippets for meta tags */
const META_ICONS = {
    briefcase: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3.5h4M3 6h10v7H3V6zm2.5-2.5h5v2.5h-5V3.5z" stroke="currentColor" stroke-width="1.3"/></svg>',
    location: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 14s4.5-4 4.5-7.5a4.5 4.5 0 1 0-9 0C3.5 10 8 14 8 14z" stroke="currentColor" stroke-width="1.3"/><circle cx="8" cy="6.5" r="1.5" stroke="currentColor" stroke-width="1.3"/></svg>',
    level: '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 13l4-9 4 9M5.5 9.5h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
};

/* Category-specific card icons (inline SVG) */
const CATEGORY_ICONS = {
    engineering: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 7l-4 5 4 5M16 7l4 5-4 5M14 4l-4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    design: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><circle cx="8.5" cy="9.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="9.5" r="1.2" fill="currentColor"/><circle cx="12" cy="15" r="1.2" fill="currentColor"/></svg>',
    quality: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    product: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M9 9h6M9 13h6M9 17h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
};

const CATEGORY_LABELS = {
    engineering: 'Engineering',
    design: 'Design',
    quality: 'Quality',
    product: 'Product',
};

/* ==========================================================================
   2. DOM REFERENCES
   ========================================================================== */
const roleGrid        = document.getElementById('roleGrid');
const positionCount   = document.getElementById('positionCount');
const emptyState      = document.getElementById('emptyState');
const filterBar       = document.querySelector('.filter-bar');
const filterButtons   = document.querySelectorAll('.filter-btn');

const modalOverlay    = document.getElementById('modalOverlay');
const modalBody       = document.getElementById('modalBody');
const modalClose       = document.getElementById('modalClose');

const toast           = document.getElementById('toast');

const navbar          = document.getElementById('navbar');
const navToggle       = document.getElementById('navToggle');
const navMobile       = document.getElementById('navMobile');

const footerYear      = document.getElementById('footerYear');

let activeFilter = 'all';

/* ==========================================================================
   3. RENDER ROLE CARDS
   ========================================================================== */
function renderCards(roles) {
    roleGrid.innerHTML = '';

    if (roles.length === 0) {
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    roles.forEach((role, index) => {
        const card = document.createElement('article');
        card.className = 'role-card reveal';
        card.style.setProperty('--card-index', index);

        const metaHTML = role.meta
            .map((m) => `<span>${META_ICONS[m.icon] || ''}${m.label}</span>`)
            .join('');

        card.innerHTML = `
            <div class="role-card-top">
                <div class="role-icon" aria-hidden="true">${CATEGORY_ICONS[role.category] || ''}</div>
                <span class="role-category">${CATEGORY_LABELS[role.category] || role.category}</span>
            </div>
            <h3>${role.title}</h3>
            <p class="role-desc">${role.description}</p>
            <div class="role-meta">${metaHTML}</div>
            <a href="#" class="role-link" data-role-id="${role.id}" role="button" aria-label="View details for ${role.title}">
                View Role
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        `;

        // Attach click listener for modal
        const link = card.querySelector('.role-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();s
            openModal(role);
        });

        roleGrid.appendChild(card);
    });

    // Re-run reveal observer for new cards
    observeReveal();
}

/* ==========================================================================
   4. CATEGORY FILTERING
   ========================================================================== */
function applyFilter(category) {
    activeFilter = category;

    // Update active button state
    filterButtons.forEach((btn) => {
        const isActive = btn.dataset.filter === category;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive);
    });

    const filtered = category === 'all'
        ? ROLES
        : ROLES.filter((r) => r.category === category);

    renderCards(filtered);
    updatePositionCount(filtered.length);
}

function updatePositionCount(count) {
    positionCount.textContent = String(count).padStart(2, '0') + ' OPEN ROLE' + (count !== 1 ? 'S' : '');
}

filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});

/* ==========================================================================
   5. JOB DETAIL MODAL
   ========================================================================== */
function openModal(role) {
    const metaHTML = role.meta
        .map((m) => `<span>${META_ICONS[m.icon] || ''}${m.label}</span>`)
        .join('');

    const respHTML = role.responsibilities
            .map((r) => `<li>${r}</li>`)
            .join('');

    modalBody.innerHTML = `
        <span class="modal-category">${CATEGORY_LABELS[role.category] || role.category}</span>
        <h3 id="modalTitle">${role.title}</h3>
        <p class="modal-desc">${role.description}</p>
        <div class="modal-meta">${metaHTML}</div>
        <p class="modal-section-title">What you'll do</p>
        <ul class="modal-list">${respHTML}</ul>
        <a href="mailto:careers@sekolahkarir.com?subject=Application: ${encodeURIComponent(role.title)}"
           class="modal-apply" id="modalApply">
            Apply for this Role
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9H14M14 9L10 5M14 9L10 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    `;

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus the close button for keyboard users
    setTimeout(() => modalClose.focus(), 100);
}

function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

/* ==========================================================================
   6. TOAST NOTIFICATION
   ========================================================================== */
let toastTimer;
function showToast(message) {
    clearTimeout(toastTimer);
    toast.hidden = false;
    toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="1.5"/>
            <path d="M6 9.5l2 2 4-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>${message}</span>
    `;
    // Force reflow then animate
    requestAnimationFrame(() => toast.classList.add('show'));

    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => (toast.hidden = true), 400);
    }, 3000);
}

/* ==========================================================================
   7. NAVBAR SCROLL + MOBILE MENU
   ========================================================================== */
let scrollTicking = false;
window.addEventListener('scroll', () => {
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            navbar.classList.toggle('scrolled', window.scrollY > 10);
            scrollTicking = false;
        });
        scrollTicking = true;
    }
});

navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
    navMobile.setAttribute('aria-hidden', !isOpen);
});

// Close mobile menu when a link is clicked
navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navMobile.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
    });
});

/* ==========================================================================
   8. SCROLL REVEAL (Intersection Observer)
   ========================================================================== */
let revealObserver;

function observeReveal() {
    if (!revealObserver) {
        revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );
    }

    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        revealObserver.observe(el);
    });
}

/* ==========================================================================
   9. ANIMATED COUNTERS
   ========================================================================== */
function animateCounter(el, target) {
    const duration = 1500;
    const start = performance.now();

    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count, 10);
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach((c) => counterObserver.observe(c));
}

/* ==========================================================================
   10. SMOOTH ANCHOR SCROLL
   ========================================================================== */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#' || targetId.length < 2) return;

        const targetEl = document.querySelector(targetId);
        if (!targetEl) return;

        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 68;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset - 10;

        window.scrollTo({ top, behavior: 'smooth' });
    });
});

/* ==========================================================================
   11. FOOTER YEAR
   ========================================================================== */
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

/* ==========================================================================
   12. INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    renderCards(ROLES);
    updatePositionCount(ROLES.length);

    observeReveal();

    initCounters();

    document.querySelectorAll('.section-header, .positions-section, .cta-section, .stats-bar')
        .forEach((el) => el.classList.add('reveal'));
    observeReveal();

    console.log('%cSekolah Karir — Recruitment Page Ready', 'color: #0169f5; font-weight: bold; font-size: 14px;');
});
