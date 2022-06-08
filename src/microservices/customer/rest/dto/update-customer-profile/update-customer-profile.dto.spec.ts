import { UpdateCustomerProfileDto } from './update-customer-profile.dto';

describe('UpdateCustomerProfileDto', () => {
  it('should create a Dto object', () => {
    const testUpdateCustomerProfileDto = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'jhon@doe.com',
    };

    expect(new UpdateCustomerProfileDto('John', 'Doe', 'jhon@doe.com')).toEqual(
      testUpdateCustomerProfileDto,
    );
  });
});
