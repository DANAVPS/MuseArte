import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js';
import loggerMiddleware from './middleware/logger.js';

//configuracion para ES modules
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

//inicializacion de express
const app = express()
const PORT = process.env.PORT || 3000;

//configuracion motor de vistas
app.set('view engine', 'pug');
app.set('views', path.join(_dirname, 'views'));

//middleware para archivos estaticos
app.use(express.static(path.join(_dirname, 'public')));

//middleware de registro
app.use(loggerMiddleware);

//rutas
app.use('/', indexRouter);

//inicializar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
// Exportar la aplicación para pruebas
export default app;