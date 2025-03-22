// Function to handle all button clicks
document.addEventListener('DOMContentLoaded', function() {
    // Handle main navigation buttons
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.getAttribute('href').startsWith('http')) {
                e.preventDefault();
                const page = this.textContent.toLowerCase().trim();
                window.location.href = `${page}.html`;
            }
        });
    });

    // Handle login button
    const loginBtn = document.querySelector('.nav-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }

    // Handle schedule pickup button in hero section
    const heroBtn = document.querySelector('.hero .btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'schedule.html';
        });
    }

    // Handle dashboard sidebar menu
    const sidebarLinks = document.querySelectorAll('.sidebar-menu a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.textContent.toLowerCase().trim().replace(/\s+/g, '-');
            window.location.href = `dashboard-${page}.html`;
        });
    });

    // Handle Export Report button
    const exportBtn = document.querySelector('.dashboard-header .btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            window.location.href = 'export-report.html';
        });
    }

    // Handle Schedule Pickup form submission
    const scheduleForm = document.querySelector('#schedule form');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const wasteType = document.getElementById('pickup-type').value;
            const pickupDate = document.getElementById('pickup-date').value;
            const pickupTime = document.getElementById('pickup-time').value;
            const pickupNotes = document.getElementById('pickup-notes').value;
            
            // You could save this data to localStorage or send to server
            // For now, just redirect to confirmation page
            window.location.href = `pickup-confirmation.html?type=${wasteType}&date=${pickupDate}&time=${pickupTime}`;
        });
    }

    // Handle Cancel links in schedule table
    const cancelLinks = document.querySelectorAll('.table-container a');
    cancelLinks.forEach(link => {
        if (link.textContent === 'Cancel') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // Get the row information for the canceled pickup
                const row = this.closest('tr');
                const date = row.cells[0].textContent;
                const type = row.cells[1].textContent;
                
                // Redirect to cancel confirmation page
                window.location.href = `cancel-pickup.html?date=${date}&type=${type}`;
            });
        }
    });

    // Handle footer links
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!this.getAttribute('href').startsWith('http')) {
                e.preventDefault();
                const page = this.textContent.toLowerCase().trim().replace(/\s+/g, '-');
                window.location.href = `${page}.html`;
            }
        });
    });

    // Handle system link
    const systemLink = document.querySelector('.system-link');
    if (systemLink && !systemLink.getAttribute('href').startsWith('http')) {
        systemLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'system.html';
        });
    }
});