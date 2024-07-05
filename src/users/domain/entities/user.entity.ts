export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createdAt = props.createdAt ?? new Date();
  }
}
