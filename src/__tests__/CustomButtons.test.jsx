import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CustomButtons } from "../components/common/CustomButtons/CustomButtons";

// Definimos un conjunto de pruebas para el componente 'CustomButtons'.
describe("Componente CustomButtons", () => {
  // Definimos una prueba que verifica si el botón se renderiza con el título correcto.
  it("renderiza el botón con el título correcto", () => {
    // Renderizamos el componente 'CustomButtons' dentro de 'BrowserRouter'.
    render(
      <BrowserRouter>
        <CustomButtons
          title="Botón de Prueba" // Asignamos el título del botón.
          variant="contained" // Asignamos estilos.
          link="/prueba" // Asignamos el enlace de navegación.
        />
      </BrowserRouter>
    );

    // Buscamos el botón en el documento utilizando su rol y nombre.
    const elementoBoton = screen.getByRole("button", {
      name: "Botón de Prueba",
    });

    // Verificamos que el botón esté presente en el documento.
    expect(elementoBoton).toBeInTheDocument();
  });

  // Definimos una prueba que verifica si el botón aplica el atributo 'disabled' cuando la propiedad 'disabled' es true.
  it("aplica el atributo disabled cuando la propiedad disabled es true", () => {
    // Renderizamos el componente 'CustomButtons' dentro de 'BrowserRouter'.
    render(
      <BrowserRouter>
        <CustomButtons
          title="Botón Deshabilitado" // Asignamos el título del botón.
          variant="outlined" // Asignamos estilos.
          disabled={true} // Asignamos la propiedad 'disabled' como true.
          link="/deshabilitado" // Asignamos el enlace de navegación.
        />
      </BrowserRouter>
    );

    // Buscamos el botón en el documento utilizando su rol y nombre.
    const elementoBoton = screen.getByRole("button", {
      name: "Botón Deshabilitado",
    });

    // Verificamos que el botón tenga el atributo 'disabled'.
    expect(elementoBoton).toBeDisabled();
  });
});
