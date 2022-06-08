import { RestClaim } from './claim-rest.model';

describe('RestClaim', () => {
  it('should create new RestClaim', () => {
    const idToTest = '1';
    const nameToTest = 'John';
    const keyToTest = 'Doe';
    const expireDateToTest = new Date();

    const restBookingModelModel = new RestClaim(
      idToTest,
      nameToTest,
      keyToTest,
      expireDateToTest,
    );
    expect(restBookingModelModel.id).toBe(idToTest);
    expect(restBookingModelModel.name).toBe(nameToTest);
    expect(restBookingModelModel.key).toBe(keyToTest);
    expect(restBookingModelModel.expiresAt).toBe(expireDateToTest);
    expect(restBookingModelModel instanceof RestClaim).toBe(true);
  });
});
