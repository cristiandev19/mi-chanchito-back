import Mapper from "core/infra/Mapper";
import Transfer from "./transfer";
import TransferDTO from "./trasnfer.dto";

class TransferMap extends Mapper<Transfer> {
  public static toDTO (user: Transfer): TransferDTO {
    // id: user.id.toString(),
    // userName: user.name.value,
    // userEmail: user.email.value
  }

  public static toPersistence (user: Transfer): any {
    // return {
    //   user_id: user.id.toString(),
    //   user_name: user.name.value,
    //   user_email: user.email.value,
    //   is_active: user.isActive()
    // }
  }

  public static toDomain (raw: any): Transfer {
    // const nameOrResult = UserName.create(raw.user_name);
    // const emailOrResult = UserEmail.create(raw.user_email);
    // const passwordOrResult = UserPassword.create(raw.user_password);

    // return User.create({
    //   name: nameOrResult.getValue(),
    //   password: passwordOrResult.getValue(),
    //   email: emailOrResult.getValue()
    //   active: raw.is_active,
    // }, new UniqueEntityID(raw.user_id)).getValue()
  }
}

export default TransferMap;
