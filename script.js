 document.addEventListener("mousemove", function (e) {
    const trail = document.createElement("div");
    trail.className = "trail";

    const colors = ['#ffffff66', '#00ffff88', '#ff00ff66'];
    const size = Math.random() * 6 + 4;
    trail.style.background = colors[Math.floor(Math.random() * colors.length)];
    trail.style.width = trail.style.height = `${size}px`;

    trail.style.left = `${e.pageX - size / 2}px`;
    trail.style.top = `${e.pageY - size / 2}px`;

    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 1000);
  });


    document.body.classList.add('loading');

  // Wait until animation ends (~7s), then remove preloader
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.style.transition = "opacity 0.8s ease";
      preloader.style.opacity = 0;

      setTimeout(() => {
        preloader.style.display = "none";
        document.body.classList.remove('loading');
      }, 800); // wait for fade-out
    }, 7000); // match animation duration
  });

  


  document.addEventListener('DOMContentLoaded', function() {
    const skillsWheel = document.getElementById('skills-wheel');
    const centralSkillIcon = document.getElementById('central-skill-icon');
    const centralSkillTitle = document.getElementById('central-skill-title');
    const centralSkillDetails = document.getElementById('central-skill-details');
    let isMouseOver = false;
    
    // Skill descriptions and icons
    const skillInfo = {
        'Python': {
            icon: 'code',
            description: 'Python is my primary programming language, which I use for web development, data analysis, and machine learning projects. With its versatile libraries and frameworks, I\'ve built everything from web applications to computer vision systems.'
        },
        'HTML': {
            icon: 'html',
            description: 'I create semantic and accessible web pages using HTML5 features. My expertise includes proper document structure, accessibility best practices, and integration with modern frameworks.'
        },
        'CSS': {
            icon: 'css',
            description: 'I craft responsive and visually appealing interfaces using CSS3. Experienced with Flexbox, Grid, animations, transitions, and various styling methodologies like BEM and CSS Modules.'
        },
        'JavaScript': {
            icon: 'javascript',
            description: 'I develop interactive web applications using modern JavaScript (ES6+). Proficient in DOM manipulation, asynchronous programming, and integration with various APIs and libraries.'
        },
        'Java': {
            icon: 'coffee',
            description: 'I have basic knowledge of Java programming for application development. Familiar with core concepts like OOP, collections, and basic syntax for building simple applications.'
        },
        'SQL': {
            icon: 'database',
            description: 'I design and optimize database queries using SQL. Experienced with database design, complex queries, joins, and database management systems like MySQL and PostgreSQL.'
        },
        'PHP': {
            icon: 'data_object',
            description: 'I develop server-side applications using PHP. Familiar with creating dynamic web pages, handling forms, authentication systems, and database interactions.'
        },
        'Bootstrap': {
            icon: 'grid_view',
            description: 'I build responsive websites quickly using Bootstrap. Proficient with its grid system, components, utilities, and customization options for creating modern interfaces.'
        },
        'Tailwind': {
            icon: 'design_services',
            description: 'I create custom designs efficiently with Tailwind CSS. Experienced with utility-first approach, responsive design, and component creation for rapid development.'
        },
        'Flask': {
            icon: 'science',
            description: 'I develop web applications using Flask microframework. Skilled in creating routes, templates, forms, authentication, and RESTful APIs for Python-based web services.'
        },
        'OpenCV': {
            icon: 'visibility',
            description: 'I implement computer vision solutions with OpenCV. Experienced with image processing, object detection, feature extraction, and integration with machine learning models.'
        },
        'TensorFlow': {
            icon: 'psychology',
            description: 'I build and train machine learning models using TensorFlow. Familiar with neural networks, deep learning architectures, and model deployment for various applications.'
        },
        'NumPy': {
            icon: 'functions',
            description: 'I perform numerical computations efficiently with NumPy. Proficient with array operations, mathematical functions, and integration with other data science libraries.'
        },
        'Pandas': {
            icon: 'table_chart',
            description: 'I analyze and manipulate data using Pandas. Experienced with data cleaning, transformation, analysis, and visualization for data science projects.'
        },
        'VS Code': {
            icon: 'code_blocks',
            description: 'VS Code is my primary development environment. I leverage its extensions, debugging capabilities, and integrated terminal for efficient coding workflows.'
        },
        'Git': {
            icon: 'merge_type',
            description: 'I manage code using Git version control. Proficient with branching strategies, collaborative workflows, conflict resolution, and integration with GitHub/GitLab.'
        },
        'Figma': {
            icon: 'brush',
            description: 'I create and implement designs using Figma. Experienced with UI/UX design principles, prototyping, and translating designs into code.'
        }
    };
    
    // Add event listeners to orbital skills
    const orbitalSkills = document.querySelectorAll('.orbital-skill');
    orbitalSkills.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            const skillName = this.getAttribute('data-skill');
            const skillIcon = this.getAttribute('data-icon');
            
            if (skillInfo[skillName]) {
                centralSkillIcon.innerHTML = `<span class="material-symbols-outlined">${skillInfo[skillName].icon}</span>`;
                centralSkillTitle.textContent = skillName;
                centralSkillDetails.innerHTML = `<p>${skillInfo[skillName].description}</p>`;
                
                // Add highlight effect
                document.querySelector('.central-skill').style.boxShadow = '0 0 70px rgba(128, 0, 255, 0.7)';
            }
        });
    });
    
    // 3D rotation based on mouse movement
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    
    const skillsSection = document.querySelector('.skills-section');
    skillsSection.addEventListener('mousemove', function(e) {
        if (!isMouseOver) return;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate the rotation based on mouse position
        // Map mouse position to rotation angles (-20 to 20 degrees)
        const rotateY = ((mouseX / windowWidth) * 40) - 20;
        const rotateX = (((mouseY / windowHeight) * 40) - 20) * -1; // Invert for natural feel
        
        // Apply the rotation
        skillsWheel.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    // Track mouse over state
    const wheelContainer = document.querySelector('.skills-wheel-container');
    wheelContainer.addEventListener('mouseenter', function() {
        isMouseOver = true;
        // Stop auto-rotation
        stopAutoRotate();
    });
    
    wheelContainer.addEventListener('mouseleave', function() {
        isMouseOver = false;
        // Reset to default position smoothly
        skillsWheel.style.transition = 'transform 1s ease';
        skillsWheel.style.transform = 'rotateX(0deg) rotateY(0deg)';
        setTimeout(() => {
            skillsWheel.style.transition = 'transform 0.1s ease';
        }, 1000);
        
        // Reset central content
        centralSkillIcon.innerHTML = '<span class="material-symbols-outlined">code</span>';
        centralSkillTitle.textContent = 'Python';
        centralSkillDetails.innerHTML = `<p>${skillInfo['Python'].description}</p>`;
        document.querySelector('.central-skill').style.boxShadow = '0 0 50px rgba(128, 0, 255, 0.5)';
        
        // Restart auto-rotation
        startAutoRotate();
    });
    
    // Update window dimensions on resize
    window.addEventListener('resize', function() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    });
    
    // Add auto-rotation when not interacting
    let autoRotateInterval;
    let rotationAngle = 0;
    
    function startAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
        
        autoRotateInterval = setInterval(() => {
            if (!isMouseOver) {
                rotationAngle += 0.5;
                skillsWheel.style.transform = `rotateY(${rotationAngle}deg)`;
            }
        }, 50);
    }
    
    function stopAutoRotate() {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
            autoRotateInterval = null;
        }
    }
    
    // Start auto-rotation initially
    startAutoRotate();
    
    // Add touch support for mobile devices
    let touchStartX, touchStartY;
    
    wheelContainer.addEventListener('touchstart', function(e) {
        stopAutoRotate();
        isMouseOver = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        e.preventDefault();
    });
    
    wheelContainer.addEventListener('touchmove', function(e) {
        if (!isMouseOver) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        // Calculate the rotation based on touch movement
        const deltaX = touchX - touchStartX;
        const deltaY = touchY - touchStartY;
        
        const rotateY = deltaX * 0.5;
        const rotateX = deltaY * -0.5;
        
        // Apply the rotation
        skillsWheel.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        // Update starting position for next move
        touchStartX = touchX;
        touchStartY = touchY;
        
        e.preventDefault();
    });
    
    wheelContainer.addEventListener('touchend', function() {
        isMouseOver = false;
        startAutoRotate();
    });
    
    // Initialize with Python description
    centralSkillIcon.innerHTML = '<span class="material-symbols-outlined">code</span>';
    centralSkillTitle.textContent = 'Python';
    centralSkillDetails.innerHTML = `<p>${skillInfo['Python'].description}</p>`;
});
