import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Beef {
  QUARTER = "QUARTER",
  HALF = "HALF",
  WHOLE = "WHOLE"
}



type CustomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Custome {
  readonly id: string;
  readonly name?: string;
  readonly address?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly cust_orders?: (Order | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Custome, CustomeMetaData>);
  static copyOf(source: Custome, mutator: (draft: MutableModel<Custome, CustomeMetaData>) => MutableModel<Custome, CustomeMetaData> | void): Custome;
}

export declare class Order {
  readonly id: string;
  readonly order_date?: string;
  readonly order?: Beef | keyof typeof Beef;
  readonly paid?: number;
  readonly price?: number;
  readonly customeID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}