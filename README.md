# 🍕 Pizzería Mamma Mía (React + Vite + Bootstrap)

Aplicación web desarrollada con **React** y **Vite** para la Pizzería Mamma Mía. Este proyecto abarca el desarrollo de la maquetación modular, formularios de autenticación, renderización dinámica de productos, gestión de carrito de compras, consumo de APIs y la implementación completa de enrutamiento con React Router.

---

## 🚀 Vista Previa y Despliegue

- **Demo en vivo (GitHub Pages):** [Haz clic aquí](https://kisarubilar.github.io/hito1-pizzeria/)
- **Repositorio GitHub:** [https://github.com/kisarubilar/hito1-pizzeria](https://github.com/kisarubilar/hito1-pizzeria)

---

## 🛠️ Tecnologías Utilizadas

- **React** (Vite)
- **React Router DOM**
- **Bootstrap 5** (CSS y componentes responsivos)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## 📑 Hitos Desarrollados

### 🔹 Hito 1: Componentes y Estilos Base
1. **Estructura Modular:**
   - `Navbar`: Navegación superior con estados simulados y total visual.
   - `Header`: Banner principal con overlay de imagen de fondo y mensaje de bienvenida.
   - `CardPizza`: Componente reutilizable con props (`name`, `price`, `ingredients`, `img`).
   - `Home`: Grilla responsiva de productos.
   - `Footer`: Pie de página.
2. **Utilidades:**
   - Función `formatNumber` en `src/utils/format.js` para dar formato de miles a los precios (ej: `$5.950`).

### 🔹 Hito 2: Estados y Eventos (Formularios)
1. **Componente `RegisterPage`:**
   - Formulario de registro con validaciones de campos obligatorios, mínimo de 6 caracteres y coincidencia exacta de contraseñas.
2. **Componente `LoginPage`:**
   - Formulario de inicio de sesión validando email y contraseña.
3. **Manejo de Respuestas:**
   - Feedback dinámico mediante alertas nativas (`alert`) indicando éxito o errores de validación.

### 🔹 Hito 3: Renderización Dinámica de Componentes y Carrito de Compras
1. **Manejo de Datos Centralizado:**
   - Creación del archivo `src/pizzas.js` con el catálogo de productos (`pizzas`) y elementos del carrito (`pizzaCart`).
2. **Componente `Home` y `CardPizza`:**
   - Renderizado dinámico de tarjetas e iteración de ingredientes mediante `.map()`.
3. **Componente `Cart` (Carrito de Compras):**
   - Manejo de estado con `useState`, botones de incremento/decremento, eliminación automática al llegar a cantidad `0` y cálculo dinámico del total.

### 🔹 Hito 4: Consumo de APIs en React
1. **Consumo de API:**
   - Integración del hook `useEffect` y `fetch` para consumir el listado general en `Home` y el detalle individual de una pizza en `Pizza`, con respaldo de datos (*fallback*) para despliegues públicos.

### 🔹 Hito 5: React Router I (Enrutamiento)
1. **Reorganización de Páginas:**
   - Traslado de los componentes principales a la carpeta `src/pages/`.
2. **Configuración de Rutas:**
   - Implementación de `BrowserRouter`, `Routes` y `Route` para manejar las rutas principales:
     - `/` (`Home`)
     - `/register` (`RegisterPage`)
     - `/login` (`LoginPage`)
     - `/cart` (`Cart`)
     - `/pizza/p001` (`Pizza`)
     - `/profile` (`Profile`)
     - `*` Ruta comodín para `NotFound` (página 404 con enlace de redirección al inicio).
3. **Navegación Interactiva:**
   - Actualización del `Navbar` utilizando componentes `<Link>` de `react-router-dom` y redirección del botón de carrito hacia `/cart`.

---

## 🔧 Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/kisarubilar/hito1-pizzeria.git](https://github.com/kisarubilar/hito1-pizzeria.git)
Desarrollado por Kisa Rubilar
