# 🍕 Pizzería Mamma Mía - Hito 1 (React + Vite + Bootstrap)

Aplicación web desarrollada con **React** y **Vite** para la Pizzería Mamma Mía. Este proyecto corresponde al primer hito del curso de Desarrollo Web Frontend, enfocado en la maquetación modular, estructuración de componentes y consumo de estilos con Bootstrap 5.

---

## 🚀 Vista Previa y Despliegue

- **Repositorio GitHub:** [https://github.com/kisarubilar/hito1-pizzeria](https://github.com/kisarubilar/hito1-pizzeria)
- **Demo en vivo (Vercel / Netlify):** *[Agrega tu enlace aquí si lo desplegaste](https://kisarubilar.github.io/hito1-pizzeria/)*

---

## 🛠️ Tecnologías Utilizadas

- **React** (Vite)
- **Bootstrap 5** (CSS y componentes responsivos)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

---

## 📑 Requerimientos e Hitos Desarrollados

1. **Estructura Modular de Componentes:**
   - `Navbar`: Navegación superior con estados simulados (`token` para Login/Register o Profile/Logout) y cálculo visual del total.
   - `Header`: Banner principal con imagen de fondo (*overlay*) y mensaje de bienvenida.
   - `CardPizza`: Componente reutilizable para renderizar cada pizza dinámicamente con sus props (`name`, `price`, `ingredients`, `img`).
   - `Home`: Contenedor principal que organiza la grilla responsiva de Bootstrap.
   - `Footer`: Pie de página informativo.

2. **Formateo de Datos (Utils):**
   - Creación de función `formatNumber` en `src/utils/format.js` para formatear valores numéricos a miles (e.g., `$5.950`).

3. **Estilos y Maquetación:**
   - Integración de Bootstrap 5 mediante `npm`.
   - Limpieza de estilos base de Vite para asegurar compatibilidad completa con el diseño de referencia (`ej7`).

---

Desarrollado por Kisa Rubilar
