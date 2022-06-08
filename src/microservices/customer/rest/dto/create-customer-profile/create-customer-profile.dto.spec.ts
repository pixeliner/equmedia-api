import { CreateCustomerProfileDto } from './create-customer-profile.dto';

describe('CreateCustomerProfileDto', () => {
  it('should create a Dto object', () => {
    const testCreateCustomerProfileDto = {
      auth_id: '1',
      first_name: 'John',
      last_name: 'Doe',
      email: 'jhon@doe.com',
    };

    expect(
      new CreateCustomerProfileDto('1', 'John', 'Doe', 'jhon@doe.com'),
    ).toEqual(testCreateCustomerProfileDto);
  });
});
