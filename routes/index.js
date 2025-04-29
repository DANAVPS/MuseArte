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
        titulo: "Dualidades entre los Mundos",
        autor: "Miguel Serrano",
        año: 2019,
        descripcion: "es una obra que parece narrar un encuentro misterioso entre dos dimensiones que se cruzan pero nunca se mezclan. Las figuras centrales, estilizadas y geométricas, podrían representar dos entidades opuestas: una del mundo tangible, marcada por colores vivos y cálidos, y otra del reino abstracto, envuelta en tonos fríos y patrones inquietantes. Sus miradas no se encuentran, como si fueran conscientes de la imposibilidad de su conexión.",
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
        titulo: "Sinfonía del Caos y la Energía",
        autor: "Gabriel Torres",
        año: 2020,
        descripcion: "En esta obra vibrante, el artista nos sumerge en un mundo de formas geométricas y patrones caóticos que, paradójicamente, encuentran armonía dentro del desorden. Las explosiones de colores -naranjas cálidos, azules eléctricos, verdes intensos y rojos profundos- hablan de una energía vital que se despliega en todas direcciones. Los elementos que sugieren caras, instrumentos musicales y estructuras urbanas parecen contar historias fragmentadas de una ciudad que nunca duerme, una metrópolis de emociones entrelazadas.",
        imagen: "/img/obra4.png"
    },
    {
        id: 5,
        titulo: "El Árbol de los Sueños Cromáticos",
        autor: "Sofía Vega",
        año: 2023,
        descripcion: "Esta obra ofrece un contraste sereno, centrándose en un majestuoso árbol que se alza en el centro de un paisaje onírico. Su copa, un estallido de colores que transita por todos los tonos del arco iris, parece contener los sueños de aquellos que alguna vez descansaron bajo su sombra. La quietud del fondo -un cielo pastel en tonos de azul, rosa y amarillo- realza la vitalidad del árbol, que parece desafiar las leyes del tiempo y el espacio con su magnificencia.",
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