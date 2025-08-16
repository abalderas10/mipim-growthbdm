# Configuración de Supabase para MIPIM México

## 1. Crear Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta
2. Crea un nuevo proyecto:
   - Nombre: `mipim-mexico`
   - Base de datos: Elige una región cercana (US East recomendado)
   - Contraseña: Genera una contraseña segura

## 2. Configurar Variables de Entorno

1. En tu proyecto de Supabase, ve a **Settings > API**
2. Copia los siguientes valores:
   - **Project URL**: `https://tu-proyecto.supabase.co`
   - **Anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

3. Actualiza el archivo `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 3. Crear la Base de Datos

1. En Supabase, ve a **SQL Editor**
2. Copia y ejecuta el contenido del archivo `supabase/schema.sql`
3. Esto creará:
   - Tabla `registrations`
   - Índices para optimización
   - Políticas de seguridad (RLS)
   - Triggers para automatización
   - Vista de estadísticas

## 4. Configurar Políticas de Seguridad

Las políticas ya están incluidas en el schema, pero puedes verificar en **Authentication > Policies**:

- ✅ **Allow public registration**: Permite insertar registros públicamente
- ✅ **Allow authenticated read**: Solo usuarios autenticados pueden leer
- ✅ **Allow authenticated update**: Solo usuarios autenticados pueden actualizar

## 5. Configurar Automatización (Opcional)

### Email de Bienvenida

1. Ve a **Edge Functions** en Supabase
2. Crea una nueva función llamada `send-welcome-email`
3. Configura el trigger para que se ejecute cuando se inserte un nuevo registro

### Webhooks para Integraciones

1. Ve a **Database > Webhooks**
2. Crea webhooks para:
   - Zapier/Make.com (automatización)
   - CRM (sincronización de contactos)
   - Email marketing (listas de correo)

## 6. Verificar Configuración

1. Reinicia el servidor de desarrollo: `npm run dev`
2. Ve al formulario de registro
3. Completa y envía un registro de prueba
4. Verifica en Supabase **Table Editor > registrations** que el registro se guardó

## 7. Monitoreo y Analytics

### Dashboard de Registros

Puedes crear consultas en **SQL Editor** para monitorear:

```sql
-- Registros por día
SELECT 
  DATE(created_at) as fecha,
  COUNT(*) as registros
FROM registrations 
GROUP BY DATE(created_at)
ORDER BY fecha DESC;

-- Empresas más representadas
SELECT 
  company,
  COUNT(*) as empleados_registrados
FROM registrations 
GROUP BY company
ORDER BY empleados_registrados DESC
LIMIT 10;

-- Intereses más populares
SELECT 
  unnest(interests) as interes,
  COUNT(*) as menciones
FROM registrations
GROUP BY interes
ORDER BY menciones DESC;
```

### Exportar Datos

```sql
-- Exportar todos los registros
SELECT 
  name as "Nombre",
  email as "Email",
  company as "Empresa",
  position as "Cargo",
  phone as "Teléfono",
  array_to_string(interests, ', ') as "Intereses",
  networking_goals as "Objetivos",
  experience_level as "Experiencia",
  created_at as "Fecha de Registro"
FROM registrations
ORDER BY created_at DESC;
```

## 8. Backup y Seguridad

1. **Backups automáticos**: Supabase hace backups automáticos
2. **Exportar datos**: Usa el SQL Editor para exportar a CSV
3. **Monitoreo**: Configura alertas en **Settings > Alerts**

## 9. Producción

Antes de ir a producción:

1. ✅ Verifica que las variables de entorno estén configuradas
2. ✅ Prueba el formulario completamente
3. ✅ Configura los emails de bienvenida
4. ✅ Establece límites de rate limiting si es necesario
5. ✅ Configura monitoreo y alertas

## Soporte

Si tienes problemas:

1. Revisa los logs en **Logs > Database**
2. Verifica las políticas de RLS
3. Consulta la [documentación de Supabase](https://supabase.com/docs)
4. Revisa el código en `src/lib/supabase.ts` y `src/components/RegistrationForm.tsx`