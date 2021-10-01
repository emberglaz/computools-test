interface InputValidation {
  error: string;
}

export const emailValidation = (value: string | null): InputValidation => {
  if (value === null) {
    return {error: ''};
  }

  const EMAIL_REGEXP =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (value.length === 0) {
    return {error: 'Email required'};
  }

  if (!EMAIL_REGEXP.test(value)) {
    return {error: 'Email is not correct'};
  }

  return {error: ''};
};

export const passwordValidation = (value: string | null): InputValidation => {
  if (value === null) {
    return {error: ''};
  }

  if (value.length === 0) {
    return {error: 'Password required'};
  }

  if (value.length < 8) {
    return {error: 'Rassword lenght min 8 chars'};
  }

  return {error: ''};
};