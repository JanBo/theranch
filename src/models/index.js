// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Beef = {
  "QUARTER": "QUARTER",
  "HALF": "HALF",
  "WHOLE": "WHOLE"
};

const { Custome, Order } = initSchema(schema);

export {
  Custome,
  Order,
  Beef
};