# 🍕 Pizzería Mamma Mía (React + Vite + Bootstrap)

Aplicación web desarrollada con **React** y **Vite** para la Pizzería Mamma Mía. Este proyecto abarca el desarrollo de la maquetación modular y el manejo de estados y eventos en formularios para autenticación de usuarios.

---

## 🚀 Vista Previa y Despliegue

- **Demo en vivo (GitHub Pages):** [Haz clíck aquí](https://kisarubilar.github.io/hito1-pizzeria/)
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
   - Validaciones:
     - Todos los campos obligatorios.
     - Contraseña con un mínimo de 6 caracteres.
     - Coincidencia exacta entre la contraseña y su confirmación.
2. **Componente `LoginPage`:**
   - Formulario de inicio de sesión con inputs para **Email** y **Contraseña**.
   - Validaciones:
     - Todos los campos obligatorios.
     - Contraseña con un mínimo de 6 caracteres.
3. **Manejo de Respuestas:**
   - Feedback dinámico mediante alertas nativas (`alert`) indicando éxito (`Authentication successful!`) o los errores de validación correspondientes.

---

## 🔧 Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/kisarubilar/hito1-pizzeria.git](https://github.com/kisarubilar/hito1-pizzeria.git)
Desarrollado por Kisa Rubilar
