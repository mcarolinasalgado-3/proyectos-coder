// Inicializa AOS (animaciones al hacer scroll).
// - once: cada elemento se anima una sola vez.
// - disable: si el sistema pide "reducir movimiento", no se anima nada.
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 80,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
});
