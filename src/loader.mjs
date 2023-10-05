import { register } from 'node:module';

const loaderURL = new URL('./http-loader.mjs', import.meta.url);

console.log('Registering', loaderURL);

await register(loaderURL);
