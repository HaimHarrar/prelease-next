import { customType } from "drizzle-orm/pg-core";

export const bytea = customType<{ data: Buffer; driverData: Buffer }>({
  dataType() {
    return "bytea";
  },
  toDriver(value) {
    return value; // Buffer → Buffer
  },
  fromDriver(value) {
    return value; // Buffer → Buffer
  },
});