document.addEventListener("DOMContentLoaded", function(){
  
  // Handle fixed-top navbar on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar_top');
    if (window.scrollY > 50) {
      navbar.classList.add('fixed-top');
      // add padding top to show content behind navbar
      const navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      navbar.classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });

  // Handle Offcanvas Menu
  var myOffcanvas = document.getElementById('offcanvasExample');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("OpenMenu").addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });

  // Restore the scroll position on load
  const scrollPosition = localStorage.getItem('scrollPosition');
  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
    localStorage.removeItem('scrollPosition');
  }

  // Avoid excessive refreshing of AOS on every mouse move
  let lastMouseMove = 0;
  document.addEventListener("mousemove", function(e) {
    const now = Date.now();
    if (now - lastMouseMove > 200) { // refresh AOS every 200ms to reduce excessive calls
      AOS.refresh();
      lastMouseMove = now;
    }
  });

});

// Save scroll position before unload
window.addEventListener('beforeunload', function() {
  localStorage.setItem('scrollPosition', window.scrollY);
});
