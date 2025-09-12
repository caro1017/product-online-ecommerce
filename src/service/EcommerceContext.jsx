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

      if (!response.usuario || !response.token) {
        throw new Error("Respuesta inválida del servidor");
      }

      // buscar cedula guardada (si existe)
      const cedulaGuardada = localStorage.getItem("cedula");
      let userData = { usuario: response.usuario, token: response.token };

      if (cedulaGuardada) {
        const usuarioData = await consultarUsuario(cedulaGuardada);
        userData = { ...usuarioData, token: response.token };
      }

      setUser(userData);
      localStorage.setItem("token", response.token);
      setIsAuthenticated(true);
      setError(null);

      return response;
    } catch (err) {
      setError("Credenciales incorrectas o error al iniciar sesión");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const crearUsuario = useCallback(async (usuarioData) => {
    try {
      const response = await crearUsuario(usuarioData);
      const userData = {
        usuario: usuarioData.usuario,
        cedula: usuarioData.cedula,
        nombre: usuarioData.nombre,
        apellido: usuarioData.apellido,
        mail: usuarioData.mail,
        direccion: usuarioData.direccion,
        telefono: usuarioData.telefono,
        nacionalidad: usuarioData.nacionalidad,
      };
      setUser(userData);
      setError(null);
      localStorage.setItem("cedula", usuarioData.cedula);
      return response;
    } catch (err) {
      console.error("Error creando usuario:", {
        message: err.message,
        code: err.code,
        status: err.response?.status,
        data: err.response?.data,
      });
      setError(err.response?.data?.message || "Error al crear el usuario");
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
      console.error("Error actualizando usuario:", {
        message: err.message,
        code: err.code,
        status: err.response?.status,
        data: err.response?.data,
      });
      setError(
        err.response?.data?.message ||
          "Error al actualizar los datos del usuario"
      );
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
      localStorage.removeItem("token");
      setError(null);
    } catch (err) {
      console.error("Error cerrando sesión:", {
        message: err.message,
        code: err.code,
        status: err.response?.status,
        data: err.response?.data,
      });
      setError(err.response?.data?.message || "Error al cerrar sesión");
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
      console.error("Error consultando carrito:", {
        message: err.message,
        code: err.code,
        status: err.response?.status,
        data: err.response?.data,
      });
      setError(err.response?.data?.message || "Error al consultar el carrito");
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
