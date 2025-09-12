import axios from "axios";

// URL base de la API desde la variable de entorno
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://ecommerceproductonline-qa.up.railway.app";

// Configura Axios con la base URL y headers por defecto
const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor para agregar el token a las peticiones que lo requieran
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      // Opcional: Redirigir al login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// --- Usuarios ---
export const crearUsuario = async (usuario) => {
  try {
    const response = await api.post("/usuario", usuario);
    return response.data;
  } catch (error) {
    console.error("Error creando usuario:", error);
    throw error;
  }
};

export const getUsuario = async (identifier) => {
  try {
    const response = await api.get(`/usuario/${identifier}`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo usuario:", error);
    throw error;
  }
};

export const eliminarUsuario = async (cedula) => {
  try {
    const response = await api.delete(`/usuario/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error eliminando usuario:", error);
    throw error;
  }
};

export const actualizarUsuario = async (cedula, datos) => {
  try {
    const response = await api.put(`/usuario/${cedula}`, datos);
    return response.data;
  } catch (error) {
    console.error("Error actualizando usuario:", error);
    throw error;
  }
};

export const consultarUsuario = async (cedula) => {
  try {
    const response = await api.get(`/usuario/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error consultando usuario:", error);
    throw error;
  }
};

// --- Productos ---
export const crearProducto = async (producto) => {
  try {
    const response = await api.post("/productos", producto);
    return response.data;
  } catch (error) {
    console.error("Error creando producto:", error);
    throw error;
  }
};

export const listarProductos = async () => {
  try {
    const response = await api.get("/listar");
    return response.data;
  } catch (error) {
    console.error("Error listando productos:", error);
    throw error;
  }
};

export const listarProductosPorCedula = async (cedula) => {
  try {
    const response = await api.get(`/listar/cedula`, { params: { cedula } });
    return response.data;
  } catch (error) {
    console.error("Error listando productos por cédula:", error);
    throw error;
  }
};

export const listarProductosPorNombre = async (nombre) => {
  try {
    const response = await api.get(`/listar/nombre`, { params: { nombre } });
    return response.data;
  } catch (error) {
    console.error("Error listando productos por nombre:", error);
    throw error;
  }
};

export const actualizarProducto = async (id, producto) => {
  try {
    const response = await api.put(`/update/${id}`, producto);
    return response.data;
  } catch (error) {
    console.error("Error actualizando producto:", error);
    throw error;
  }
};

export const eliminarProducto = async (id) => {
  try {
    const response = await api.delete(`/producto/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error eliminando producto:", error);
    throw error;
  }
};

// --- Sesión ---
export const iniciarSesion = async (credenciales) => {
  try {
    const response = await api.post("/iniciarSesion", credenciales);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error("Error iniciando sesión:", {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data,
    });
    throw error;
  }
};

export const cerrarSesion = async (token) => {
  try {
    const response = await api.post("/cerrarSesion", null, {
      params: { token },
    });
    localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    console.error("Error cerrando sesión:", error);
    throw error;
  }
};

// --- Carrito ---
export const agregarProductoAlCarrito = async (
  cedula,
  idProducto,
  cantidad
) => {
  try {
    const response = await api.post("/agregar", null, {
      params: { cedula, idProducto, cantidad },
    });
    return response.data;
  } catch (error) {
    console.error("Error agregando producto al carrito:", error);
    throw error;
  }
};

export const actualizarCantidadCarrito = async (
  cedula,
  idproducto,
  nuevaCantidad
) => {
  try {
    const response = await api.put("/actualizarcantidad", null, {
      params: { cedula, idproducto, nuevaCantidad },
    });
    return response.data;
  } catch (error) {
    console.error("Error actualizando cantidad en carrito:", error);
    throw error;
  }
};

export const listarCarrito = async (cedula) => {
  try {
    const response = await api.get(`/Consultarcarrito/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error consultando carrito:", error);
    throw error;
  }
};

export const vaciarCarrito = async (cedula) => {
  try {
    const response = await api.delete(`/vaciar/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error vaciando carrito:", error);
    throw error;
  }
};

export const eliminarProductoCarrito = async (cedula, idproducto) => {
  try {
    const response = await api.delete("/eliminar", {
      params: { cedula, idproducto },
    });
    return response.data;
  } catch (error) {
    console.error("Error eliminando producto del carrito:", error);
    throw error;
  }
};

// --- Facturas ---
export const crearFactura = async (factura) => {
  try {
    const response = await api.post("/crear-factura", factura);
    return response.data;
  } catch (error) {
    console.error("Error creando factura:", error);
    throw error;
  }
};

export const crearDetalleFactura = async (detalle) => {
  try {
    const response = await api.post("/crear-detalle", detalle);
    return response.data;
  } catch (error) {
    console.error("Error creando detalle de factura:", error);
    throw error;
  }
};

export const crearFacturaConDetalles = async (factura) => {
  try {
    const response = await api.post("/crear-factura-con-detalles", factura);
    return response.data;
  } catch (error) {
    console.error("Error creando factura con detalles:", error);
    throw error;
  }
};

export const listarFacturas = async () => {
  try {
    const response = await api.get("/obtener-factura");
    return response.data;
  } catch (error) {
    console.error("Error listando facturas:", error);
    throw error;
  }
};

export const consultarFacturaPorId = async (idFactura) => {
  try {
    const response = await api.get(`/obtener-factura/${idFactura}`);
    return response.data;
  } catch (error) {
    console.error("Error consultando factura:", error);
    throw error;
  }
};

export const consultarDetallesFactura = async (idFactura) => {
  try {
    const response = await api.get(`/detalle-por-factura/${idFactura}`);
    return response.data;
  } catch (error) {
    console.error("Error consultando detalles de factura:", error);
    throw error;
  }
};

export const eliminarFactura = async (idFactura) => {
  try {
    const response = await api.delete(`/eliminar-factura/${idFactura}`);
    return response.data;
  } catch (error) {
    console.error("Error eliminando factura:", error);
    throw error;
  }
};

// --- Comentarios ---
export const listarComentariosPorProducto = async (idProducto) => {
  try {
    const response = await api.get(`/comentariosProducto/${idProducto}`);
    return response.data;
  } catch (error) {
    console.error("Error listando comentarios por producto:", error);
    throw error;
  }
};

export const listarComentariosPorUsuario = async (cedula) => {
  try {
    const response = await api.get(`/comentariosUsuario/${cedula}`);
    return response.data;
  } catch (error) {
    console.error("Error listando comentarios por usuario:", error);
    throw error;
  }
};

export const agregarComentario = async (comentario) => {
  try {
    const response = await api.post("/agregarComentario", comentario);
    return response.data;
  } catch (error) {
    console.error("Error agregando comentario:", error);
    throw error;
  }
};

export const eliminarComentario = async (idComentario) => {
  try {
    const response = await api.delete(`/eliminarComentario/${idComentario}`);
    return response.data;
  } catch (error) {
    console.error("Error eliminando comentario:", error);
    throw error;
  }
};

// --- Valoraciones ---
export const agregarValoracion = async (valoracion) => {
  try {
    const response = await api.post("/agregar/valoracion", valoracion);
    return response.data;
  } catch (error) {
    console.error("Error agregando valoración:", error);
    throw error;
  }
};

export const consultarValoracionesPorPuntuacion = async (puntuacion) => {
  try {
    const response = await api.get(`/valoraciones/puntuacion/${puntuacion}`);
    return response.data;
  } catch (error) {
    console.error("Error consultando valoraciones:", error);
    throw error;
  }
};
