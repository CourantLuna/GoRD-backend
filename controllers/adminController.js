const Admin = require('../models/admin');

// Crear un nuevo administrador
exports.crearAdmin = async (req, res) => {
    try {
        const nuevoAdmin = new Admin(req.body);
        await nuevoAdmin.save();
        res.status(201).send(nuevoAdmin);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Obtener todos los administradores
exports.obtenerAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).send(admins);
    } catch (error) {
        res.status(500).send(error);
    }
};
