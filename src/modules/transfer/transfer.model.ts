import * as mongoose from 'mongoose';
import typeCashFlow from '../../constants/transfer';
import { ITransfers } from './transfer.interface';

const transfesSchema = new mongoose.Schema<ITransfers>({
  title        : { type: String, default: '', required: true },
  description  : { type: String, default: '', required: false },
  amount       : { type: Number, default: 0, required: true },
  dateTransfer : { type: Date, default: Date.now, required: true },
  cashFlow     : {
    type     : String,
    default  : '',
    required : true,
    enum     : [...Object.values(typeCashFlow)],
  },
});

const Transfers = mongoose.model('Transfers', transfesSchema);
export default Transfers;
