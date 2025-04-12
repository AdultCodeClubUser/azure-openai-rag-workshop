import * as process from 'node:process';
import * as path from 'node:path';

const camelCaseToUpperSnakeCase = (s: string) => s.split(/[A-Z]/g).join('_').toUpperCase();

export { process, path, camelCaseToUpperSnakeCase };