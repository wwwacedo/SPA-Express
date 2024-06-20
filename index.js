import { Route, router } from './router.js';
import "./components/links.js";

document.addEventListener('DOMContentLoaded', () => {
	const inicio = new Route('Inicio', '/', '/routes/inicio.html');
	const sobre = new Route('Sobre', '/sobre', '/routes/sobre.html');

	router.addRoute(inicio);
	router.addRoute(sobre);

	// Load the initial route
	router.loadRoute(inicio);
});