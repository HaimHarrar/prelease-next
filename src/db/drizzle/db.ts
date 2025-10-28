import "dotenv/config";
import {drizzle} from 'drizzle-orm/node-postgres';
import {Pool} from "pg";
import * as projectSchema from './schemas/project'
import * as caseSchema from './schemas/kase'

const pool = new Pool({connectionString: process.env.DATABASE_URL});
// with logger
// export const db = drizzle(pool, {schema: {...projectSchema, ...caseSchema}, logger: true})
export const db = drizzle(pool, {schema: {...projectSchema, ...caseSchema}})