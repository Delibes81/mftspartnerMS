-- 1. Crear tipo ENUM para servicios de interés
CREATE TYPE mfts_service_type AS ENUM (
  'soporte',
  'redes',
  'mantenimiento',
  'seguridad',
  'impresion',
  'microsoft'
);

-- 2. Crear tipo ENUM para estados de la solicitud
CREATE TYPE submission_status AS ENUM (
  'new',
  'in_progress',
  'resolved',
  'archived'
);

-- 3. Crear tabla de contactos
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  service_interest mfts_service_type NOT NULL,
  message TEXT NOT NULL,
  status submission_status DEFAULT 'new' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 4. Habilitar Seguridad a Nivel de Fila (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- 5. Política para permitir inserción pública anónima (Formulario público de contacto)
CREATE POLICY "Permitir inserción pública anónima" 
  ON contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- 6. Política para permitir acceso completo (lectura/edición/borrado) a usuarios autenticados
CREATE POLICY "Permitir lectura y edición a administradores autenticados"
  ON contact_submissions
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
