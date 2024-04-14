// Datos de las escalas y notas para la Trompeta
const escalasTrompeta = [
  { nombre: 'Do', notas: [
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796048/WhatsApp_Image_2024-04-08_at_6.26.46_PM_csald7.jpg', descripcion: 'Sopla en el interior de la trompeta sin presionar ninguna válvula para emitir la nota do.' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Presiona los botones primero y tercero para tocar la nota re.' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Toca esta nota presionando las válvulas primera y segunda.' },
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Mantén pulsada la primera válvula para tocar la nota fa.' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Presiona los botones primero y tercero para tocar la nota Sol. Vibra los labios más rápido para tocar la nota sol. ' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Para tocar la nota la, presiona las válvulas primera y segunda mientras usas la misma fuerza usada para tocar la nota sol.' },
    { nombre: 'B', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796205/WhatsApp_Image_2024-04-08_at_6.27.26_PM_xenbh5.jpg', descripcion: 'Presiona la segunda válvula para tocar la nota si.' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796048/WhatsApp_Image_2024-04-08_at_6.26.46_PM_csald7.jpg', descripcion: 'Sopla en el interior de la trompeta sin presionar ninguna válvula para emitir la nota do.' }
  ] },
  { nombre: 'Sol', notas: [
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Sol' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota La' },
    { nombre: 'B', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796205/WhatsApp_Image_2024-04-08_at_6.27.26_PM_xenbh5.jpg', descripcion: 'Nota Si' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796048/WhatsApp_Image_2024-04-08_at_6.26.46_PM_csald7.jpg', descripcion: 'Nota Do' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Re' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota Mi' },
    { nombre: 'F#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796205/WhatsApp_Image_2024-04-08_at_6.27.26_PM_xenbh5.jpg', descripcion: 'Para tocar Fa# en la trompeta, debes presionar el segundo y tercer pistón simultáneamente con la mano derecha.' },
    { nombre: 'G#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Sol' }
  ] },
  { nombre: 'Re', notas: [
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Re' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota Mi' },
    { nombre: 'F#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796205/WhatsApp_Image_2024-04-08_at_6.27.26_PM_xenbh5.jpg', descripcion: 'Para tocar Fa# en la trompeta, debes presionar el segundo y tercer pistón simultáneamente con la mano derecha.' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Sol' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota La' },
    { nombre: 'B', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796205/WhatsApp_Image_2024-04-08_at_6.27.26_PM_xenbh5.jpg', descripcion: 'Nota Si' },
    { nombre: 'C#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Para tocar Do# en la trompeta, debes presionar el primer y tercer pistón simultáneamente con la mano derecha.' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Re' }
  ] },
  { nombre: 'La', notas: [
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota La' },
    { nombre: 'B', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796205/WhatsApp_Image_2024-04-08_at_6.27.26_PM_xenbh5.jpg', descripcion: 'Nota Si' },
    { nombre: 'C#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Para tocar Do# en la trompeta, debes presionar el primer y tercer pistón simultáneamente con la mano derecha.' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota Re' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota Mi' },
    { nombre: 'F#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796205/WhatsApp_Image_2024-04-08_at_6.27.26_PM_xenbh5.jpg', descripcion: 'Para tocar Fa# en la trompeta, debes presionar el segundo y tercer pistón simultáneamente con la mano derecha.' },
    { nombre: 'G#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713052531/Screenshot_2024-04-13_185436_i0hoak.png', descripcion: 'Para tocar Sol# en la trompeta, debes presionar el primer, segundo y tercer pistón simultáneamente con la mano derecha.' },
    { nombre: 'A#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota La#' }
  ] },
  { nombre: 'Mi Bemol', notas: [
    { nombre: 'Eb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713052531/Screenshot_2024-04-13_185436_i0hoak.png', descripcion: 'Para tocar Mi♭ en la trompeta, debes presionar el primer pistón (índice) con la mano derecha.' },
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Nota Fa' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Sol' },
    { nombre: 'Ab', imagen: 'url_imagen_Ab_mi_bemol.jpg', descripcion: 'Para tocar La♭ en la trompeta, debes presionar el segundo pistón (medio) con la mano derecha.' },
    { nombre: 'Bb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Para tocar Si♭ en la trompeta, debes presionar el primer y segundo pistón simultáneamente con la mano derecha.' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796048/WhatsApp_Image_2024-04-08_at_6.26.46_PM_csald7.jpg', descripcion: 'Nota Do' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Re' },
    { nombre: 'Eb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053063/Screenshot_2024-04-13_190350_gcbvmw.png', descripcion: 'Para tocar Mi♭ en la trompeta, debes presionar el primer pistón (índice) con la mano derecha.' }
  ] },
  { nombre: 'Si Bemol', notas: [
    { nombre: 'Bb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Nota Si bemol' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796048/WhatsApp_Image_2024-04-08_at_6.26.46_PM_csald7.jpg', descripcion: 'Nota Do' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Re' },
    { nombre: 'Eb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053063/Screenshot_2024-04-13_190350_gcbvmw.png', descripcion: 'Para tocar Mi♭ en la trompeta, debes presionar el primer pistón (índice) con la mano derecha.' },
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Nota Fa' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Sol' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota La' },
    { nombre: 'Bb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Para tocar Si♭ en la trompeta, debes presionar el primer y segundo pistón simultáneamente con la mano derecha.' }
  ] },
  { nombre: 'Fa', notas: [
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Nota Fa' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796048/WhatsApp_Image_2024-04-08_at_6.26.46_PM_csald7.jpg', descripcion: 'Nota Sol' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota La' },
    { nombre: 'Bb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Nota Si bemol' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796048/WhatsApp_Image_2024-04-08_at_6.26.46_PM_csald7.jpg', descripcion: 'Nota Do' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796082/WhatsApp_Image_2024-04-08_at_6.26.56_PM_vfzmey.jpg', descripcion: 'Nota Re' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796146/WhatsApp_Image_2024-04-08_at_6.27.05_PM_itt4xb.jpg', descripcion: 'Nota Mi' },
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712796179/WhatsApp_Image_2024-04-08_at_6.27.16_PM_ks4597.jpg', descripcion: 'Nota Fa' }
  ] }
  // Puedes agregar más escalas según sea necesario
];

document.addEventListener('DOMContentLoaded', function() {
  const cartasTrompetaContainer = document.getElementById('cartas-trompeta');
  const notasTrompetaContainer = document.getElementById('notas-trompeta');

  // Función para crear las cartas de las escalas en la Trompeta
  function crearCartasEscalasTrompeta() {
    escalasTrompeta.forEach(escala => {
      const cartaEscala = document.createElement('div');
      cartaEscala.classList.add('carta');
      cartaEscala.innerHTML = `
        <h3>${escala.nombre}</h3>
      `;
      cartaEscala.addEventListener('click', function() {
        mostrarNotas(escala);
      });
      cartasTrompetaContainer.appendChild(cartaEscala);
    });
  }

  // Función para mostrar las notas al hacer clic en una carta
  function mostrarNotas(escala) {
    // Limpiar notas anteriores si las hay
    while (notasTrompetaContainer.firstChild) {
      notasTrompetaContainer.removeChild(notasTrompetaContainer.firstChild);
    }

    // Crear elementos para mostrar las notas y sus descripciones
    escala.notas.forEach(nota => {
      const notaElemento = document.createElement('div');
      notaElemento.classList.add('nota');
      notaElemento.textContent = nota.nombre;

      const descripcionElemento = document.createElement('p');
      descripcionElemento.textContent = nota.descripcion;

      const imagenElemento = document.createElement('img');
      imagenElemento.src = nota.imagen;
      imagenElemento.alt = `Imagen de la nota ${nota.nombre}`;

      const contenedorNota = document.createElement('div');
      contenedorNota.classList.add('contenedor-nota');
      contenedorNota.appendChild(notaElemento);
      contenedorNota.appendChild(descripcionElemento);
      contenedorNota.appendChild(imagenElemento);

      notasTrompetaContainer.appendChild(contenedorNota);
    });
  }

  // Llama a la función para crear las cartas al cargar la página
  crearCartasEscalasTrompeta();
});
// Datos de las escalas para el Saxofón Alto
const escalasSaxofonAlto = [
  { nombre: 'Do', notas: [
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670187/DOSAXOFON_st6z7f.jpg', descripcion: 'Para tocar Do en el saxofón alto, debes presionar la tecla del dedo índice de la mano izquierda (la tecla principal en la parte delantera) y no presionar ninguna otra tecla con ninguna otra mano.' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670212/RESAXOFON_cvvdho.jpg', descripcion: 'Para tocar Re en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda y la tecla del dedo medio de la mano izquierda al mismo tiempo. Los demás dedos de esa mano deben estar en reposo, sin presionar ninguna otra tecla.' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670236/MISAXOFON_vck5mv.jpg', descripcion: 'Para tocar Mi en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda y la tecla del dedo anular de la mano derecha al mismo tiempo. ' },
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670262/FASAXOFON_qnngce.jpg', descripcion: 'Para tocar Fa en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda y la tecla del dedo anular de la mano izquierda al mismo tiempo.' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670292/SOLSAXOFON_eunnbs.jpg', descripcion: 'Para tocar Sol en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda y la tecla del dedo anular de la mano izquierda. ' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670318/LASAXOFON_bi1itv.jpg', descripcion: 'Para tocar La en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda, la tecla del dedo anular de la mano izquierda y la tecla del dedo meñique de la mano izquierda. ' },
    { nombre: 'B', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670343/SISAXOFON_abwmur.jpg ', descripcion: 'Para tocar Si en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda, la tecla del dedo anular de la mano izquierda y la tecla del dedo meñique de la mano izquierda. ' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670187/DOSAXOFON_st6z7f.jpg', descripcion: 'Nota Do#' }
  ] },
  { nombre: 'Sol', notas: [
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670292/SOLSAXOFON_eunnbs.jpg', descripcion: 'Nota Sol' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670318/LASAXOFON_bi1itv.jpg', descripcion: 'Nota La' },
    { nombre: 'B', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670343/SISAXOFON_abwmur.jpg', descripcion: 'Nota Si' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670187/DOSAXOFON_st6z7f.jpg', descripcion: 'Nota Do' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670212/RESAXOFON_cvvdho.jpg', descripcion: 'Nota Re' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670236/MISAXOFON_vck5mv.jpg', descripcion: 'Nota Mi' },
    { nombre: 'F#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Grayscale/v1713053246/Screenshot_2024-04-13_190654_hd1a5l.png', descripcion: 'Para tocar Fa# en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda y la tecla del dedo anular de la mano izquierda. ' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670292/SOLSAXOFON_eunnbs.jpg', descripcion: 'Nota Sol#' }
  ] },
  { nombre: 'Re', notas: [
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670212/RESAXOFON_cvvdho.jpg', descripcion: 'Nota Re' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670236/MISAXOFON_vck5mv.jpg', descripcion: 'Nota Mi' },
    { nombre: 'F#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Grayscale/v1713053246/Screenshot_2024-04-13_190654_hd1a5l.png', descripcion: 'Nota Fa#' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670292/SOLSAXOFON_eunnbs.jpg', descripcion: 'Nota Sol' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670318/LASAXOFON_bi1itv.jpg', descripcion: 'Nota La' },
    { nombre: 'B', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670343/SISAXOFON_abwmur.jpg', descripcion: 'Nota Si' },
    { nombre: 'C#', imagen: 'url_imagen_C#_re.jpg', descripcion: 'Para tocar Do# en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda y la tecla del dedo anular de la mano derecha' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670212/RESAXOFON_cvvdho.jpg', descripcion: 'Descripción de la nota Re' }
  ] },
  { nombre: 'La', notas: [
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670318/LASAXOFON_bi1itv.jpg', descripcion: 'Nota La' },
    { nombre: 'B', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670343/SISAXOFON_abwmur.jpg', descripcion: 'Nota Si' },
    { nombre: 'C#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Grayscale/v1713053395/Screenshot_2024-04-13_190930_dprlbt.png', descripcion: 'Para tocar Do# en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda y la tecla del dedo anular de la mano derecha' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670212/RESAXOFON_cvvdho.jpg', descripcion: 'Nota Re' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670236/MISAXOFON_vck5mv.jpg', descripcion: 'Nota Mi' },
    { nombre: 'F#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Grayscale/v1713053246/Screenshot_2024-04-13_190654_hd1a5l.png', descripcion: 'Para tocar Fa# en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda y la tecla del dedo anular de la mano izquierda.' },
    { nombre: 'G#', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670292/SOLSAXOFON_eunnbs.jpg', descripcion: 'Para tocar Sol# en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda, la tecla del dedo anular de la mano izquierda y la tecla del dedo índice de la mano derecha.' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670318/LASAXOFON_bi1itv.jpg', descripcion: 'Descripción de la nota La' }
  ] },
  { nombre: 'Mi Bemol', notas: [
    { nombre: 'Eb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053626/Screenshot_2024-04-13_191316_sq4t6g.png', descripcion: 'Para tocar Mi♭ en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda y la tecla del dedo anular de la mano derecha.' },
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670262/FASAXOFON_qnngce.jpg', descripcion: 'Nota Fa' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670292/SOLSAXOFON_eunnbs.jpg', descripcion: 'Nota Sol' },
    { nombre: 'Ab', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713054456/Screenshot_2024-04-13_192700_x8gdwe.png', descripcion: 'Para tocar La♭ en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda y la tecla del dedo anular de la mano derecha.' },
    { nombre: 'Bb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053743/Screenshot_2024-04-13_191516_dewayb.png', descripcion: 'DPara tocar Si♭ en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda, la tecla del dedo anular de la mano izquierda y la tecla del dedo meñique de la mano izquierda.' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670187/DOSAXOFON_st6z7f.jpg', descripcion: 'Nota Do' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670212/RESAXOFON_cvvdho.jpg', descripcion: 'Nota Re' },
    { nombre: 'Eb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053626/Screenshot_2024-04-13_191316_sq4t6g.png', descripcion: 'Descripción de la nota Mi bemol' }
  ] },
  { nombre: 'Si Bemol', notas: [
    { nombre: 'Bb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053743/Screenshot_2024-04-13_191516_dewayb.png', descripcion: 'Para tocar Si♭ en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda, la tecla del dedo anular de la mano izquierda y la tecla del dedo meñique de la mano izquierda.' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670187/DOSAXOFON_st6z7f.jpg', descripcion: 'Nota Do' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670212/RESAXOFON_cvvdho.jpg', descripcion: 'Nota Re' },
    { nombre: 'Eb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053626/Screenshot_2024-04-13_191316_sq4t6g.png', descripcion: 'Descripción de la nota Mi bemol' },
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670262/FASAXOFON_qnngce.jpg', descripcion: 'Nota Fa' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670292/SOLSAXOFON_eunnbs.jpg', descripcion: 'Nota Sol' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670318/LASAXOFON_bi1itv.jpg', descripcion: 'Nota La' },
    { nombre: 'Bb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053743/Screenshot_2024-04-13_191516_dewayb.png', descripcion: 'Para tocar Si♭ en el saxofón alto, debes presionar la tecla principal con el dedo índice de la mano izquierda, la tecla del dedo medio de la mano izquierda, la tecla del dedo anular de la mano izquierda y la tecla del dedo meñique de la mano izquierda.' }
  ] },
  { nombre: 'Fa', notas: [
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670262/FASAXOFON_qnngce.jpg', descripcion: 'Nota Fa' },
    { nombre: 'G', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670292/SOLSAXOFON_eunnbs.jpg', descripcion: 'Nota Sol' },
    { nombre: 'A', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670318/LASAXOFON_bi1itv.jpg', descripcion: 'Nota La' },
    { nombre: 'Bb', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1713053743/Screenshot_2024-04-13_191516_dewayb.png', descripcion: 'Nota Si bemol' },
    { nombre: 'C', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670187/DOSAXOFON_st6z7f.jpg', descripcion: 'Nota Do' },
    { nombre: 'D', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670212/RESAXOFON_cvvdho.jpg', descripcion: 'Nota Re' },
    { nombre: 'E', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670236/MISAXOFON_vck5mv.jpg', descripcion: 'Nota Mi' },
    { nombre: 'F', imagen: 'https://res.cloudinary.com/dlk4xudjs/image/upload/t_Thumbnail/v1712670262/FASAXOFON_qnngce.jpg', descripcion: 'Nota Fa' }
  ] }
  // Puedes agregar más escalas según sea necesario
];

document.addEventListener('DOMContentLoaded', function() {
  const cartasSaxofonAltoContainer = document.getElementById('cartas-saxofon-alto');
  const notasSaxofonAltoContainer = document.getElementById('notas-saxofon-alto');

  // Función para crear las cartas de las escalas en el Saxofón Alto
  function crearCartasEscalasSaxofonAlto() {
    escalasSaxofonAlto.forEach(escala => {
      const cartaEscala = document.createElement('div');
      cartaEscala.classList.add('carta');
      cartaEscala.innerHTML = `
        <h3>${escala.nombre}</h3>
      `;
      cartaEscala.addEventListener('click', function() {
        mostrarNotas(escala);
      });
      cartasSaxofonAltoContainer.appendChild(cartaEscala);
    });
  }

  // Función para mostrar las notas al hacer clic en una carta
  function mostrarNotas(escala) {
    // Limpiar notas anteriores si las hay
    while (notasSaxofonAltoContainer.firstChild) {
      notasSaxofonAltoContainer.removeChild(notasSaxofonAltoContainer.firstChild);
    }

    // Crear elementos para mostrar las notas y sus descripciones
    escala.notas.forEach(nota => {
      const notaElemento = document.createElement('div');
      notaElemento.classList.add('nota');
      notaElemento.textContent = nota.nombre;

      const descripcionElemento = document.createElement('p');
      descripcionElemento.textContent = nota.descripcion;

      const imagenElemento = document.createElement('img');
      imagenElemento.src = nota.imagen;
      imagenElemento.alt = `Imagen de la nota ${nota.nombre}`;

      const contenedorNota = document.createElement('div');
      contenedorNota.classList.add('contenedor-nota');
      contenedorNota.appendChild(notaElemento);
      contenedorNota.appendChild(descripcionElemento);
      contenedorNota.appendChild(imagenElemento);

      notasSaxofonAltoContainer.appendChild(contenedorNota);
    });
  }

  // Llama a la función para crear las cartas al cargar la página
  crearCartasEscalasSaxofonAlto();
});
