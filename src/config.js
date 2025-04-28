import {config} from 'dotenv'
config()

export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'sql10775453'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'XjNXiTSA3r'
export const DB_HOST = process.env.DB_HOST || 'sql10.freesqldatabase.com'
export const DB_DATABASE = process.env.DB_DATABASE || 'sql10775453'
export const DB_PORT = process.env.DB_PORT || 3306