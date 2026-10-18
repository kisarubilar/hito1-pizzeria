# 🍕 Pizzería Mamma Mía (React + Vite + Bootstrap)

Aplicación web desarrollada con **React** y **Vite** para la Pizzería Mamma Mía. Este proyecto abarca el desarrollo de la maquetación modular, formularios de autenticación, renderización dinámica de productos, gestión global del carrito de compras mediante Context API, consumo de APIs y la implementación completa de enrutamiento con React Router.

---

## 🚀 Vista Previa y Despliegue

- **Demo en vivo (GitHub Pages):** [Haz clic aquí](https://kisarubilar.github.io/hito1-pizzeria/)
- **Repositorio GitHub:** [https://github.com/kisarubilar/hito1-pizzeria](https://github.com/kisarubilar/hito1-pizzeria)

---

## 🛠️ Tecnologías Utilizadas

- **React** (Vite)
- **React Router DOM**
- **Context API** (Gestión de Estado Global)
- **Bootstrap 5** (CSS y componentes responsivos)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## 📑 Hitos Desarrollados

### 🔹 Hito 1: Componentes y Estilos Base
1. **Estructura Modular:**
   - `Navbar`: Navegación superior con estados y total visual.
   - `Header`: Banner principal con overlay de imagen de fondo y mensaje de bienvenida.
   - `CardPizza`: Componente reutilizable con props (`name`, `price`, `ingredients`, `img`).
   - `Home`: Grilla responsiva de productos.
   - `Footer`: Pie de página.
2. **Utilidades:**
   - Función `formatNumber` en `src/utils/format.js` para dar formato de miles a los precios (ej: `$5.950`).

### 🔹 Hito 2: Estados y Eventos (Formularios)
1. **Componentes `RegisterPage` y `LoginPage`:**
   - Formularios interactivos con validación de campos obligatorios, control de longitud mínima de caracteres y coincidencia de contraseñas.
2. **Manejo de Respuestas:**
   - Feedback dinámico mediante alertas nativas (`alert`) indicando éxito o errores de validación.

### 🔹 Hito 3: Renderización Dinámica de Componentes y Carrito de Compras
1. **Manejo de Datos Centralizado:**
   - Creación del archivo `src/pizzas.js` con el catálogo de productos y elementos iniciales del carrito.
2. **Componente `Home` y `CardPizza`:**
   - Renderizado dinámico de tarjetas e iteración de ingredientes mediante `.map()`.
3. **Componente `Cart`:**
   - Manejo de estado local, botones de incremento y decremento, eliminación automática al llegar a cantidad `0` y cálculo en tiempo real del total.

### 🔹 Hito 4: Consumo de APIs en React
1. **Consumo de API:**
   - Integración del hook `useEffect` y `fetch` para consumir el listado general en `Home` y el detalle individual en `Pizza`, con respaldo de datos (*fallback*) para despliegues públicos.

### 🔹 Hito 5: React Router I (Enrutamiento)
1. **Enrutamiento y Vistas:**
   - Configuración de `BrowserRouter`, `Routes` y `Route` para manejar las páginas principales (`/`, `/register`, `/login`, `/cart`, `/pizza/p001`, `/profile` y la ruta comodín `404` para páginas no encontradas).
2. **Navegación Interactiva:**
   - Uso de componentes `<Link>` de `react-router-dom` en el `Navbar`.

### 🔹 Hito 6: Context I (Estado Global del Carrito)
1. **Implementación de Context API:**
   - Creación de `CartContext` y `CartProvider` para centralizar la lógica de negocio del carrito de compras en toda la aplicación.
2. **Consumo Global:**
   - Sincronización en tiempo real del precio total y cantidad de productos entre el `Navbar`, la página principal `Home` (botón añadir) y la vista detallada del carrito (`Cart`).

---

## 🔧 Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/kisarubilar/hito1-pizzeria.git](https://github.com/kisarubilar/hito1-pizzeria.git)
Desarrollado por Kisa Rubilar
