import { Errors, User } from "../types/";

export const validateObject = (obj: User) => {
  const errors = {} as Errors;
  if(!Object.prototype.hasOwnProperty.call(obj, 'name')){
      errors['name'] = "Your name is required!"  
  }
  if(!Object.prototype.hasOwnProperty.call(obj, 'trackId')){
      errors['track'] = "Your track is required!"  
  }
  if(!Object.prototype.hasOwnProperty.call(obj, 'email')){
      errors['email'] = "Your email is required!"  
  }
  if(!Object.prototype.hasOwnProperty.call(obj, 'phoneNumber')){
      errors['phoneNumber'] = "Your phone number is required!"  
  }
  if(!Object.prototype.hasOwnProperty.call(obj, 'location')){
      errors['location'] = "Your address is required!"  
  }
  if(!Object.prototype.hasOwnProperty.call(obj, 'cohort')){
      errors['cohort'] = "The cohort is required!"  
  }

  return errors;
}
