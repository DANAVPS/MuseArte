//middleware para registrar cada visita a la pagina incluyendo la hora exacta

const loggerMiddleware = (req, res, next) => {
    const ahora = new Date().toLocaleString();
    console.log(`Visita a la pagina: ${req.url} - Hora: ${ahora}`);
    next();
};

export default loggerMiddleware;