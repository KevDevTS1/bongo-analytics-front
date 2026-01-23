import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

/**
 * Interfaz para los datos del formulario de contacto
 */
export interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
  empresa?: string;
  telefono?: string;
}

/**
 * Interfaz para la respuesta de la API
 */
export interface ContactResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

/**
 * Servicio para enviar el formulario de contacto
 * @param formData - Datos del formulario de contacto
 * @returns Promise con la respuesta de la API
 * @throws Error si el envío falla
 */
export async function enviarFormularioContacto(
  formData: ContactFormData
): Promise<ContactResponse> {
  const requestId =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const startTime =
    typeof performance !== 'undefined' && 'now' in performance
      ? performance.now()
      : Date.now();

  try {
    // Preparar los datos según lo que espera el backend
    // Limpiar y normalizar los datos para evitar problemas de codificación
    const payload = {
      nombre: formData.nombre.trim(),
      email: formData.email.trim(),
      mensaje: formData.mensaje.trim(),
      // Incluir campos opcionales solo si tienen valor
      ...(formData.empresa && formData.empresa.trim() && { 
        empresa: formData.empresa.trim() 
      }),
      ...(formData.telefono && formData.telefono.trim() && { 
        telefono: formData.telefono.trim() 
      }),
    };

    // Log para debugging (solo en desarrollo)
    if (import.meta.env.DEV) {
      console.log('[contacto] Enviando formulario', {
        requestId,
        endpoint: API_ENDPOINTS.contacto,
        payload,
      });
    }

    const response = await axios.post<ContactResponse>(
      API_ENDPOINTS.contacto,
      payload,
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json',
          'X-Request-Id': requestId,
        },
        timeout: 10000, // 10 segundos de timeout
        // Asegurar que axios serialice correctamente como JSON UTF-8
        transformRequest: [(data) => {
          const jsonString = JSON.stringify(data);
          // Verificar que la serialización fue exitosa
          if (import.meta.env.DEV) {
            console.log('JSON serializado:', jsonString);
            console.log('Tamaño en bytes:', new Blob([jsonString]).size);
          }
          return jsonString;
        }],
      }
    );

    const endTime =
      typeof performance !== 'undefined' && 'now' in performance
        ? performance.now()
        : Date.now();
    console.log('[contacto] Formulario enviado', {
      requestId,
      status: response.status,
      durationMs: Math.round(endTime - startTime),
      data: response.data,
    });
    return response.data;
  } catch (error) {
    // Manejo de errores más detallado
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'Error al enviar el formulario';
      
      const endTime =
        typeof performance !== 'undefined' && 'now' in performance
          ? performance.now()
          : Date.now();
      console.error('Error al enviar formulario:', {
        requestId,
        message: errorMessage,
        status: error.response?.status,
        data: error.response?.data,
        durationMs: Math.round(endTime - startTime),
      });

      throw new Error(errorMessage);
    }

    // Error no relacionado con axios
    console.error('Error inesperado:', { requestId, error });
    throw new Error('Error inesperado al enviar el formulario');
  }
}
