$(document).ready(function () {
    // Función para reproducir automáticamente el video activo al cargar la página
    var activeVideo = $('.thumbnail.active').data('video');
    $('#video').attr('src', activeVideo);
     // Reproducir automáticamente el video activo

    $('.thumbnail').click(function() {
        var videoSrc = $(this).data('video');
        $('#video').attr('src', videoSrc);
        $('.thumbnail').removeClass('active');
        $(this).addClass('active');
        $('#video')[0].play();
    });

    $('.thumbnail img').hover(function () {
        // Obtener el texto del atributo alt
        var altText = $(this).attr('alt');

        // Crear la burbuja de mensaje con el texto del alt
        var altBubble = $('<div class="alt-bubble">' + altText + '</div>');

        // Posicionar la burbuja de mensaje junto a la imagen
        var imgPosition = $(this).offset();
        var imgWidth = $(this).width();
        var imgHeight = $(this).height();
        var bubbleWidth = altBubble.outerWidth();
        var bubbleHeight = altBubble.outerHeight();
        var leftPosition = imgPosition.left + (imgWidth / 2) - (bubbleWidth / 2);
        var topPosition = imgPosition.top + imgHeight + 10; // 10px de separación desde la parte inferior de la imagen

        // Establecer la posición de la burbuja de mensaje
        altBubble.css({
            left: leftPosition,
            top: topPosition
        });

        // Añadir la burbuja de mensaje al cuerpo del documento
        $('body').append(altBubble);
    }, function () {
        // Función para ocultar la burbuja de mensaje al quitar el ratón de la imagen
        $('.alt-bubble').remove(); // Remover la burbuja de mensaje del documento
    });

    // Desactivar el audio de todos los videos
    $('video').prop('muted', true);
});
