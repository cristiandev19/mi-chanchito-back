import { UserProfile } from "./userProfile";

interface UserProps {
  email: string;
  password: string;
  profile: UserProfile;
  passwordResetToken: string;
  emailVerified: boolean;
}

export class User extends AggregateRoot<UserProps> {

  get vinylId(): VinylId {
    return VinylId.create(this.id)
  }

  get email (): email {
    return this.props.email;
  }

  get album (): Album {
    return this.props.album;
  }

  get dateAdded (): Date {
    return this.props.dateAdded;
  }

  get traderId (): TraderId {
    return this.props.traderId;
  }

  get vinylNotes (): VinylNotes {
    return this.props.vinylNotes;
  }

  private constructor (props: VinylProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create (props: VinylProps, id?: UniqueEntityID): Result<Vinyl> {
    const propsResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.album, argumentName: 'album' },
      { argument: props.artist, argumentName: 'artist' },
      { argument: props.traderId, argumentName: 'traderId' }
    ]);

    if (!propsResult.succeeded) {
      return Result.fail<Vinyl>(propsResult.message)
    } 

    const vinyl = new Vinyl({
      ...props,
      dateAdded: props.dateAdded ? props.dateAdded : new Date(),
    }, id);
    const isNewlyCreated = !!id === false;

    if (isNewlyCreated) {
      vinyl.addDomainEvent(new VinylCreatedEvent(vinyl.vinylId))
    }

    return Result.ok<Vinyl>(vinyl);
  }
}