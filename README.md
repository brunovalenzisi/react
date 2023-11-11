# ReactCoderHouse


## Descripción

ReactCoderHouse es una aplicación e-commerce desarrollada en React con Vite como herramienta de construcción. La aplicación ofrece un carrito de compras funcional, sistema de checkout y otras características esenciales para una experiencia de compra en línea.

## Instalación

Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu sistema antes de continuar.

1. Clona el repositorio:

    ```bash
    git clone https://github.com/brunovalenzisi/react.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd reactcoderhouse
    ```

3. Instala las dependencias:


    ```bash
    npm install
    

## Uso

### Desarrollo

Inicia el servidor de desarrollo:

```bash 
npm run dev
```
    
Visita http://localhost:3000 en tu navegador.

  


## Producción

Genera la versión de producción:
```bash
npm run build
```

    

### Scripts

- `dev`: Inicia el servidor de desarrollo con Vite.
- `build`: Construye la versión de producción.
- `lint`: Ejecuta ESLint para linting del código.
- `preview`: Inicia Vite en modo de vista previa.

### Tecnologías Principales

- React
- Vite
- Firebase (para la funcionalidad backend)
- React Router Dom
- Otros paquetes y herramientas esenciales

### Dependencias Principales

- Firebase
- React y React DOM
- React Router Dom
- React Slick (para sliders/carousels)
- React Toastify (para notificaciones)
- SASS y Tailwind CSS (para estilos)
- Slick Carousel (para sliders/carousels)

### Consideraciones

Esta aplicacion trae la informacion del stock de los productos desde la base de datos y
simula un control de stock desde el front-end, descontando la cantidad añadida al carrito del stock total.
Sin embargo, a fines practicos y netamente del desarrollo, no descuenta el stock de la base de datos una vez simulada la compra,
para evitar inconvenientes por falta de stock en la demo de la aplicacion.
Una vez finalizada la compra, se envia la informacion de la transaccion a una coleccion en la base de datos.



### Demo
Puedes probar esta app en linea [con un simple click aqui](https://react-five-mu.vercel.app/) 



![Clip que demuestra la funcionalidad del firestore](public/demo.gif)


**¡Gracias por utilizar ReactCoderHouse! Esperamos que disfrutes utilizando nuestra aplicación e-commerce.**