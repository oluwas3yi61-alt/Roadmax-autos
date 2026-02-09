// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const modal = document.getElementById('authModal');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.tab-content');

    // Open modal functions
    loginBtn?.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.getElementById('loginTab').classList.add('active');
        document.getElementById('signupTab').classList.remove('active');
        document.querySelector('.tab-btn[data-tab="login"]').classList.add('active');
        document.querySelector('.tab-btn[data-tab="signup"]').classList.remove('active');
    });

    signupBtn?.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.getElementById('signupTab').classList.add('active');
        document.getElementById('loginTab').classList.remove('active');
        document.querySelector('.tab-btn[data-tab="signup"]').classList.add('active');
        document.querySelector('.tab-btn[data-tab="login"]').classList.remove('active');
    });

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs and buttons
            tabs.forEach(tab => tab.classList.remove('active'));
            tabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked tab and button
            document.getElementById(`${tabId}Tab`).classList.add('active');
            btn.classList.add('active');
        });
    });

    // Form submission handling
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login functionality would be implemented in a real application.');
        modal.style.display = 'none';
    });

    document.getElementById('signupForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Account created successfully! You can now log in.');
        modal.style.display = 'none';
    });
});
