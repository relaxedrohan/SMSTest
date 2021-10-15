import HttpStatus from "http-status";
export const BadRequest = (message) => {
  throw new Error(HttpStatus.BAD_REQUEST, message);
};
export const Conflict = (message) => {
  throw new Error(HttpStatus.CONFLICT, message);
};
export const InternalServerError = (
  message = `Some internal server error occurred`
) => {
  throw new Error(HttpStatus.INTERNAL_SERVER_ERROR, message);
};
export const NotFound = (message) => {
  throw new Error(HttpStatus.NotFound, message);
};
