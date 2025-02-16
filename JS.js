const obrasDeArte = [
    { 
     titulo: "La Noche Estrellada", 
     id:1,
     autor: "Vincent van Gogh", 
     imagen: "http://rosasart.lovestoblog.com/arte/imagenes/1.jpg" },
        //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "El Beso", 
        id:2, 
        autor: "Gustav Klimt", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/2.jpg" },
        //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "La Mona Lisa",
        id:3, 
        autor: "Leonardo da vinci", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/3.jpeg" },
        //-------------imagen ----------------------------------------------------------------------------

    { 
        titulo: "Las Meninas",
        id:4, 
        autor: "Diego de Velázquez", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/4.jpg" },
        //-------------imagen ----------------------------------------------------------------------------

    { 
        titulo: "La Capilla Sixtina",
        id:5, 
        autor: "Miguel Ángel", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/5.jpg" },
        //-------------imagen ----------------------------------------------------------------------------

    { 
        titulo: "El nacimiento de Venus",
        id:6, 
        autor: "Botticelli", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/6.jpg" },
        //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "La joven de la perla", 
        id:7,
        autor: "Johannes Vermeer", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/7.jpg" },
        //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "La Gran ola de Kanagaza", 
        id:8,
        autor: "Katsushika Hokusai", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/8.jpg" },
        //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "La última cena",
        id:9, 
        autor: "Leonardo da Vinci", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/9.jpg" },
          //-------------imagen ----------------------------------------------------------------------------

    { 
        titulo: "La escuela de Atenas", 
        id:10,
        autor: "Rafael", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/10.jpg" },
        //-------------imagen ----------------------------------------------------------------------------

    { 
        titulo: " Los girasoles", 
        id:11,
        autor: "Vincent Van Gogh", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/11.jpg" },
        //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: " Autorretrato", 
        id:12,
        autor: "Vincent Van Gogh", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/12.jpg" },
          //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "El columpio", 
        id:13,
        autor: "Fragonard", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/13.jpg" },
      //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "El jardín de la casa de Monet en Giverny", 
        id:14,
        autor: "de Claude Monet", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/14.jpg" },
      //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "Lirios ", 
        id:15,
        autor: "Vincent Van Gogh", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/15.jpg" },
      //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "Terraza de café por la noche", 
        id:16,
        autor: "Vincent Van Gogh", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/16.jpg" },
      //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "Noche estrellada sobre el Ródano", 
        id:17,
        autor: "Vincent Van Gogh", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/17.jpg" },
      //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "Trigal con cuervos",
        id:18, 
        autor: "Vincent Van Gogh", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/18.jpg" },
      //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "Almendro en flor", 
        id:19,
        autor: "Vincent Van Gogh", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/19.jpg" },
      //-------------imagen ----------------------------------------------------------------------------
    { 
        titulo: "El dormitorio en Arlés", 
        id:20,
        autor: "Vincent Van Gogh", 
        imagen: "http://rosasart.lovestoblog.com/arte/imagenes/20.jpg" }
      //-------------imagen ----------------------------------------------------------------------------
];

// Evento para cambiar la imagen de fondo
document.getElementById('button').addEventListener('click', () => {
    // Seleccionar una obra de arte aleatoria
    const obraAleatoria = obrasDeArte[Math.floor(Math.random() * obrasDeArte.length)];

    // Cambiar la imagen de fondo del body
    document.body.style.backgroundImage = `url(${obraAleatoria.imagen})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

    // Mostrar la información de la obra
    document.getElementById('info').textContent = `${obraAleatoria.titulo} por ${obraAleatoria.autor}`;
});