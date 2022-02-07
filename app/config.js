const dev = process.env.NODE_ENV !== 'production';
export const API_URL = dev ? 'http://localhost:3000/api' : 'http://localhost:3000/api';
export const SOCIAL_MEDIA = {
    vk: 'https://vk.com/jetgame',
    telegram: 'https://t.me/kz_jetgame',
    instagram: 'https://instagram.com/jetgame.kz',
    discord: 'https://discord.gg/WyuKD2uCQv',
}

