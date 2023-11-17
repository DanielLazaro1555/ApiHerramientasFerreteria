const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());

// Imagenes deben tener 600x600 en formato .jpg
// Lista de productos
const productos = [
  { id: 1, imagen: 'simple-api/imagenes/tornillo.jpg', descripcion: 'Tornillo' },
  { id: 2, imagen: 'simple-api/imagenes/perno.jpg', descripcion: 'Perno' },
  { id: 3, imagen: 'simple-api/imagenes/martillo.jpg', descripcion: 'Martillo' },
  { id: 4, imagen: 'simple-api/imagenes/destornillador.jpg', descripcion: 'Destornillador' },
  { id: 5, imagen: 'simple-api/imagenes/llave.jpg', descripcion: 'Llave' },
  { id: 6, imagen: 'simple-api/imagenes/tenaza.jpg', descripcion: 'Tenaza' },
  { id: 7, imagen: 'simple-api/imagenes/taladro.jpg', descripcion: 'Taladro' },
  { id: 8, imagen: 'simple-api/imagenes/arco_sierra.jpg', descripcion: 'Arco de Sierra' },
  { id: 9, imagen: 'simple-api/imagenes/cinta_metrica.jpg', descripcion: 'Cinta Métrica' },
  { id: 10, imagen: 'simple-api/imagenes/clavos.jpg', descripcion: 'Clavos' },
  { id: 11, imagen: 'simple-api/imagenes/cepillo.jpg', descripcion: 'Cepillo' },
  { id: 12, imagen: 'simple-api/imagenes/nivel.jpg', descripcion: 'Nivel' },
  { id: 13, imagen: 'simple-api/imagenes/cuchillo.jpg', descripcion: 'Cuchillo' },
  { id: 14, imagen: 'simple-api/imagenes/destornillador_phillips.jpg', descripcion: 'Destornillador Phillips' },
  { id: 15, imagen: 'simple-api/imagenes/sierra_circular.jpg', descripcion: 'Sierra Circular' },
  { id: 16, imagen: 'simple-api/imagenes/pinzas.jpg', descripcion: 'Pinzas' },
  { id: 17, imagen: 'simple-api/imagenes/engranajes.jpg', descripcion: 'Engranajes' },
  { id: 18, imagen: 'simple-api/imagenes/tubo.jpg', descripcion: 'Tubo' },
  { id: 19, imagen: 'simple-api/imagenes/grapas.jpg', descripcion: 'Grapas' },
  { id: 20, imagen: 'simple-api/imagenes/metro.jpg', descripcion: 'Metro' },
  { id: 21, imagen: 'simple-api/imagenes/destornillador_plano.jpg', descripcion: 'Destornillador Plano' },
  { id: 22, imagen: 'simple-api/imagenes/mazo.jpg', descripcion: 'Mazo' },
  { id: 23, imagen: 'simple-api/imagenes/regla.jpg', descripcion: 'Regla' },
  { id: 24, imagen: 'simple-api/imagenes/llave_inglesa.jpg', descripcion: 'Llave Inglesa' },
  { id: 25, imagen: 'simple-api/imagenes/lijadora.jpg', descripcion: 'Lijadora' },
  { id: 26, imagen: 'simple-api/imagenes/alicate.jpg', descripcion: 'Alicate' },
  { id: 27, imagen: 'simple-api/imagenes/sierra_de_calar.jpg', descripcion: 'Sierra de Calar' },
  { id: 28, imagen: 'simple-api/imagenes/escuadra.jpg', descripcion: 'Escuadra' },
  { id: 29, imagen: 'simple-api/imagenes/brocas.jpg', descripcion: 'Brocas' },
  { id: 30, imagen: 'simple-api/imagenes/nivel_laser.jpg', descripcion: 'Nivel Láser' },
  { id: 31, imagen: 'simple-api/imagenes/serrucho.jpg', descripcion: 'Serrucho' },
  { id: 32, imagen: 'simple-api/imagenes/cincel.jpg', descripcion: 'Cincel' },
  { id: 33, imagen: 'simple-api/imagenes/destornillador_torx.jpg', descripcion: 'Destornillador Torx' },
  { id: 34, imagen: 'simple-api/imagenes/martillo_de_goma.jpg', descripcion: 'Martillo de Goma' },
  { id: 35, imagen: 'simple-api/imagenes/cinta_adhesiva.jpg', descripcion: 'Cinta Adhesiva' },
  { id: 36, imagen: 'simple-api/imagenes/llave_ajustable.jpg', descripcion: 'Llave Ajustable' },
  { id: 37, imagen: 'simple-api/imagenes/pala.jpg', descripcion: 'Pala' },
  { id: 38, imagen: 'simple-api/imagenes/guantes.jpg', descripcion: 'Guantes de Trabajo' },
  { id: 39, imagen: 'simple-api/imagenes/brocha.jpg', descripcion: 'Brocha' },
  { id: 40, imagen: 'simple-api/imagenes/pintura.jpg', descripcion: 'Pintura' },
  { id: 41, imagen: 'simple-api/imagenes/soldador.jpg', descripcion: 'Soldador' },
  { id: 42, imagen: 'simple-api/imagenes/nivel_de_agua.jpg', descripcion: 'Nivel de Agua' },
  { id: 43, imagen: 'simple-api/imagenes/alicates_cortantes.jpg', descripcion: 'Alicates Cortantes' },
  { id: 44, imagen: 'simple-api/imagenes/cinta_teflon.jpg', descripcion: 'Cinta de Teflón' },
  { id: 45, imagen: 'simple-api/imagenes/taladro_percutor.jpg', descripcion: 'Taladro Percutor' },
  { id: 46, imagen: 'simple-api/imagenes/destornillador_torque.jpg', descripcion: 'Destornillador de Torque' },
  { id: 47, imagen: 'simple-api/imagenes/cepillo_metalico.jpg', descripcion: 'Cepillo Metálico' },
  { id: 48, imagen: 'simple-api/imagenes/destornillador_hexagonal.jpg', descripcion: 'Destornillador Hexagonal' },
  { id: 49, imagen: 'simple-api/imagenes/pinza_robusta.jpg', descripcion: 'Pinza Robusta' },
  { id: 50, imagen: 'simple-api/imagenes/engranajes_de_precision.jpg', descripcion: 'Engranajes de Precisión' },
  { id: 51, imagen: 'simple-api/imagenes/cinta_metrica_extensible.jpg', descripcion: 'Cinta Métrica Extensible' },
  { id: 52, imagen: 'simple-api/imagenes/sargento.jpg', descripcion: 'Sargento' },
  { id: 53, imagen: 'simple-api/imagenes/escalera.jpg', descripcion: 'Escalera' },
  { id: 54, imagen: 'simple-api/imagenes/destornillador_inalambrico.jpg', descripcion: 'Destornillador Inalámbrico' },
  { id: 55, imagen: 'simple-api/imagenes/taladro_angular.jpg', descripcion: 'Taladro Angular' },
  { id: 56, imagen: 'simple-api/imagenes/cepillo_de_alambre.jpg', descripcion: 'Cepillo de Alambre' },
  { id: 57, imagen: 'simple-api/imagenes/llave_ajustable_grande.jpg', descripcion: 'Llave Ajustable Grande' },
  { id: 58, imagen: 'simple-api/imagenes/destornillador_de_precisión.jpg', descripcion: 'Destornillador de Precisión' },
  { id: 59, imagen: 'simple-api/imagenes/sierra_de_mano.jpg', descripcion: 'Sierra de Mano' },
  { id: 60, imagen: 'simple-api/imagenes/lima.jpg', descripcion: 'Lima' },
  { id: 61, imagen: 'simple-api/imagenes/cepillo_para_madera.jpg', descripcion: 'Cepillo para Madera' },
  { id: 62, imagen: 'simple-api/imagenes/llave_inglesa_ajustable.jpg', descripcion: 'Llave Inglesa Ajustable' },
  { id: 63, imagen: 'simple-api/imagenes/destornillador_con_mango_antideslizante.jpg', descripcion: 'Destornillador con Mango Antideslizante' },
  { id: 64, imagen: 'simple-api/imagenes/sierra_de_calar.jpg', descripcion: 'Sierra de Calar' },
  { id: 65, imagen: 'simple-api/imagenes/cepillo_de_cerda.jpg', descripcion: 'Cepillo de Cerda' },
  { id: 66, imagen: 'simple-api/imagenes/llave_torx.jpg', descripcion: 'Llave Torx' },
  { id: 67, imagen: 'simple-api/imagenes/destornillador_phillips_pequeño.jpg', descripcion: 'Destornillador Phillips Pequeño' },
  { id: 68, imagen: 'simple-api/imagenes/sierra_circular_inalambrica.jpg', descripcion: 'Sierra Circular Inalámbrica' },
  { id: 69, imagen: 'simple-api/imagenes/nivel_laser_autonivelante.jpg', descripcion: 'Nivel Láser Autonivelante' },
  { id: 70, imagen: 'simple-api/imagenes/extractor_de_tornillos.jpg', descripcion: 'Extractor de Tornillos' },
  { id: 71, imagen: 'simple-api/imagenes/destornillador_de_impacto.jpg', descripcion: 'Destornillador de Impacto' },
  { id: 72, imagen: 'simple-api/imagenes/sierra_de_panel.jpg', descripcion: 'Sierra de Panel' },
  { id: 73, imagen: 'simple-api/imagenes/llave_hexagonal.jpg', descripcion: 'Llave Hexagonal' },
  { id: 74, imagen: 'simple-api/imagenes/lijadora_orbital.jpg', descripcion: 'Lijadora Orbital' },
  { id: 75, imagen: 'simple-api/imagenes/cuchillo_para_tapiceria.jpg', descripcion: 'Cuchillo para Tapicería' },
  { id: 76, imagen: 'simple-api/imagenes/llave_de_tubos.jpg', descripcion: 'Llave de Tubos' },
  { id: 77, imagen: 'simple-api/imagenes/cinta_adhesiva_de_doble_cara.jpg', descripcion: 'Cinta Adhesiva de Doble Cara' },
  { id: 78, imagen: 'simple-api/imagenes/sierra_de_arco.jpg', descripcion: 'Sierra de Arco' },
  { id: 79, imagen: 'simple-api/imagenes/nivel_de_laser_vertical.jpg', descripcion: 'Nivel de Láser Vertical' },
  { id: 80, imagen: 'simple-api/imagenes/tijeras.jpg', descripcion: 'Tijeras' },
  { id: 81, imagen: 'simple-api/imagenes/taladro_inalambrico.jpg', descripcion: 'Taladro Inalámbrico' },
  { id: 82, imagen: 'simple-api/imagenes/llave_ajustable_pequeña.jpg', descripcion: 'Llave Ajustable Pequeña' },
  { id: 83, imagen: 'simple-api/imagenes/destornillador_de_precision.jpg', descripcion: 'Destornillador de Precisión' },
  { id: 84, imagen: 'simple-api/imagenes/sierra_de_cadena.jpg', descripcion: 'Sierra de Cadena' },
  { id: 85, imagen: 'simple-api/imagenes/cuchillo_plegable.jpg', descripcion: 'Cuchillo Plegable' },
  { id: 86, imagen: 'simple-api/imagenes/martillo_de_carpintero.jpg', descripcion: 'Martillo de Carpintero' },
  { id: 87, imagen: 'simple-api/imagenes/lima_plana.jpg', descripcion: 'Lima Plana' },
  { id: 88, imagen: 'simple-api/imagenes/destornillador_de_estrella.jpg', descripcion: 'Destornillador de Estrella' },
  { id: 89, imagen: 'simple-api/imagenes/sierra_de_mesa.jpg', descripcion: 'Sierra de Mesa' },
  { id: 90, imagen: 'simple-api/imagenes/cepillo_para_metal.jpg', descripcion: 'Cepillo para Metal' },
  { id: 91, imagen: 'simple-api/imagenes/cepillo_electrico.jpg', descripcion: 'Cepillo Eléctrico' },
  { id: 92, imagen: 'simple-api/imagenes/llave_inglesa_ajustable_grande.jpg', descripcion: 'Llave Inglesa Ajustable Grande' },
  { id: 93, imagen: 'simple-api/imagenes/destornillador_torx_pequeño.jpg', descripcion: 'Destornillador Torx Pequeño' },
  { id: 94, imagen: 'simple-api/imagenes/sierra_de_banda.jpg', descripcion: 'Sierra de Banda' },
  { id: 95, imagen: 'simple-api/imagenes/cuchillo_de_utilidad.jpg', descripcion: 'Cuchillo de Utilidad' },
  { id: 96, imagen: 'simple-api/imagenes/destornillador_con_magnetizador.jpg', descripcion: 'Destornillador con Magnetizador' },
  { id: 97, imagen: 'simple-api/imagenes/lima_redonda.jpg', descripcion: 'Lima Redonda' },
  { id: 98, imagen: 'simple-api/imagenes/destornillador_con_luz.jpg', descripcion: 'Destornillador con Luz' },
  { id: 99, imagen: 'simple-api/imagenes/sierra_para_hierro.jpg', descripcion: 'Sierra para Hierro' },
  { id: 100, imagen: 'simple-api/imagenes/cinta_adhesiva_de_teflon.jpg', descripcion: 'Cinta Adhesiva de Teflón' },
  // Puedes agregar más productos según sea necesario
];


// Ruta para obtener todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
