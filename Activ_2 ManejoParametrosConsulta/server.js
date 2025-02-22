
import express from 'express';

const serverConsulta = express();
const PORT = 3000;

//ruta GET con parametro de consulta
//solicitud: http://localhost:3000/profile?edad=30
serverConsulta.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibididad: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);
});


serverConsulta.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
});