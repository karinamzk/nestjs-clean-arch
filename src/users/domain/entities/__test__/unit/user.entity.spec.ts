import { UserEntity, UserProps } from '../../user.entity';
import { faker } from '@faker-js/faker';

describe('UserEntity unit test', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let props: UserProps;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    sut = new UserEntity(props);
  });
  it('constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
});
