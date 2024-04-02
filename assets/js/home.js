$(document).ready(function() {
  // Mostrar el primer slide y reproducir el video
  $('.slide:first-child').show();
  var video = $('.slide video').get(0);
  video.play(); // Reproducir el video

  // Función para cambiar de slide cada 5 segundos
  setInterval(function() {
      var currentSlide = $('.slide:visible');
      var nextSlide = currentSlide.next('.slide');
      if (nextSlide.length === 0) {
          nextSlide = $('.slide:first-child');
      }
      currentSlide.fadeOut(1000);
      nextSlide.fadeIn(1000);

      // Detener la reproducción del video actual
      var currentVideo = currentSlide.find('video').get(0);
      currentVideo.pause();

      // Reproducir el video del próximo slide
      var nextVideo = nextSlide.find('video').get(0);
      nextVideo.play();
  }, 8000);

  // Reproducir el video al tocar la pantalla en dispositivos iOS
  $(document).on('touchstart', function() {
    if (video.paused) {
      video.play();
    }
  });
});
