import { readFileSync } from 'node:fs';
import ts from 'typescript';

// Uses the TypeScript installation already in the project's locked dependency tree.
// Check client scripts as virtual modules; never create generated files in src/pages.
const astroFiles = ['src/v2/Layout.astro', 'src/pages/v2/contact.astro'];
const virtual = new Map(astroFiles.map(file => [
  `${file}.client.ts`,
  [...readFileSync(file, 'utf8').matchAll(/<script>([\s\S]*?)<\/script>/g)]
    .map(match => match[1]).join('\n') + '\nexport {};\n',
]));
const options = {
  noEmit: true, strict: true, skipLibCheck: true,
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  lib: ['lib.es2022.d.ts', 'lib.dom.d.ts', 'lib.dom.iterable.d.ts'],
};
const host = ts.createCompilerHost(options);
const originalGetSourceFile = host.getSourceFile.bind(host);
host.getSourceFile = (name, language, ...rest) => virtual.has(name)
  ? ts.createSourceFile(name, virtual.get(name), language, true)
  : originalGetSourceFile(name, language, ...rest);
const program = ts.createProgram([...virtual.keys(), 'src/v2/routes.ts', 'src/v2/content.ts'], options, host);
const diagnostics = ts.getPreEmitDiagnostics(program);
if (diagnostics.length) {
  console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
    getCanonicalFileName: file => file, getCurrentDirectory: () => process.cwd(), getNewLine: () => '\n',
  }));
  process.exitCode = 1;
} else console.log('PASS: strict types for v2 route/content modules and both embedded browser scripts.');
