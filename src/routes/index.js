import express from 'express';
const router = express.Router();

//datos estaticos de las obras de arte
const obrasArte = [
    {
        id: 1,
        titulo: "El Guardián del Desierto y el Sol Eterno",
        autor: "Elena Castillo",
        año: 2021,
        descripcion: "El artista podría estar explorando temas de aislamiento, la necesidad de pertenecer al entorno y la interacción entre lo orgánico y lo espiritual. Hay quienes interpretan la obra como un homenaje a los guardianes del equilibrio entre la vida y el desierto, mientras otros ven en ella la lucha interna del ser humano frente a la inmensidad de la naturaleza. El Guardián del Desierto y el Sol Eterno nos invita a reflexionar sobre nuestra propia conexión con los espacios inhóspitos pero bellos de nuestro mundo, y sobre las historias que podría contar el viento que atraviesa sus paisajes.",
        imagen: "/img/obra1.jpg"
    },
    {
        id: 2,
        titulo: "Convergencia Urbana",
        autor: "Miguel Serrano",
        año: 2019,
        descripcion: "Un estudio visual del ritmo de la vida urbana moderna, donde líneas geométricas y colores vibrantes representan el constante movimiento y energía de las grandes ciudades. La obra captura la sensación de estar en medio del bullicio metropolitano.",
        imagen: "/img/obra2.jpg"
    },
    {
        id: 3,
        titulo: "El Refugio de la Piña Solitaria",
        autor: "Laura Méndez",
        año: 2022,
        descripcion: "Es una obra que parece encapsular un poema visual de nostalgia y misterio. En este paisaje surrealista, los elementos naturales y artificiales se encuentran como actores de una historia olvidada. En el centro de esta escena, una pequeña casa de techo de paja se erige como un bastión de memoria. Sus paredes, desgastadas por el tiempo, cuentan historias de un antiguo habitante que buscó refugio en su interior, lejos del ruido del mundo.",
        imagen: "/img/obra3.webp"
    },
    {
        id: 4,
        titulo: "Metamorfosis Digital",
        autor: "Gabriel Torres",
        año: 2020,
        descripcion: "Una exploración de la intersección entre tecnología y naturaleza, donde elementos orgánicos se transforman gradualmente en patrones digitales. La obra cuestiona la frontera cada vez más difusa entre lo natural y lo artificial en nuestra sociedad.",
        imagen: "/img/obra4.png"
    },
    {
        id: 5,
        titulo: "Expansión Cromática",
        autor: "Sofía Vega",
        año: 2023,
        descripcion: "Un estudio expresivo sobre el color y su capacidad para transmitir emociones. A través de capas superpuestas de pigmentos vibrantes, la artista crea un efecto visual de expansión y movimiento que cambia según la perspectiva del observador.",
        imagen: "/img/obra5.jpg"
    }
]

//ruta para la pagina principal
router.get('/', (req, res) => {
    res.render('index', {
        titulo: 'MuseArte - Museo Virtual de Arte Moderno',
        obrasDestacadas: obrasArte.slice(0, 3) // Muestra solo las primeras 3 obras
    });
});

//ruta de galeria
router.get('/galeria',(req,res) =>{
    res.render('galeria', {
        titulo:'Galeria - MuseArte',
        obras: obrasArte // Muestra todas las obras
    });
});

//ruta detalle de la obra   
router.get('/obra/:id', (req, res) => {
    const Id = parseInt(req.params.id, 10); // Convertir el id a un número entero
    const obra = obrasArte.find(obra => obra.id === Id); // Buscar la obra por id
    if (obra) { // Si se encuentra la obra
        res.render('obra', { // Cambiar 'detalle' por 'obra'
            titulo: `Detalle de la Obra - ${obra.titulo}`, // Titulo de la pagina
            obra: obra // Pasar la obra encontrada a la vista
        });
    } else {
        // ...
        res.status(404).render('404', { // Renderizar la vista 404 si no se encuentra la obra
            titulo: 'Obra no encontrada',// Titulo de la pagina
            mensaje: 'La obra que buscas no existe en nuestra galería.'// Mensaje de error
        });
    }
});

//ruta acerca de
router.get('/acerca',(req,res) =>{
    res.render('acerca', {
        titulo:'Acerca de - MuseArte',
        autor:{
            nombre:'Dana Valentina Pacheco',
            descripcion:'Proyecto para el parcial de programacion web con la profesora Yuli Andrea Álvarez Pizarro',
        },
        proyecto:{
            descripcion: "MuseArte es un museo virtual que busca acercar el arte moderno a todos los amantes de las expresiones artísticas contemporáneas. Este proyecto fue desarrollado utilizando Node.js, Express y Pug como parte de una práctica académica."
        }
    });
});

//renderizar el inico de la pagina principal
router.get('/inicio', (req, res) => {
    res.redirect('/'); // Redirigir a la página principal
});

export default router; // Exportar el router para usarlo en app.js