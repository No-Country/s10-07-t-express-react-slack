import { Errors, Register } from './interfaces';

export const validationErrors = (formLogin:Register) => {
  let errors: Errors = {};
  const fullName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]{3,}(?:\s|-)[a-zA-ZáéíóúÁÉÍÓÚüÜ]{3,}$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const dominiosPermitidos = ['gmail.com', 'hotmail.com', "yahoo.com", "yahoo.es", "outlook.com", "outlook.es"];
  const dominiosPermitidosRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`, 'i');

  const regexPasswordMayuscula = /(?=.*[A-Z])/;
  const regexPasswordEspecialCharacter = /(?=.*[!@#$%^&*])/;

  if (!formLogin.fullName.length) {
    errors.fullName = "Por favor ingresa tu nombre completo.";
  }

  if (!fullName.test(formLogin.fullName)) {
    errors.fullName = "Debe contener al menos 2 nombres y un maximo de 4. Cada uno de ellos separados por un espacio en blanco.";
  }
  
  if (!formLogin.email.length) {
    errors.email = "Por favor ingresa tu email.";
  }
  
  if (!regexEmail.test(formLogin.email)) {
    errors.email = "Por favor ingresa un email válido.";
  }

  if (!dominiosPermitidosRegex.test(formLogin.email)) {
    errors.email = "Por favor ingresa un dominio de email válido.";
  }

  if (!formLogin.password.length) {
    errors.password = "Por favor ingresa una contraseña.";
  }

  if (formLogin.password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres.";
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
