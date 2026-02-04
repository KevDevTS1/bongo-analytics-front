/**
 * Configuración de URLs de API según el ambiente
 */

type Environment = "local" | "pre" | "prod";

// Determinar el ambiente actual basado en la variable de entorno o la URL
const getEnvironment = (): Environment => {
  // Si hay una variable de entorno definida, usarla
  if (import.meta.env.VITE_API_ENV) {
    return import.meta.env.VITE_API_ENV as Environment;
  }

  // Si estamos en localhost, usar local
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return "local";
  }

  // Si la URL contiene 'pre' o 'staging', usar pre
  if (
    window.location.hostname.includes("pre") ||
    window.location.hostname.includes("staging")
  ) {
    return "pre";
  }

  // Por defecto, usar prod
  return "prod";
};

const currentEnv = getEnvironment();

// Configuración de URLs base para cada ambiente
const API_CONFIG: Record<Environment, string> = {
  local: "http://localhost:5000",
  pre: "https://backend-401262534029.us-central1.run.app", // Cambiar por tu URL de pre-producción
  prod: "https://backend-401262534029.us-central1.run.app", // Cambiar por tu URL de producción
};

// URL base de la API según el ambiente actual
export const API_BASE_URL = API_CONFIG[currentEnv];

// Versión de la API
export const API_VERSION = "v1";

// URL completa de la API
export const API_URL = `${API_BASE_URL}/api/${API_VERSION}`;

// Endpoints específicos
export const API_ENDPOINTS = {
  contacto: `${API_URL}/contacto`,
  // Agregar más endpoints aquí según sea necesario
  // ejemplo: usuarios: `${API_URL}/usuarios`,
} as const;

// Exportar el ambiente actual para debugging
export const CURRENT_ENVIRONMENT = currentEnv;

// Función helper para obtener la URL completa de un endpoint
export const getApiUrl = (endpoint: keyof typeof API_ENDPOINTS): string => {
  return API_ENDPOINTS[endpoint];
};
