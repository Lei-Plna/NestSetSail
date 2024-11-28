import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import kleur from 'kleur';

const args = process.argv.slice(2);
const executeWithFormatOption = args.includes('--format');

const outputSchemaFileName = 'schema.prisma';
const schemaDir = path.join(__dirname, '.');
const schemaOutput = path.join(schemaDir, outputSchemaFileName);

const schemas = fs
  .readdirSync(schemaDir)
  .filter((file) => file.endsWith('.prisma') && file !== outputSchemaFileName);

let schemaContent = '';

schemas.forEach((schema) => {
  const content = fs.readFileSync(path.join(schemaDir, schema), 'utf-8');

  schemaContent += content + '\n';
});

fs.writeFileSync(schemaOutput, schemaContent);

if (executeWithFormatOption) {
  process.stdout.write(kleur.yellow('Formatting schema.prisma...\n'));
  execSync(`npx prisma format`, {
    stdio: 'inherit',
    cwd: path.resolve(__dirname, '.'),
  });
  process.stdout.write(kleur.green('Formatting done\n'));
}
