# El Barrio

Landing page estática del restaurante **El Barrio**.

## Despliegue en Vercel

### Opción 1: desde la web de Vercel
1. Sube este repositorio a GitHub, GitLab o Bitbucket.
2. Entra en [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detectará automáticamente que es un sitio estático.
4. Pulsa **Deploy**.

### Opción 2: con Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

Para producción:
```bash
vercel --prod
```

## Desarrollo local
Abre `index.html` directamente en el navegador o usa un servidor local simple:

```bash
npx serve .
```
