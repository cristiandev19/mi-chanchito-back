import { Document } from 'mongoose';

export interface ITransfers extends Document {
  _id: string;
  description : string;
  details: string;
  amount : Number;
  dateTransfer : Date;
  cashFlow : string;
  userId: string;
}
