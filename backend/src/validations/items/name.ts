import { fullName } from '../../helper/regex';

export const validationFullName = (name: string): string => {

  if (!name.match(fullName)) {
    throw new Error("You must enter a valid first and last name")
  }

  return name;
}