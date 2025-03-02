export default defineEventHandler(async (event) => {
    return `Bienvenidos a las ${(new Date).toUTCString()}!`;
})
