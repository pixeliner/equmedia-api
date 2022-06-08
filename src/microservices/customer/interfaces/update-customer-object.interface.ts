import { UpdateCustomerProfileDto } from '../rest/dto/update-customer-profile';

export interface IUpdateCustomerObject {
  id: string;
  updateCustomerProfileData: UpdateCustomerProfileDto;
}
