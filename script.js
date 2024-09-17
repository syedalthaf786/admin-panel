const ctx1 = document.getElementById('invoiceChart').getContext('2d');
        const invoiceChart = new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [
                    {
                        label: 'This week',
                        data: [20000, 40000, 35000, 50000, 55000, 75000, 60000],
                        borderColor: '#FF6384',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                    },
                    {
                        label: 'Last week',
                        data: [30000, 35000, 30000, 45000, 50000, 70000, 65000],
                        borderColor: '#36A2EB',
                        backgroundColor: 'rgba(54,162,235,0.2)',
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const ctx2 = document.getElementById('salesChart').getContext('2d');
        const salesChart = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Sales Forecast',
                    data: [50000, 60000, 70000, 80000, 90000, 100000, 110000],
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggle = document.getElementById('theme-toggle');
            const body = document.body;
            const navbar = document.querySelector('.navbar');
            const cards = document.querySelectorAll('.card');
            const sidebar = document.getElementById('sidebar');
            const navLinks = document.querySelectorAll('.nav-link');
            const searchIcon = document.querySelector('.search-icon');
    
            // Check localStorage for saved theme preference
            if (localStorage.getItem('theme') === 'dark') {
                body.classList.add('dark-mode');
                navbar.classList.add('dark-mode');
                sidebar.classList.add('dark-mode');
                cards.forEach(card => card.classList.add('dark-mode'));
                navLinks.forEach(link => link.classList.add('dark-mode'));
                searchIcon.classList.add('dark-mode');
            }
    
            themeToggle.addEventListener('click', () => {
                body.classList.toggle('dark-mode');
                navbar.classList.toggle('dark-mode');
                sidebar.classList.toggle('dark-mode');
                cards.forEach(card => card.classList.toggle('dark-mode'));
                navLinks.forEach(link => link.classList.toggle('dark-mode'));
                searchIcon.classList.toggle('dark-mode');
                
                // Save the theme preference in localStorage
                if (body.classList.contains('dark-mode')) {
                    localStorage.setItem('theme', 'dark');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Change to sun icon for light mode
                } else {
                    localStorage.setItem('theme', 'light');
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Change to moon icon for dark mode
                }
            });
        });