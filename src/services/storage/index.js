const storageKey = 'huebridge_ip_address'

export const setHueBridgeIp = (ip) => localStorage.setItem(storageKey, ip)

export const getHueBridgeIp = () => localStorage.getItem(storageKey) || ''
