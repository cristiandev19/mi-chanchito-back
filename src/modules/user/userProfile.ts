import { ValueObject } from "core/domain/ValueObject";

interface UserProfileProps {
  names: string;
  lastNames: string;
  picture: string;
}

export class UserProfile extends ValueObject<UserProfileProps> {

  get names (): string {
    return this.props.names;
  }

  get lastNames (): string {
    return this.props.lastNames;
  }
  get picture (): string {
    return this.props.picture;
  }

  private constructor (props: UserProfileProps) {
    super(props)
  }

  // public static create (html: string): Result<UserProfile> {

  //   const guardResult = Guard.againstNullOrUndefined(html, 'html');

  //   if (!guardResult.succeeded) {
  //     return Result.fail<UserProfile>(guardResult.message);
  //   }

  //   if (html.length >= UserProfile.NOTES_MAX_LENGTH) {
  //     return Result.fail<UserProfile>('Max length exceeded');
  //   }

  //   return Result.ok<UserProfile>(new UserProfile({ html }))
  // }
}
