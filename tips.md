- Runtime dependencies	npm install	Needed in production/runtime
Dev dependencies	npm install --save-dev	Needed only during development

- ollama run mistral
- npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
- lint on commit via Husky or lint-staged
Automatically run eslint --fix or prettier --write on only the files you're committing, before the commit happens, so you never commit ugly/broken code.