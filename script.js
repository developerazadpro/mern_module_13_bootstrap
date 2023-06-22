
    // Toggle light/dark mode
    function toggleDarkMode() {
      const body = document.body;
      body.classList.toggle('dark-mode');
    }
   

    // Canvas
    window.addEventListener('load', function () {
      const canvas = document.getElementById('myCanvas');
      const context = canvas.getContext('2d');

      // Drawing code here
      context.fillStyle = '#FF0000';
      context.fillRect(50, 50, 100, 100);
    });
