import { createContext, useContext, useState, useCallback } from "react";
import {
  iniciarSesion,
  cerrarSesion,
  crearUsuario,
  eliminarUsuario,
  actualizarUsuario,
  consultarUsuario,
  crearProducto,
  listarProductos,
  listarProductosPorCedula,
  listarProductosPorNombre,
  actualizarProducto,
  eliminarProducto,
  agregarProductoAlCarrito,
  actualizarCantidadCarrito,
  listarCarrito,
  vaciarCarrito,
  eliminarProductoCarrito,
  crearFactura,
  crearDetalleFactura,
  crearFacturaConDetalles,
  listarFacturas,
  consultarFacturaPorId,
  consultarDetallesFactura,
  eliminarFactura,
  listarComentariosPorProducto,
  listarComentariosPorUsuario,
  agregarComentario,
  eliminarComentario,
  agregarValoracion,
  consultarValoracionesPorPuntuacion,
} from "./api";

// Crear el Context
const EcommerceContext = createContext();

// Proveedor del Context
export const EcommerceProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado del usuario (cédula, token, etc.)
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [carrito, setCarrito] = useState([]); // Estado del carrito
  const [loading, setLoading] = useState(false); // Estado para manejar carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Iniciar sesión
  const login = useCallback(async (credenciales) => {
    setLoading(true);
    try {
      const response = await iniciarSesion(credenciales);
      const usuarioData = await getUsuario(response.usuario); // Usar usuario
      setUser({
        usuario: response.usuario,
        token: response.token,
        cedula: usuarioData.cedula,
        nombre: usuarioData.nombre,
        apellido: usuarioData.apellido,
        mail: usuarioData.mail,
        direccion: usuarioData.direccion,
        telefono: usuarioData.telefono,
        nacionalidad: usuarioData.nacionalidad,
      });
      setIsAuthenticated(true);
      setError(null);
      return response;
    } catch (err) {
      setError("Credenciales incorrectas");
      throw err;
    }
  }, []);

  const crearUsuario = useCallback(async (usuarioData) => {
    try {
      const response = await crearUsuario(usuarioData);
      setUser({
        usuario: usuarioData.usuario,
        cedula: usuarioData.cedula,
        nombre: usuarioData.nombre,
        apellido: usuarioData.apellido,
        mail: usuarioData.mail,
        direccion: usuarioData.direccion,
        telefono: usuarioData.telefono,
        nacionalidad: usuarioData.nacionalidad,
      });
      setError(null);
      return response;
    } catch (err) {
      setError("Error al crear el usuario");
      throw err;
    }
  }, []);

  const actualizarUsuario = useCallback(async (cedula, datos) => {
    try {
      const response = await actualizarUsuario(cedula, datos);
      setUser((prev) => ({
        ...prev,
        ...datos,
      }));
      setError(null);
      return response;
    } catch (err) {
      setError("Error al actualizar los datos del usuario");
      throw err;
    }
  }, []);

  // Cerrar sesión
  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await cerrarSesion(localStorage.getItem("token"));
      setUser(null);
      setIsAuthenticated(false);
      setCarrito([]);
      setError(null);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Consultar carrito
  const fetchCarrito = useCallback(async (cedula) => {
    setLoading(true);
    try {
      const data = await listarCarrito(cedula);
      setCarrito(data);
      setError(null);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Valor del Context
  const value = {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
    fetchCarrito,
    carrito,
    // Usuarios
    crearUsuario,
    eliminarUsuario,
    actualizarUsuario,
    consultarUsuario,
    // Productos
    crearProducto,
    listarProductos,
    listarProductosPorCedula,
    listarProductosPorNombre,
    actualizarProducto,
    eliminarProducto,
    // Carrito
    agregarProductoAlCarrito,
    actualizarCantidadCarrito,
    vaciarCarrito,
    eliminarProductoCarrito,
    // Facturas
    crearFactura,
    crearDetalleFactura,
    crearFacturaConDetalles,
    listarFacturas,
    consultarFacturaPorId,
    consultarDetallesFactura,
    eliminarFactura,
    // Comentarios
    listarComentariosPorProducto,
    listarComentariosPorUsuario,
    agregarComentario,
    eliminarComentario,
    // Valoraciones
    agregarValoracion,
    consultarValoracionesPorPuntuacion,
  };

  return (
    <EcommerceContext.Provider value={value}>
      {children}
    </EcommerceContext.Provider>
  );
};

// Hook personalizado para usar el Context
export const useEcommerce = () => {
  const context = useContext(EcommerceContext);
  if (!context) {
    throw new Error("useEcommerce debe usarse dentro de un EcommerceProvider");
  }
  return context;
};
