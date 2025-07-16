// Web Development Skills
const webDevSkills = [
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        description: 'Building modern, fast, and responsive web interfaces using React.js. Proficient in state management, hooks, and component architecture.'
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        description: 'Developing interactive web applications using modern JavaScript (ES6+). Proficient in DOM manipulation and asynchronous programming.'
    },
    {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        description: 'Creating semantic and accessible web pages using HTML5 features. Expertise includes proper document structure and best practices.'
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        description: 'Crafting responsive and visually appealing interfaces using CSS3. Experienced with Flexbox, Grid, animations, and transitions.'
    },
    {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: 'Building scalable backend services with Node.js. Proficient with event-driven architecture and asynchronous programming.'
    },
    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        description: 'Managing code using Git version control. Proficient with branching strategies and collaborative workflows.'
    },
    {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        description: 'Creating and implementing designs using Figma. Experienced with UI/UX design principles and prototyping.'
    },
    {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        description: 'Designing modern, responsive layouts with Tailwind CSS. Proficient in utility-first CSS for rapid UI development.'
    },
    {
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        description: 'Creating responsive web designs using Bootstrap framework. Experienced with grid system and pre-built components.'
    },
];

// AI/ML Skills
const aimlSkills = [
    {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Creating AI/ML solutions with Python. Experienced in data analysis, model training, and deploying machine learning applications.'
    },
    {
        name: 'TensorFlow',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
        description: 'Building and training neural networks with TensorFlow. Experienced in deep learning models for various applications.'
    },
    {
        name: 'PyTorch',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
        description: 'Developing deep learning models with PyTorch. Skilled in neural networks for computer vision and NLP tasks.'
    },
    {
        name: 'Pandas',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        description: 'Data manipulation and analysis using Pandas. Proficient in handling large datasets and preparing data for machine learning.'
    },
    {
        name: 'NumPy',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
        description: 'Numerical computing with NumPy. Experienced in array operations and mathematical functions for scientific computing.'
    },
    {
        name: 'Scikit-learn',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
        description: 'Implementing machine learning algorithms with Scikit-learn. Skilled in classification, regression, and clustering models.'
    },
    {
        name: 'Keras',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg',
        description: 'Building neural networks with Keras. Experienced in creating and training models with this high-level API.'
    },
    {
        name: 'OpenCV',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
        description: 'Computer vision applications with OpenCV. Skilled in image processing and video analysis techniques.'
    },
    {
        name: 'Matplotlib',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
        description: 'Data visualization with Matplotlib. Creating informative plots and charts to communicate insights from data.'
    },
    {
        name: 'Jupyter',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
        description: 'Interactive computing with Jupyter notebooks. Skilled in creating reproducible data science workflows.'
    },
    {
        name: 'SQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        description: 'Data querying and management with SQL. Experienced in database operations for data science applications.'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with longer durations
    AOS.init({
        duration: 1000,
        easing: 'ease-out',
        once: true,
        startEvent: 'DOMContentLoaded'
    });
    
    // Hide loader after page loads
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 2000); // Reduced to 2 seconds for better UX
    
    // Set up profile icon and side navigation
    setupNavigation();
    
    // Initialize skills wheels
    initializeSkillsWheel('webDevOrbitalCircle', webDevSkills, '.skills-web-domain');
    initializeSkillsWheel('aimlOrbitalCircle', aimlSkills, '.skills-aiml-domain');
    
    // Initialize projects
    initializeProjects();
    
    // Set up domain switching
    setupDomainSwitcher();

    // Setup info button
    setupInfoButton();
    
    // Setup device notification
    setupDeviceNotification();
    
    // Cursor trail effect - optimized for performance
    setupCursorTrail();
});

function setupInfoButton() {
    const infoButton = document.getElementById('infoButton');
    const infoTooltip = document.getElementById('infoTooltip');
    
    // Only setup if on mobile/tablet
    if (window.innerWidth <= 1024 && infoButton && infoTooltip) {
        // Update tooltip content for mobile/tablet
        infoTooltip.innerHTML = `
            <h3>For Best Experience</h3>
            <p>Please use a laptop or desktop computer to enjoy the full visual experience of this portfolio.</p>
        `;
        
        infoButton.addEventListener('click', function() {
            infoTooltip.classList.toggle('active');
        });
        
        // Close tooltip when clicking outside
        document.addEventListener('click', function(event) {
            if (!infoButton.contains(event.target) && !infoTooltip.contains(event.target)) {
                infoTooltip.classList.remove('active');
            }
        });
        
        // Also close tooltip when scrolling
        window.addEventListener('scroll', function() {
            infoTooltip.classList.remove('active');
        });
    } else if (infoButton) {
        // Hide the button on desktop
        infoButton.style.display = 'none';
    }
}

function setupDeviceNotification() {
    const deviceNotification = document.getElementById('deviceNotification');
    const closeNotification = document.getElementById('closeNotification');
    
    // Update the notification text
    if (deviceNotification) {
        deviceNotification.innerHTML = `
            <p>For best visual experience, please use a laptop or desktop computer.</p>
            <button class="close-notification" id="closeNotification">×</button>
        `;
    }
    
    // Show notification only on mobile devices
    if (window.innerWidth <= 768) {
        deviceNotification.style.display = 'block';
    }
    
    // Re-select the close button after updating the content
    const updatedCloseBtn = document.getElementById('closeNotification');
    if (updatedCloseBtn) {
        updatedCloseBtn.addEventListener('click', function() {
            deviceNotification.style.display = 'none';
        });
    }
}

function setupCursorTrail() {
    document.addEventListener("mousemove", function(e) {
        // Limit the frequency of trail creation
        if (Math.random() > 0.4) { // Changed from 0.85 to 0.4 for more trails
            const trail = document.createElement("div");
            trail.className = "trail";
            
            // Increased size range for more visible trails
            const size = Math.random() * 8 + 5; // Changed from 4+3 to 8+5 for larger trails
            
            // More vibrant colors with higher opacity
            const colors = [
                'rgba(255, 255, 255, 0.7)', 
                'rgba(127, 66, 167, 0.7)', 
                'rgba(102, 0, 197, 0.7)',
                'rgba(200, 200, 255, 0.7)'
            ];
            
            trail.style.background = colors[Math.floor(Math.random() * colors.length)];
            trail.style.width = trail.style.height = `${size}px`;
            
            trail.style.left = `${e.pageX - size / 2}px`;
            trail.style.top = `${e.pageY - size / 2}px`;
            
            document.body.appendChild(trail);
            
            // Longer duration for trails to remain visible
            setTimeout(() => {
                trail.remove();
            }, 1200); // Increased from 800ms to 1200ms
        }
    });
}

function setupNavigation() {
    const profileIcon = document.getElementById('profileIcon');
    const sideNav = document.getElementById('sideNav');
    const sideNavClose = document.getElementById('sideNavClose');
    const navOverlay = document.getElementById('navOverlay');
    const sideDropdown = document.querySelector('.side-dropdown');
    const sideDropdownToggle = document.querySelector('.side-dropdown-toggle');
    
    // Open side nav when profile icon is clicked
    if (profileIcon) {
        profileIcon.addEventListener('click', function() {
            sideNav.classList.add('active');
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close side nav when close button is clicked
    if (sideNavClose) {
        sideNavClose.addEventListener('click', function() {
            sideNav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close side nav when overlay is clicked
    if (navOverlay) {
        navOverlay.addEventListener('click', function() {
            sideNav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Toggle dropdown in side nav
    if (sideDropdownToggle) {
        sideDropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            sideDropdown.classList.toggle('active');
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Close side nav if it's open
                sideNav.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close side nav when clicking on a link
    document.querySelectorAll('.side-nav a:not(.side-dropdown-toggle)').forEach(link => {
        link.addEventListener('click', function() {
            sideNav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

function initializeSkillsWheel(orbitalCircleId, skills, containerSelector) {
    const orbitalCircle = document.getElementById(orbitalCircleId);
    if (!orbitalCircle) return;
    
    const container = document.querySelector(containerSelector);
    const centralSkillIcon = container.querySelector('.central-skill-icon img');
    const centralSkillName = container.querySelector('.central-skill h3');
    const centralSkillDescription = container.querySelector('.central-skill-description');
    
    // Place technology icons in a circle
    const radius = window.innerWidth < 768 ? 150 : 250; // Responsive radius
    const totalIcons = skills.length;
    
    skills.forEach((skill, index) => {
        // Calculate position on the circle
        const angle = (index / totalIcons) * 2 * Math.PI;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        // Create tech icon element
        const techIcon = document.createElement('div');
        techIcon.className = 'tech-icon';
        techIcon.style.left = `calc(50% + ${x}px)`;
        techIcon.style.top = `calc(50% + ${y}px)`;
        techIcon.style.transform = 'translate(-50%, -50%)';
        
        // Create image element
        const img = document.createElement('img');
        img.src = skill.icon;
        img.alt = skill.name;
        techIcon.appendChild(img);
        
        // Add skill name label
        const nameLabel = document.createElement('span');
        nameLabel.className = 'tech-name';
        nameLabel.textContent = skill.name;
        techIcon.appendChild(nameLabel);
        
        // Add hover/click effects
        const updateCentralSkill = function() {
            centralSkillIcon.src = skill.icon;
            centralSkillName.textContent = skill.name;
            centralSkillDescription.textContent = skill.description;
            container.querySelector('.central-skill').style.boxShadow = '0 0 80px rgba(70, 0, 123, 0.8)';
        };
        
        techIcon.addEventListener('mouseenter', updateCentralSkill);
        techIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            updateCentralSkill();
        });
        
        // Add to orbital circle
        orbitalCircle.appendChild(techIcon);
    });
    
    // Start rotation animation for this orbital circle
    startRotation(orbitalCircleId, skills.length);
}

function startRotation(orbitalCircleId, totalIcons) {
    let angle = 0;
    const rotateSpeed = 0.0001; // Slower rotation for better performance
    const orbitalCircle = document.getElementById(orbitalCircleId);
    if (!orbitalCircle) return;
    
    const icons = orbitalCircle.querySelectorAll('.tech-icon');
    
    function rotate() {
        angle += rotateSpeed;
        if (!document.hidden) {
            const currentRadius = window.innerWidth < 768 ? 150 : 250; // Responsive radius
            
            icons.forEach((icon, index) => {
                const iconAngle = angle + (index / totalIcons) * 2 * Math.PI;
                const x = currentRadius * Math.cos(iconAngle);
                const y = currentRadius * Math.sin(iconAngle);
                
                icon.style.left = `calc(50% + ${x}px)`;
                icon.style.top = `calc(50% + ${y}px)`;
            });
        }
        
        requestAnimationFrame(rotate);
    }
    
    rotate();
}

function initializeProjects() {
    // Project filtering functionality
    setupFilterButtons('.web-dev-projects .filter-btn', '.web-dev-projects .project-card');
    setupFilterButtons('.aiml-projects .filter-btn', '.aiml-projects .project-card');
    
    // Animation for project cards
    animateProjectCards();
}

function setupFilterButtons(buttonSelector, cardSelector) {
    const filterButtons = document.querySelectorAll(buttonSelector);
    const projectCards = document.querySelectorAll(cardSelector);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons in this group
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

function resetFilters(buttonSelector) {
    const filterButtons = document.querySelectorAll(buttonSelector);
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Set 'All' button as active
    const allButton = document.querySelector(`${buttonSelector}[data-filter="all"]`);
    if (allButton) {
        allButton.classList.add('active');
    }
}

function showAllProjects(cardSelector) {
    const projectCards = document.querySelectorAll(cardSelector);
    projectCards.forEach(card => {
        card.style.display = 'block';
    });
}

function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                projectObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        projectObserver.observe(card);
    });
}

function setupDomainSwitcher() {
    const domainSwitch = document.getElementById('domainSwitch');
    const domainIndicator = document.getElementById('domainIndicator');
    const domainName = document.getElementById('domainName');
    
    // Domain elements
    const webDevModel = document.querySelector('.web-dev-model');
    const aimlModel = document.querySelector('.aiml-model');
    const webDevDomain = document.querySelector('.web-dev-domain');
    const aimlDomain = document.querySelector('.aiml-domain');
    const webDevProjects = document.querySelector('.web-dev-projects');
    const aimlProjects = document.querySelector('.aiml-projects');
    const webDevSkills = document.querySelector('.skills-web-domain');
    const aimlSkills = document.querySelector('.skills-aiml-domain');
    
    // Current domain state
    let currentDomain = 'web-dev';
    
    // Domain switcher click event
    if (domainSwitch) {
        domainSwitch.addEventListener('click', function() {
            // Toggle domain
            if (currentDomain === 'web-dev') {
                // Switch to AIML domain
                webDevModel.classList.remove('active');
                aimlModel.classList.add('active');
                webDevDomain.classList.remove('active');
                aimlDomain.classList.add('active');
                webDevProjects.classList.remove('active');
                aimlProjects.classList.add('active');
                webDevSkills.classList.remove('active');
                aimlSkills.classList.add('active');
                domainName.textContent = 'AI/ML Engineering';
                currentDomain = 'aiml';
                
                // Reset filters when switching domains
                resetFilters('.aiml-projects .filter-btn');
                showAllProjects('.aiml-projects .project-card');
            } else {
                // Switch to Web Development domain
                aimlModel.classList.remove('active');
                webDevModel.classList.add('active');
                aimlDomain.classList.remove('active');
                webDevDomain.classList.add('active');
                aimlProjects.classList.remove('active');
                webDevProjects.classList.add('active');
                aimlSkills.classList.remove('active');
                webDevSkills.classList.add('active');
                domainName.textContent = 'Web Development';
                currentDomain = 'web-dev';
                
                // Reset filters when switching domains
                resetFilters('.web-dev-projects .filter-btn');
                showAllProjects('.web-dev-projects .project-card');
            }
            
            // Show domain indicator
            domainIndicator.classList.add('show');
            
            // Animate icon
            this.querySelector('i').style.transform = 'rotate(360deg)';
            
            // Hide domain indicator after 3 seconds
            setTimeout(() => {
                domainIndicator.classList.remove('show');
            }, 3000);
            
            // Reset rotation after animation completes
            setTimeout(() => {
                this.querySelector('i').style.transform = 'rotate(0)';
            }, 400);
        });
    }
}

// Add interactive effects to footer elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for back to top button
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add minimal hover effects with JS instead of CSS transitions
    const socialIcons = document.querySelectorAll('.footer .social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#7f42a7';
            this.style.transform = 'translateY(-3px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            this.style.transform = 'translateY(0)';
        });
    });
    
    const footerCta = document.querySelector('.footer-cta');
    if (footerCta) {
        const ctaArrow = footerCta.querySelector('.cta-arrow');
        
        footerCta.addEventListener('mouseenter', function() {
            this.style.borderColor = '#7f42a7';
            this.style.transform = 'translateY(-3px)';
            if (ctaArrow) ctaArrow.style.transform = 'translateX(5px)';
        });
        
        footerCta.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            this.style.transform = 'translateY(0)';
            if (ctaArrow) ctaArrow.style.transform = 'translateX(0)';
        });
    }
    
    const footerEmail = document.querySelector('.footer-email');
    if (footerEmail) {
        footerEmail.addEventListener('mouseenter', function() {
            this.style.color = '#7f42a7';
        });
        
        footerEmail.addEventListener('mouseleave', function() {
            this.style.color = '#ffffff';
        });
    }
});
