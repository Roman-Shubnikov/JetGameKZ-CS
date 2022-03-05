export const getUnixTime = () => Math.floor(new Date().getTime() / 1000);
export const ok = (res) => res.json({response: true});