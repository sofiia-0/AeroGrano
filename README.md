# AeroGrano Rural | Versión preparada para GitHub Pages

Este ZIP contiene una web **estática**, compatible con GitHub Pages. **No hace falta Laravel ni configurar un servidor** para publicarla.

## Publicación en GitHub Pages

1. Crear un repositorio nuevo en GitHub, por ejemplo `aerograno-rural` (público en el plan GitHub Free).
2. Descomprimir este ZIP. Subir **los archivos y las carpetas que están dentro**, directamente a la raíz del repositorio. El archivo `index.html` debe quedar a nivel superior (NO dentro de otra carpeta).
3. En el repositorio, ir a **Settings → Pages**.
4. En **Build and deployment → Source**, seleccionar **Deploy from a branch**.
5. Elegir la rama **main**, la carpeta **/(root)** y presionar **Save**.
6. Esperar el despliegue y abrir `https://USUARIO.github.io/aerograno-rural/` (sustituir USUARIO y el nombre del repositorio).

### Estructura que debe verse en la raíz de GitHub

```
index.html
.nojekyll
assets/
css/
js/
vendor/
README.md
server.js                (solo para vista local, GitHub Pages no lo usa)
package.json             (solo para vista local)
INICIAR_WINDOWS.bat      (solo para vista local)
```

## Qué funciona

- Ambos escenarios, formularios, cálculos, filtros, gráficas y visita guiada.
- Importar archivo Excel `.xlsx`, CSV o respaldo JSON desde **Registros y archivos**.
- Exportar Excel, JSON y presentaciones PowerPoint `.pptx` generadas por la biblioteca local en `vendor/`.
- IndexedDB en el navegador de la persona que visita la web.
- No hay credenciales, bases de datos ni servicios remotos.

## Importante: almacenamiento por dispositivo

**Cada navegador tiene su propio historial.** Subir este proyecto a GitHub NO sube los 700 registros importados en `localhost` ni sincroniza datos entre personas. La primera visita tendrá los dos escenarios vacíos: importa tu Excel de 700 filas en la página publicada. Para trasladar otros datos, exportá un respaldo JSON desde la web anterior e importalo en la nueva.

No subas a un repositorio público datos personales, contraseñas o información de productores sin consentimiento. Los registros que introduces en el navegador no se publican en GitHub automáticamente.

## Datos de demostración

El proyecto **ya no precarga datos ficticios** en un navegador nuevo. Por compatibilidad mantiene el botón opcional «Restablecer demo» y el archivo `js/data.js`; solo se mostrarán ejemplos si alguien pulsa ese botón. Los registros de tu Excel conservan la marca «Simulado · Excel».

## Ejecutar en VS Code / Windows

Abrí esta carpeta y corré `npm start`, luego visitá `http://localhost:4173`. No hace falta instalar dependencias npm. Los archivos `server.js`, `package.json` e `INICIAR_WINDOWS.bat` son para uso local, GitHub Pages los ignora.

## Licencias de terceros

Las bibliotecas locales de JSZip y PptxGenJS se incluyen en `vendor/`, junto con sus archivos de licencia. La carga opcional de Google Fonts requiere conexión para esas tipografías; la app tiene fuentes alternativas.
