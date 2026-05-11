// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    // 1. 光标跟随逻辑
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // 延迟跟随效果
        setTimeout(() => {
            follower.style.left = e.clientX - 11 + 'px';
            follower.style.top = e.clientY - 11 + 'px';
        }, 50);
    });

    // 2. 悬停交互
    const interactiveElements = document.querySelectorAll('a, .card, .photo-item, button');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.style.transform = 'scale(2)';
            follower.style.background = 'rgba(166, 139, 103, 0.05)';
        });
        el.addEventListener('mouseleave', () => {
            follower.style.transform = 'scale(1)';
            follower.style.background = 'transparent';
        });
    });

    // 3. 滚动揭示
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
