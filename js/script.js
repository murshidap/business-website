// GeekTech shared JavaScript
// This file handles navigation, theme preferences, animations, and form validation.

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("js-enabled");
    initializeNavigation();
    initializeActiveLinks();
    initializeDarkMode();
    initializePageTransitions();
    initializeScrollTop();
    initializeRevealAnimations();
    initializeServiceCards();
    initializeServiceStack();
    initializeTypingEffect();
    initializeContactForm();
    window.requestAnimationFrame(() => document.body.classList.add("page-transition-ready"));
});

window.addEventListener("pageshow", () => {
    document.body.classList.remove("page-transition-exit");
    window.requestAnimationFrame(() => document.body.classList.add("page-transition-ready"));
});

function initializeNavigation() {
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");

    if (!navToggle || !navList) {
        return;
    }

    navToggle.addEventListener("click", () => {
        const isOpen = navList.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    navList.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navList.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

function initializeActiveLinks() {
    const currentPage = document.body.dataset.page;
    const navLinks = document.querySelectorAll("[data-nav-link]");

    navLinks.forEach((link) => {
        if (link.dataset.navLink === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
}

function initializePageTransitions() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
        document.body.classList.add("page-transition-ready");
        return;
    }

    document.querySelectorAll("a[href]").forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = link.getAttribute("target");
            const href = link.getAttribute("href");

            if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || target === "_blank") {
                return;
            }

            const nextUrl = new URL(href, window.location.href);

            if (nextUrl.origin !== window.location.origin || nextUrl.pathname === window.location.pathname && nextUrl.hash) {
                return;
            }

            event.preventDefault();
            document.body.classList.add("page-transition-exit");

            window.setTimeout(() => {
                window.location.href = nextUrl.href;
            }, 220);
        });
    });
}

function initializeDarkMode() {
    const toggleButton = document.querySelector(".theme-toggle");
    const savedMode = localStorage.getItem("geektech-theme");

    if (savedMode !== "light") {
        document.body.classList.add("dark-mode");
    }

    updateThemeButtonText();

    if (!toggleButton) {
        return;
    }

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("geektech-theme", theme);
        updateThemeButtonText();
    });
}

function updateThemeButtonText() {
    const toggleButton = document.querySelector(".theme-toggle");
    const buttonText = document.querySelector(".theme-toggle__text");

    if (!toggleButton || !buttonText) {
        return;
    }

    const isDarkMode = document.body.classList.contains("dark-mode");
    toggleButton.classList.toggle("theme-toggle--dark", isDarkMode);
    toggleButton.classList.toggle("theme-toggle--light", !isDarkMode);
    buttonText.textContent = isDarkMode ? "Night Mode" : "Day Mode";
    toggleButton.setAttribute("aria-label", isDarkMode ? "Switch to light mode" : "Switch to dark mode");
}

function initializeScrollTop() {
    const scrollButton = document.querySelector(".scroll-top");

    if (!scrollButton) {
        return;
    }

    window.addEventListener("scroll", () => {
        scrollButton.classList.toggle("visible", window.scrollY > 320);
    });

    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function initializeRevealAnimations() {
    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) {
        return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => {
        element.classList.add("reveal-ready");
        revealObserver.observe(element);
    });
}

function initializeServiceCards() {
    const serviceButtons = document.querySelectorAll(".service-toggle");

    serviceButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const details = button.nextElementSibling;
            const isExpanded = button.getAttribute("aria-expanded") === "true";

            if (!details) {
                return;
            }

            details.hidden = isExpanded;
            button.setAttribute("aria-expanded", String(!isExpanded));
            button.textContent = isExpanded ? "Learn More" : "Show Less";
        });
    });
}

function initializeServiceStack() {
    const stack = document.querySelector(".services-stack");

    if (!stack) {
        return;
    }

    const cards = Array.from(stack.querySelectorAll(".service-card"));

    if (!cards.length) {
        return;
    }

    function setActiveCard(activeIndex) {
        const beforeIndex = (activeIndex - 1 + cards.length) % cards.length;
        const afterIndex = (activeIndex + 1) % cards.length;

        cards.forEach((card, index) => {
            card.classList.toggle("is-active", index === activeIndex);
            card.classList.toggle("is-before", index === beforeIndex);
            card.classList.toggle("is-after", index === afterIndex);
            card.classList.toggle("is-hidden", index !== activeIndex && index !== beforeIndex && index !== afterIndex);
            card.setAttribute("aria-current", index === activeIndex ? "true" : "false");
        });
    }

    cards.forEach((card, index) => {
        card.addEventListener("focusin", () => setActiveCard(index));
        card.addEventListener("click", () => setActiveCard(index));
    });

    setActiveCard(Math.min(1, cards.length - 1));
}

function initializeTypingEffect() {
    const typingTarget = document.getElementById("typing-text");
    const words = ["UI/UX Design", "Web Development", "Automation", "Digital Marketing", "Responsive Websites", "Digital Solutions"];

    if (!typingTarget) {
        return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWord() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex -= 1;
        } else {
            charIndex += 1;
        }

        typingTarget.textContent = currentWord.slice(0, charIndex);

        let timeout = isDeleting ? 70 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
            timeout = 1300;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            timeout = 350;
        }

        window.setTimeout(typeWord, timeout);
    }

    typeWord();
}

function initializeContactForm() {
    const form = document.getElementById("contactForm");

    if (!form) {
        return;
    }

    const fields = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        subject: document.getElementById("subject"),
        message: document.getElementById("message")
    };

    Object.values(fields).forEach((field) => {
        field.addEventListener("input", () => validateField(field));
        field.addEventListener("blur", () => validateField(field));
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const isValid = validateForm(fields);
        const status = document.getElementById("formStatus");

        if (!status) {
            return;
        }

        if (isValid) {
            status.textContent = "Thanks for contacting GeekTech. Your inquiry has been validated successfully.";
            status.className = "form-status success";
            form.reset();
            clearFieldState(Object.values(fields));
        } else {
            status.textContent = "Please correct the highlighted fields before submitting the form.";
            status.className = "form-status error";
        }
    });
}

function validateForm(fields) {
    return Object.values(fields).every((field) => validateField(field));
}

function validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();

    if (fieldName === "name") {
        if (value.length < 3) {
            showError(field, "Name must be at least 3 characters.");
            return false;
        }
    }

    if (fieldName === "email") {
        if (!validateEmail(value)) {
            showError(field, "Please enter a valid email address.");
            return false;
        }
    }

    if (fieldName === "subject") {
        if (!value) {
            showError(field, "Subject is required.");
            return false;
        }
    }

    if (fieldName === "message") {
        if (value.length < 10) {
            showError(field, "Message must be at least 10 characters.");
            return false;
        }
    }

    showSuccess(field);
    return true;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showError(field, message) {
    const formGroup = field.closest(".form-group");
    const errorContainer = document.getElementById(`${field.name}Error`);

    if (!formGroup || !errorContainer) {
        return;
    }

    formGroup.classList.add("error");
    formGroup.classList.remove("success");
    errorContainer.textContent = message;
}

function showSuccess(field) {
    const formGroup = field.closest(".form-group");
    const errorContainer = document.getElementById(`${field.name}Error`);

    if (!formGroup || !errorContainer) {
        return;
    }

    formGroup.classList.remove("error");
    formGroup.classList.add("success");
    errorContainer.textContent = "";
}

function clearFieldState(fields) {
    fields.forEach((field) => {
        const group = field.closest(".form-group");
        const errorContainer = document.getElementById(`${field.name}Error`);

        if (group) {
            group.classList.remove("error", "success");
        }

        if (errorContainer) {
            errorContainer.textContent = "";
        }
    });
}
