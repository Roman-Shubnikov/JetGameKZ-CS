const dev = process.env.NODE_ENV !== 'production';
export const CONNECT_DB = {
    host: "188.120.246.221",
    user: "server",
    database: "jetgaming_site",
    password: "dekoyprojectpassword"
}
export const CONNECT_DB_CS = {
    host: "188.120.246.221",
    user: "server",
    database: "awp_levelranks",
    password: "dekoyprojectpassword"
}
export const STEAM_AUTH = {
    token: dev ? "D5CEA1BABC84D3104D3197FDCB1F1A8A" : "52FBF24F5668FDF15EEDE22A076126BD",
    redirect: dev ? "http://localhost:3000/api/auth/steam/return" : "https://jet-game-kz-cs.vercel.app/api/auth/steam/return",
    host: dev ? "http://localhost:3000/" : "https://jet-game-kz-cs.vercel.app/",

}
export const LANGUAGES = ['en', 'ru', 'kz'];