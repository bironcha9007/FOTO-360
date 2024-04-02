function openNewWindow3() {
    // Mensaje que deseas agregar al final de la URL
    const mensaje = 'Me%20deseo%20comunicar%20con%20ustedes';
  
    // URL a la que quieres dirigirte
    const url = `https://wa.me/573012491404?text=${mensaje}`;
  
    // Abre una nueva ventana con la URL proporcionada y algunos ajustes opcionales
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  
    // Verifica si la ventana emergente se abrió correctamente
    if (newWindow) {
      // La ventana emergente se abrió con éxito
      newWindow.focus(); // Enfoca la nueva ventana
    } else {
      // Es posible que el navegador bloquee la apertura de ventanas emergentes
      alert('La ventana emergente ha sido bloqueada por el navegador. Habilita las ventanas emergentes para ver esta página.');
    }
  };