import { ZodObject, ZodType, ZodRawShape } from 'zod';

// sadly this does not give a proper typed object as the return type
// it needs more improvement still
export const parseSchema = <T extends ZodRawShape>({
  data,
  schema,
  requiredFields,
  optionalFields,
}: {
  data: Record<string, unknown>;
  schema: ZodObject<T>;
  requiredFields?: (keyof T)[];
  optionalFields?: (keyof T)[];
}) => {
  const withoutEmpties = Object.entries(data).reduce((result, [key, value]) => {
    if (value !== '') {
      result[key] = value;
    }
    return result;
  }, {} as Record<string, unknown>);

  const fields = [...(requiredFields || []), ...(optionalFields || [])].reduce((result, key) => {
    result[key] = true;
    return result;
  }, {} as Record<keyof T, true>);
  // console.log('Fields to initially pick:', fields);

  // @ts-expect-error i cannot figure out the type to use above to make this work
  const pickedSchema = schema.pick(fields);

  const optionalFieldsSchema = (optionalFields || []).reduce((result, field) => {
    result[field as string] = pickedSchema.shape[field].optional();
    return result;
  }, {} as Record<string, ZodType>);

  const requiredFieldsSchema = (requiredFields || []).reduce((result, field) => {
    result[field as string] = pickedSchema.shape[field];
    return result;
  }, {} as Record<string, ZodType>);

  // console.log('optionalFieldsSchema', optionalFieldsSchema);
  // console.log('requiredFieldsSchema', requiredFieldsSchema);

  const finalSchema = pickedSchema.extend({
    ...optionalFieldsSchema,
    ...requiredFieldsSchema,
  });

  return finalSchema.parse(withoutEmpties);
};
