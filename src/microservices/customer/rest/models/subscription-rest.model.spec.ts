import { RestSubscription } from './subscription-rest.model';

describe('RestSubscription', () => {
  it('should create new RestSubscription', () => {
    const idToTest = '1';
    const nameToTest = 'John';
    const descriptionToTest = 'Doe';
    const daysToTest = 30;
    const priceToTest = 5;

    const restBookingModelModel = new RestSubscription(
      idToTest,
      nameToTest,
      descriptionToTest,
      daysToTest,
      priceToTest,
    );
    expect(restBookingModelModel.id).toBe(idToTest);
    expect(restBookingModelModel.name).toBe(nameToTest);
    expect(restBookingModelModel.description).toBe(descriptionToTest);
    expect(restBookingModelModel.days).toBe(daysToTest);
    expect(restBookingModelModel.price).toBe(priceToTest);
    expect(restBookingModelModel instanceof RestSubscription).toBe(true);
  });
});
