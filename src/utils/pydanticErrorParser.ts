export type FormErrors = Record<string, string>;

type PydanticError = {
  loc: (string | number)[];
  msg: string;
};

export function parsePydanticErrors(
  details: PydanticError[]
): FormErrors {
  const errors: FormErrors = {};

  details.forEach((err) => {
    const fieldPath = err.loc.slice(1).join(".");
    errors[fieldPath] = err.msg;
  });

  return errors;
}
