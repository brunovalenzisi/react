import { collection, addDoc } from 'firebase/firestore';
import { db } from './src/firebaseConfig'; // Asegúrate de importar tu objeto 'db' desde firebaseConfig
import productos from './src/productos.json';

async function cargarProductosEnFirestore() {
  const productosCollection = collection(db, 'productos');

  for (const producto of productos) {
    try {
      await addDoc(productosCollection, producto);
      console.log('Producto agregado exitosamente:', producto);
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  }
}

cargarProductosEnFirestore();