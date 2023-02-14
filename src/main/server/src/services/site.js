/**
 * @name: site
 * @author: suarezzhu
 * @date: 2023/2/14 09:41
 * @description：site
 * @update: 2023/2/14 09:41
 */
import sql from '../lib/sequelize'



const [results, metadata] = await sql.query("select * from sua_site");
