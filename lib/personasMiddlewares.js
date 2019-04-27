module.exports.datosLlenos = (req, res, next) => {
			//const nombre = req.body.nombre;
			//const edad = req.body.edad;
			const { nombre, edad, apellidos } = req.body;

			if(!nombre)
			{
				return res.send('Falta agregar el nombre');
			}

			if(!edad)
			{
				return res.send('Falta agregar la edad');
			}

			if(!apellidos)
			{
				return res.send('Falta agregar apellidos');
			}

			if(typeof(apellidos) !== 'object')
			{
				return res.send( {mensaje: 'Apellidos debe ser objeto'} );
			}
			
			if(!apellidos.paterno)
			{
				return res.send('Falta agregar apellido paterno');
			}

			next(); // debe estar presente para que continue despues del middleware
};
		// Validacion de tipos de datos
module.exports.tipoDato = (req, res, next ) => {

			const { nombre, edad, apellidos, profesion } = req.body;
			let errores = [];

			if(typeof(nombre) !== 'string')
				errores.push({
					mensaje: 'Nombre debe ser texto'
				});
			
			if(typeof(edad) !== 'number')
			{
				errores.push( {mensaje: 'Edad debe ser numero'} );
			}

			if(typeof(apellidos.paterno) !== 'string')
			{
				errores.push( {mensaje: 'Apellido debe ser texto'} );
			}

			if(typeof(apellidos.materno) !== 'string')
			{
				errores.push( {mensaje: 'Apellido debe ser texto'} );
			}

			if(profesion && typeof(profesion) !== 'string')
			{
				errores.push( {mensaje: 'Profesion debe ser texto'} );
			}

			if (errores.length)
				return res.send(errores);

			next();

};
