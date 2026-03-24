// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== TOOLS SECTION ====================
    const toolsList = ["Python", "MATLAB", "PyTorch", "TensorFlow", "OpenCV", "Power BI", "LaTeX", "Blender"];
    const toolsGrid = document.getElementById('toolsGrid');
    
    if(toolsGrid) {
        toolsList.forEach(tool => {
            const span = document.createElement('span');
            span.className = 'tool-item';
            span.textContent = tool;
            toolsGrid.appendChild(span);
        });
    }
    
    // ==================== STATS SECTION ====================
    const statsData = [
        { number: "10+", label: "Projects" },
        { number: "5+", label: "AI Models" },
        { number: "3+", label: "Research Projects" },
        { number: "∞", label: "Photography & Content" }
    ];
    const statsContainer = document.getElementById('statsContainer');
    
    if(statsContainer) {
        statsData.forEach(stat => {
            const card = document.createElement('div');
            card.className = 'stat-card';
            card.innerHTML = `
                <div class="stat-number">${stat.number}</div>
                <div>${stat.label}</div>
            `;
            statsContainer.appendChild(card);
        });
    }
    
    // ==================== PROJECTS SECTION ====================
    const projects = [
        { title: "Face Detection & Recognition System", desc: "Real-time detection using OpenCV & deep learning (Python).", icon: "fas fa-face-smile" },
        { title: "Sleep Health Regression Analysis", desc: "Statistical modeling & ML to predict sleep quality metrics.", icon: "fas fa-chart-line" },
        { title: "Graph Clustering Algorithms", desc: "Spectral clustering & community detection on complex networks.", icon: "fas fa-project-diagram" },
        { title: "Power BI QHSE Dashboard", desc: "Interactive safety dashboard for industrial KPIs and reporting.", icon: "fas fa-chart-pie" },
        { title: "Mathematical Modeling Projects", desc: "ODE systems, epidemiology & population dynamics simulations.", icon: "fas fa-square-root-alt" },
        { title: "Photography Portfolio", desc: "Creative visual storytelling & travel content collection.", icon: "fas fa-camera" }
    ];
    
    const projectsGrid = document.getElementById('projectsGrid');
    
    if(projectsGrid) {
        projects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-icon"><i class="${proj.icon}"></i></div>
                <h3>${proj.title}</h3>
                <p>${proj.desc}</p>
            `;
            projectsGrid.appendChild(card);
        });
    }
    
    // ==================== SKILLS SECTION ====================
    const skillsSet = [
        { name: "Python", percent: 92 },
        { name: "MATLAB", percent: 88 },
        { name: "Machine Learning", percent: 85 },
        { name: "Deep Learning", percent: 82 },
        { name: "Computer Vision", percent: 80 },
        { name: "Optimization", percent: 78 },
        { name: "Data Analysis", percent: 85 },
        { name: "LaTeX", percent: 90 },
        { name: "Power BI", percent: 75 },
        { name: "Blender", percent: 70 }
    ];
    
    const skillsContainer = document.getElementById('skillsContainer');
    const mid = Math.ceil(skillsSet.length / 2);
    const leftSkills = skillsSet.slice(0, mid);
    const rightSkills = skillsSet.slice(mid);
    
    function renderSkillGroup(skillsArray) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'skills-group';
        skillsArray.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'skill-item';
            skillDiv.innerHTML = `
                <div class="skill-name"><span>${skill.name}</span><span>${skill.percent}%</span></div>
                <div class="progress-bar"><div class="progress-fill" data-width="${skill.percent}"></div></div>
            `;
            groupDiv.appendChild(skillDiv);
        });
        return groupDiv;
    }
    
    if(skillsContainer) {
        skillsContainer.appendChild(renderSkillGroup(leftSkills));
        skillsContainer.appendChild(renderSkillGroup(rightSkills));
    }
    
    // ==================== PROGRESS BAR ANIMATION ====================
    const fillBars = () => {
        const progressFills = document.querySelectorAll('.progress-fill');
        progressFills.forEach(fill => {
            const width = fill.getAttribute('data-width');
            if(width && !fill.style.width) {
                fill.style.width = width + '%';
            }
        });
    };
    
    // Intersection Observer for skills animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                fillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const skillsSection = document.getElementById('skills');
    if(skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Fallback: animate immediately if visible
    setTimeout(fillBars, 200);
    
    // ==================== SMOOTH SCROLLING ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if(href === "#" || href === "") return;
            const targetElem = document.querySelector(href);
            if(targetElem) {
                e.preventDefault();
                targetElem.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // ==================== VIEW WORK BUTTON ====================
    const viewWorkBtn = document.getElementById('viewWorkBtn');
    if(viewWorkBtn) {
        viewWorkBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if(projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // ==================== DOWNLOAD CV BUTTON ====================
    const downloadBtn = document.getElementById('downloadCVBtn');
    if(downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create CV content
            const cvContent = `OUSSAMA ZEROUAL - CURRICULUM VITAE
================================

CONTACT INFORMATION
-------------------
Email: oussama.zeroual@example.com
Location: Algiers, Algeria
GitHub: github.com/oussama-zeroual
LinkedIn: linkedin.com/in/oussama-zeroual

PROFESSIONAL SUMMARY
--------------------
Applied Mathematics Engineer specializing in AI & Mathematical Modeling. 
Expertise in machine learning, computer vision, optimization, and data science. 
Passionate about solving complex problems through mathematical approaches and creative thinking.

EDUCATION
---------
Master's in Applied Mathematics | Specialization: Modeling & Simulation
Bachelor's in Mathematics | Major: Applied Mathematics

TECHNICAL SKILLS
----------------
• Programming: Python, MATLAB, SQL
• AI/ML: PyTorch, TensorFlow, Scikit-learn, OpenCV
• Data Analysis: Power BI, Pandas, NumPy
• Tools: LaTeX, Git, Blender
• Languages: Arabic (Native), English (Fluent), French (Intermediate)

KEY PROJECTS
------------
• Face Detection & Recognition System - Real-time computer vision application
• Sleep Health Regression Analysis - ML model for sleep quality prediction
• Graph Clustering Algorithms - Spectral clustering on complex networks
• Power BI QHSE Dashboard - Interactive industrial safety dashboard
• Mathematical Modeling Projects - ODE systems and population dynamics

CERTIFICATIONS & ACHIEVEMENTS
-----------------------------
• 10+ Completed Projects
• 5+ Deployed AI Models
• 3+ Research Publications (in progress)

INTERESTS
---------
Photography, Travel Content Creation, Mathematical Biology, Open Source Contribution

REFERENCES
----------
Available upon request.

--- This CV was generated from Oussama Zeroual's Portfolio Website ---`;
            
            // Create download
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Oussama_Zeroual_CV.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            
            // Show toast notification
            showToast('📄 CV downloaded successfully!');
        });
    }
    
    // ==================== TOAST NOTIFICATION FUNCTION ====================
    function showToast(message) {
        const toast = document.createElement('div');
        toast.innerText = message;
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#1e293b';
        toast.style.color = 'white';
        toast.style.padding = '12px 20px';
        toast.style.borderRadius = '30px';
        toast.style.fontSize = '0.85rem';
        toast.style.zIndex = '999';
        toast.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        toast.style.animation = 'slideIn 0.3s ease';
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    // ==================== ADD ANIMATION STYLES ====================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ==================== UPDATE FOOTER YEAR ====================
    const footer = document.querySelector('.footer p');
    if(footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `© ${currentYear} Oussama Zeroual — Applied Mathematics & AI Portfolio`;
    }
    
    // ==================== ADD HOVER EFFECT TO STAT CARDS ====================
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // ==================== CONSOLE LOG ====================
    console.log('Portfolio website loaded successfully! 🚀');
});