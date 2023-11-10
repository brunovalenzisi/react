import app from "./firebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  addDoc,
} from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function cargarProductos(params) {
  console.log(params);
  const db = getFirestore(app);
  const productCollection = collection(db, "productos");
  const q = query(productCollection);
  if (params.id) {
    if (params.id == "Hombre" || params.id == "Mujer") {
      const qFiltrada = query(
        productCollection,
        where("genero", "==", params.id)
      );
      const productosFiltrados = await getDocs(qFiltrada);
      return productosFiltrados.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id: id };
      });
    } else if (params.id == "Calzado" || params.id == "Accesorios") {
      const qFiltrada = query(
        productCollection,
        where("categoria", "==", params.id)
      );
      const productosFiltrados = await getDocs(qFiltrada);
      return productosFiltrados.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id: id };
      });
    } else {
      const productosSnapshot = await getDocs(q);
      return productosSnapshot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id: id };
      });
    }
  } else {
    if (params.subcat) {
      const qFiltrada = query(
        productCollection,
        where("genero", "==", params.genero),
        where("categoria", "==", params.cat),
        where("subCategoria", "==", params.subcat)
      );
      const productosFiltrados = await getDocs(qFiltrada);
      return productosFiltrados.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id: id };
      });
    } else if (params.cat) {
      const qFiltrada = query(
        productCollection,
        where("genero", "==", params.genero),
        where("categoria", "==", params.cat)
      );
      const productosFiltrados = await getDocs(qFiltrada);
      return productosFiltrados.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id: id };
      });
    } else {
      const qFiltrada = query(productCollection);
      const productosFiltrados = await getDocs(qFiltrada);
      return productosFiltrados.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return { ...data, id: id };
      });
    }
  }
}

async function cargarProducto(params) {
  const db = getFirestore(app);
  const documento = doc(db, "productos", params.id);

  const productoEncontrado = await getDoc(documento);

  if (productoEncontrado.exists()) {
    // Encuentra un producto con el ID especificado
    const producto = productoEncontrado.data();
    return { ...producto, id: productoEncontrado.id };
  } else {
    // El producto no se encontró
    return null;
  }
}

async function enviarOrden(user, cart, clearCart) {
  const { nombre, telefono, email } = user;
  const order = {
    buyer: { name: nombre, phone: telefono, email: email },
    items: cart.map((item) => {
      return {
        name: item.producto,
        unidades: item.cantidad,
        precioUnitario: item.precio,
      };
    }),
    total: cart.reduce(
      (total, item) => total + item.precio.replace(/\./g, "") * item.cantidad,
      0
    ),
  };
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  await addDoc(ordersCollection, order)
    .then(() => {
      clearCart();
    })
}

export { cargarProductos, cargarProducto, enviarOrden };
