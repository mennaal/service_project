import { Schema } from 'mongoose';

export const OrderSchema = new Schema({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
});

export interface Order {
  productId: string;
  quantity: number;
}
