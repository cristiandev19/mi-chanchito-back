import { Document } from 'mongoose';

export interface ITransfers extends Document {
  _id: String;
  description : String;
  details: String;
  amount : Number;
  dateTransfer : Date;
  cashFlow : String;
}
