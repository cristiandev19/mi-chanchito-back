import { ModelBase } from '../../core/infra/model.base.interface';

interface TransferProps extends ModelBase {
  title : String;
  description : String;
  amount : Number;
  dateTransfer : Date;
  cashFlow : String;
}

class Transfer implements TransferProps {
  
}

export default Transfer;
