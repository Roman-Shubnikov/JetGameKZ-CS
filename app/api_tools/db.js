import mysql from "mysql2/promise";
import { CONNECT_DB, CONNECT_DB_CS } from "./config";

// export const close = () => {
//     CONNECT_DB.connect()
// }

const dbGet_base = async (connect_config, sql, placeholders=[]) => {
    const connection = await mysql.createConnection(connect_config);
    const [res, meta] = await connection.execute(sql, placeholders);
    connection.end();
    return res
}
export const dbGet = async (sql, placeholders=[]) => {
    let res = await dbGet_base(CONNECT_DB, sql, placeholders)
    return res
}
export const dbGetCS = async (sql, placeholders=[]) => {
    let res = await dbGet_base(CONNECT_DB, sql, placeholders)
    return res
}