const isSmallScreen = window.innerWidth <= 1124;
const isMobileUA = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(navigator.userAgent);

if (!isSmallScreen && !isMobileUA) {
  // Load your app for desktop browsers
  const script = document.createElement('script');
  script.src = 'flutter_bootstrap.js';
  script.async = true;
  document.body.appendChild(script);
} else {
  // Show under development message for mobile/tablet or small screens
  document.body.innerHTML = `
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        font-family: sans-serif;
        text-align: center;
        padding: 1rem;
        margin: 0;
        background: #f5f5f5;
      }
      img {
        max-width: 200px;
        margin-bottom: 1rem;
      }
    </style>
    <div>
     
      <h2>Under Development</h2>
      <p>This app is currently only available on desktop browsers with full screen view.</p>
      <p>Please check back later for mobile support.</p>
    </div>
  `;
}