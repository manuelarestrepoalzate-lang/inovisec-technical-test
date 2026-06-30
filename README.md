# Inovisec Technical Test

## Descripción

Aplicación desarrollada en React para visualizar casos georreferenciados mediante un mapa interactivo.

La maqueta incluye:

- Pantalla de Login.
- Dashboard principal.
- Mapa interactivo utilizando Leaflet.
- Marcadores georreferenciados.
- Actualización dinámica de la información al seleccionar un caso.
- Panel lateral con detalles del caso seleccionado.

---

# Tecnologías Utilizadas

El proyecto fue desarrollado utilizando las siguientes tecnologías:

- React
- Vite
- JavaScript (ES6+)
- CSS3
- React Leaflet
- Leaflet
- Git
- GitHub

---

# Instalación y Ejecución Local

### 1. Clonar el repositorio

```bash
git clone https://github.com/manuelarestrepoalzate-lang/inovisec-technical-test
```

### 2. Ingresar al proyecto

```bash
cd inovisec-technical-test
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar la aplicación

```bash
npm run dev
```

### 5. Abrir en el navegador

```text
http://localhost:5173
```

---

# Estructura del Proyecto

```text
src/
│
├── components/
│   └── MapView.jsx
│
├── data/
│   └── cases.js
│
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# Decisiones de Diseño

## Diseño de la Interfaz

Se tomó como referencia el mockup entregado para la prueba técnica.

La interfaz fue desarrollada utilizando:

- Distribución tipo Dashboard.
- Panel lateral para visualizar la información del caso seleccionado.
- Mapa interactivo como elemento principal.
- Diseño limpio y minimalista.

---

## Arquitectura del Proyecto

Se utilizó una arquitectura basada en componentes para facilitar:

- Escalabilidad.
- Reutilización de código.
- Separación de responsabilidades.
- Mantenimiento futuro.

La información de los casos fue desacoplada de la vista y almacenada en un archivo independiente (`cases.js`) simulando una futura integración con APIs o bases de datos.

---

## Decisiones Tecnológicas

### React

Se seleccionó React por ser una librería moderna orientada a componentes reutilizables.

### Vite

Se utilizó Vite por ofrecer:

- Inicio rápido del proyecto.
- Compilación optimizada.
- Excelente experiencia de desarrollo.

### Leaflet

Se eligió Leaflet debido a:

- Facilidad de integración.
- Bajo consumo de recursos.
- Excelente soporte para mapas interactivos.

### React Leaflet

Permite integrar Leaflet de forma nativa dentro del ecosistema React.

---

# Funcionalidades Implementadas

✔ Login simulado

✔ Navegación entre vistas

✔ Dashboard principal

✔ Mapa interactivo

✔ Marcadores geográficos

✔ Actualización dinámica de información

✔ Panel de detalle del caso seleccionado

✔ Control de versiones con Git

✔ Repositorio público en GitHub

---

# Control de Versiones

El proyecto fue gestionado utilizando Git para el control de versiones.

Repositorio público:

https://github.com/manuelarestrepoalzate-lang/inovisec-technical-test

---

# Mejoras Futuras

- Integración con API REST.
- Backend con NestJS.
- Persistencia en PostgreSQL.
- Autenticación JWT.
- Gestión de usuarios y roles.
- Actualización en tiempo real mediante WebSockets.
- Filtros avanzados para búsqueda de casos.