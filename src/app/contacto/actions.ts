'use server';

import { supabase } from '@/lib/supabase';

export interface FormState {
  success: boolean;
  message: string;
  errors?: {
    nombre?: string;
    email?: string;
    empresa?: string;
    telefono?: string;
    servicio?: string;
    mensaje?: string;
  };
  data?: {
    nombre: string;
    email: string;
    empresa?: string;
    telefono?: string;
    servicio: string;
    mensaje: string;
  };
}

const VALID_SERVICES = ['soporte', 'redes', 'mantenimiento', 'seguridad', 'impresion', 'microsoft'] as const;
export type ServiceInterest = typeof VALID_SERVICES[number];

export interface ContactSubmissionInput {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service_interest: ServiceInterest;
  message: string;
}

/**
 * Server Action que valida y procesa el envío de un formulario de contacto.
 * Soporta inputs en formato de objeto (ContactSubmissionInput) o FormData.
 * Intenta guardar en Supabase y, si no está configurado, realiza un fallback con retardo y loggeo en consola.
 */
export async function submitContactForm(data: unknown): Promise<{ success: boolean; message: string }> {
  try {
    let inputData: Partial<ContactSubmissionInput> = {};

    if (data instanceof FormData) {
      inputData = {
        name: data.get('name')?.toString() || data.get('nombre')?.toString(),
        email: data.get('email')?.toString(),
        company: data.get('company')?.toString() || data.get('empresa')?.toString() || undefined,
        phone: data.get('phone')?.toString() || data.get('telefono')?.toString() || undefined,
        service_interest: (data.get('service_interest')?.toString() || data.get('servicio')?.toString()) as ServiceInterest,
        message: data.get('message')?.toString() || data.get('mensaje')?.toString(),
      };
    } else if (data && typeof data === 'object') {
      const obj = data as Record<string, unknown>;
      inputData = {
        name: typeof obj.name === 'string' ? obj.name : (typeof obj.nombre === 'string' ? obj.nombre : undefined),
        email: typeof obj.email === 'string' ? obj.email : undefined,
        company: typeof obj.company === 'string' ? obj.company : (typeof obj.empresa === 'string' ? obj.empresa : undefined),
        phone: typeof obj.phone === 'string' ? obj.phone : (typeof obj.telefono === 'string' ? obj.telefono : undefined),
        service_interest: (typeof obj.service_interest === 'string' ? obj.service_interest : (typeof obj.servicio === 'string' ? obj.servicio : undefined)) as ServiceInterest,
        message: typeof obj.message === 'string' ? obj.message : (typeof obj.mensaje === 'string' ? obj.mensaje : undefined),
      };
    }

    const { name, email, company, phone, service_interest, message } = inputData;

    // Validaciones de datos
    if (!name || name.trim() === '') {
      return { success: false, message: 'El nombre es obligatorio.' };
    }
    if (!email || email.trim() === '') {
      return { success: false, message: 'El correo electrónico es obligatorio.' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'El correo electrónico no es válido.' };
    }
    if (!service_interest) {
      return { success: false, message: 'El servicio de interés es obligatorio.' };
    }
    if (!VALID_SERVICES.includes(service_interest)) {
      return {
        success: false,
        message: `Servicio de interés no válido. Debe ser uno de: ${VALID_SERVICES.join(', ')}`,
      };
    }
    if (!message || message.trim() === '') {
      return { success: false, message: 'El mensaje es obligatorio.' };
    }

    const submissionData = {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || null,
      phone: phone?.trim() || null,
      service_interest,
      message: message.trim(),
    };

    // Si Supabase no está configurado (variables no provistas), aplicamos fallback robusto
    if (!supabase) {
      console.warn('--- [SUPABASE FALLBACK LOG] ---');
      console.warn('Las variables de entorno de Supabase no están configuradas.');
      console.warn('Simulando inserción exitosa del formulario de contacto...');
      console.warn('Datos recibidos:', JSON.stringify(submissionData, null, 2));
      console.warn('--------------------------------');

      // Simular retardo de red asíncrono
      await new Promise((resolve) => setTimeout(resolve, 800));

      return {
        success: true,
        message: '¡Mensaje enviado con éxito! (Simulado por falta de credenciales de Supabase)',
      };
    }

    // Guardado real en Supabase
    const { error } = await supabase
      .from('contact_submissions')
      .insert([submissionData]);

    if (error) {
      console.error('Error al insertar contacto en Supabase:', error);
      return {
        success: false,
        message: `Error al guardar el contacto en la base de datos: ${error.message}`,
      };
    }

    return {
      success: true,
      message: '¡Mensaje de contacto enviado con éxito!',
    };
  } catch (error) {
    console.error('Excepción en submitContactForm:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      success: false,
      message: `Ocurrió un error inesperado al procesar la solicitud: ${errorMessage}`,
    };
  }
}

/**
 * Server Action compatible con useActionState del componente ContactForm.tsx.
 * Mapea los campos del formulario en español y realiza el proceso con submitContactForm.
 */
export async function submitContact(prevState: FormState, formData: FormData): Promise<FormState> {
  const nombre = formData.get('nombre')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const empresa = formData.get('empresa')?.toString() || '';
  const telefono = formData.get('telefono')?.toString() || '';
  const servicio = formData.get('servicio')?.toString() || '';
  const mensaje = formData.get('mensaje')?.toString() || '';

  const errors: NonNullable<FormState['errors']> = {};

  if (!nombre.trim()) errors.nombre = 'El nombre es obligatorio.';
  
  if (!email.trim()) {
    errors.email = 'El correo electrónico es obligatorio.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = 'El correo electrónico no es válido.';
    }
  }

  if (!servicio.trim()) {
    errors.servicio = 'El servicio de interés es obligatorio.';
  } else if (!VALID_SERVICES.includes(servicio.trim() as ServiceInterest)) {
    errors.servicio = `Servicio no válido. Debe ser uno de: ${VALID_SERVICES.join(', ')}`;
  }

  if (!mensaje.trim()) errors.mensaje = 'El mensaje es obligatorio.';

  const stateData = {
    nombre: nombre.trim(),
    email: email.trim(),
    empresa: empresa.trim() || undefined,
    telefono: telefono.trim() || undefined,
    servicio: servicio.trim(),
    mensaje: mensaje.trim(),
  };

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Por favor, corrige los errores en el formulario.',
      errors,
      data: stateData,
    };
  }

  // Llamar a la lógica de submitContactForm mapeando los datos
  const result = await submitContactForm({
    name: stateData.nombre,
    email: stateData.email,
    company: stateData.empresa,
    phone: stateData.telefono,
    service_interest: stateData.servicio as ServiceInterest,
    message: stateData.mensaje,
  });

  return {
    success: result.success,
    message: result.message,
    data: stateData,
  };
}
