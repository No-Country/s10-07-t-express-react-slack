import { Errors, Register } from './interfaces';

export const validationErrors = (formLogin:Register) => {
  let errors: Errors = {};
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexPasswordMayuscula = /(?=.*[A-Z])/;
  const regexPasswordEspecialCharacter = /(?=.*[!@#$%^&*])/;

  if (!formLogin.email.length) {
    errors.email = "Por favor ingresa tu email.";
  }
  
  if (!regexEmail.test(formLogin.email)) {
    errors.email = "Por favor ingresa un email válido.";
  }

  if (!formLogin.password.length) {
    errors.password = "Por favor ingresa una contraseña.";
  }

  if (!regexPasswordMayuscula.test(formLogin.password)) {
    errors.password =
    "La contraseña debe tener al menos una letra mayúscula.";
  }

  if (!regexPasswordEspecialCharacter.test(formLogin.password)) {
    errors.password =
    "La contraseña debe tener al menos un carácter especial.";
  }

  if (formLogin.password !== formLogin.confirmPassword) {
    errors.confirmPassword =
    "Las contraseñas no coinciden.";
  }

  return errors;  
}
