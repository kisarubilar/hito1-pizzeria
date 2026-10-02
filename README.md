# 🍕 Pizzería Mamma Mía (React + Vite + Bootstrap)

Aplicación web desarrollada con **React** y **Vite** para la Pizzería Mamma Mía. Este proyecto abarca el desarrollo de la maquetación modular, el manejo de formularios de autenticación, la renderización dinámica de productos, la gestión interactiva de un carrito de compras y el consumo de APIs externas mediante `useEffect` y `fetch`.

---

## 🚀 Vista Previa y Despliegue

- **Demo en vivo (GitHub Pages):** [Haz clic aquí](https://kisarubilar.github.io/hito1-pizzeria/)
- **Repositorio GitHub:** [https://github.com/kisarubilar/hito1-pizzeria](https://github.com/kisarubilar/hito1-pizzeria)

---

## 🛠️ Tecnologías Utilizadas

- **React** (Vite)
- **Bootstrap 5** (CSS y componentes responsivos)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## 📑 Hitos Desarrollados

### 🔹 Hito 1: Componentes y Estilos Base
1. **Estructura Modular:**
   - `Navbar`: Navegación superior con estados simulados (`token` para Login/Register o Profile/Logout) y total visual.
   - `Header`: Banner principal con overlay de imagen de fondo y mensaje de bienvenida.
   - `CardPizza`: Componente reutilizable con props (`name`, `price`, `ingredients`, `img`).
   - `Home`: Grilla responsiva de productos.
   - `Footer`: Pie de página.
2. **Utilidades:**
   - Función `formatNumber` en `src/utils/format.js` para dar formato de miles a los precios (ej: `$5.950`).

### 🔹 Hito 2: Estados y Eventos (Formularios)
1. **Componente `RegisterPage`:**
   - Formulario de registro con inputs para **Email**, **Contraseña** y **Confirmar contraseña**.
   - Validaciones: todos los campos obligatorios, mínimo 6 caracteres en la contraseña y coincidencia entre contraseñas.
2. **Componente `LoginPage`:**
   - Formulario de inicio de sesión con inputs para **Email** y **Contraseña**.
   - Validaciones: todos los campos obligatorios y mínimo 6 caracteres en la contraseña.
3. **Manejo de Respuestas:**
   - Feedback dinámico mediante alertas nativas (`alert`) indicando éxito (`Authentication successful!`) o los errores de validación correspondientes.

### 🔹 Hito 3: Renderización Dinámica de Componentes y Carrito de Compras
1. **Manejo de Datos Centralizado:**
   - Creación del archivo `src/pizzas.js` con los datos de productos (`pizzas`) y del carrito (`pizzaCart`).
2. **Componente `Home`:**
   - Mapeo dinámico del catálogo de productos con `.map()`, generando automáticamente las tarjetas correspondientes.
3. **Componente `CardPizza`:**
   - Renderización dinámica mediante props e iteración de la lista de ingredientes usando `.map()` para cada elemento `<li>`.
4. **Componente `Cart` (Carrito de Compras):**
   - Estado local con `useState` para gestionar el listado de productos en el carrito.
   - Botones para incrementar (`+`) y decrementar (`-`) la cantidad de cada pizza.
   - Eliminación automática del producto del carrito al llegar a cantidad `0`.
   - Cálculo en tiempo real del monto total de la compra.
   - Botón de pago desactivado dinámicamente si el carrito está vacío.

### 🔹 Hito 4: Consumo de APIs en React
1. **Consumo de API en `Home`:**
   - Reemplazo del arreglo estático local por una petición asíncrona a la API externa (`http://localhost:5000/api/pizzas`) dentro del hook `useEffect`.
   - Almacenamiento y renderizado dinámico del listado general de pizzas mediante `useState`.
2. **Nuevo Componente `Pizza`:**
   - Creación de vista de detalle individual que consume el endpoint `http://localhost:5000/api/pizzas/p001` mediante `useEffect` y `fetch`.
   - Visualización completa de las propiedades recibidas desde la API:
     - Nombre de la pizza.
     - Precio formateado.
     - Lista iterada de ingredientes.
     - Imagen descriptiva.
     - Descripción detallada de la pizza.
3. **Integración en `App.jsx`:**
   - Renderizado del componente `<Pizza />` para la simulación de vista detalle.

---

## 🔧 Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/kisarubilar/hito1-pizzeria.git](https://github.com/kisarubilar/hito1-pizzeria.git)
Desarrollado por Kisa Rubilar
