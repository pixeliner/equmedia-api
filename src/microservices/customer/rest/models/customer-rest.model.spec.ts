import { RestCustomer } from './customer-rest.model';

describe('RestCustomer', () => {
  it('should create new RestCustomer', () => {
    const idToTest = '1';
    const firstNameToTest = 'John';
    const lastNameToTest = 'Doe';
    const emailToTest = 'jhon@doe.com';

    const restBookingModelModel = new RestCustomer(
      idToTest,
      firstNameToTest,
      lastNameToTest,
      emailToTest,
    );
    expect(restBookingModelModel.id).toBe(idToTest);
    expect(restBookingModelModel.firstName).toBe(firstNameToTest);
    expect(restBookingModelModel.lastName).toBe(lastNameToTest);
    expect(restBookingModelModel.email).toBe(emailToTest);
    expect(restBookingModelModel instanceof RestCustomer).toBe(true);
  });
});
