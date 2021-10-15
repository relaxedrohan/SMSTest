import HttpStatus from "http-status";

export function onSuccess(code, data = null, message = null) {
  return { success: true, code, data, message };
}

export function onError(code, message, description) {
  return { success: false, code, message, description };
}

export function onValidationError(message, errors = []) {
  return {
    success: false,
    code: HttpStatus.UNPROCESSABLE_ENTITY,
    message,
    errors,
  };
}
