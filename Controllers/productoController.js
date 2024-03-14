const Producto = require('../models/Producto'); 

exports.crearProducto = async (req,res) =>{
    try {
        let producto;

        producto =  new Producto(req.body);

        await producto.save();

        res.send(producto);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo error');
    }
}


exports.obtenerProductos = async  (req,res)=>{
    try {
        const productos = await Producto.find();
        res.json(productos
            );
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.actualizarProducto = async (req,res) =>{
    try {
        const { producto,categoria,ubicacion,precio } = req.body
        let productos = await Producto.findById(req.params.id);

        if(!productos){
            res.status(404).json({msg:'No existe el producto'});            
        }

        productos.producto = producto;
        productos.categoria = categoria;
        productos.ubicacion = ubicacion;
        productos.precio = precio;

        productos = await Producto.findOneAndUpdate({ _id: req.params.id }, productos, { new:true });
        res.json(productos);



    } catch (error) {
        console.log(error);
        res.status('500').send('hubo error');
    }
}


exports.obtenerProducto = async (req,res) =>{
    try {
       
        let productos = await Producto.findById(req.params.id);

        if(!productos){
            res.status(404).json({msg:'No existe el producto'});            
        }
       
        res.json(productos);



    } catch (error) {
        console.log(error);
        res.status('500').send('hubo error');
    }
}













exports.eliminarProducto = async (req, res) => {
    try {
        const productos = await Producto.findById(req.params.id);

        if (!productos) {
            return res.status(404).json({ msg: 'No existe el producto' });
        }

        await Producto.deleteOne({ _id: req.params.id });

        res.json({ msg: "Producto eliminado" });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error interno');
    }
};
