/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Create a new component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const componentTemplate = './component/stateless.js.hbs';
    const styledComponentTemplate = './component/styledComponent.js.hbs';
    const interfaceTemplate = './component/interface.js.hbs';
    const importComponentInterfaceRootTemplate =
      './component/importComponentInterfaceRoot.js.hbs';
    const importInterfaceRootTemplate =
      './component/importInterfaceRoot.js.hbs';

    const importComponentInterfaceRootRegex = /\n\nexport type {/gm;
    const importInterfaceRootRegex =
      /} from '.\/components';\n\nexport type {/gm;

    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{camelCase name}}/index.tsx',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/interfaces/components/{{camelCase name}}/index.ts',
        templateFile: interfaceTemplate,
        skipIfExists: true,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{camelCase name}}/__tests__/{{camelCase name}}.test.js',
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/components/{{camelCase name}}/styledComponents/index.ts',
        templateFile: styledComponentTemplate,
        abortOnFail: true,
      },
      {
        type: 'modify',
        pattern: importComponentInterfaceRootRegex,
        path: '../../src/interfaces/components/index.ts',
        templateFile: importComponentInterfaceRootTemplate,
        abortOnFail: true,
      },
      {
        type: 'modify',
        pattern: importInterfaceRootRegex,
        path: '../../src/interfaces/index.ts',
        templateFile: importInterfaceRootTemplate,
        abortOnFail: true,
      },
    ];

    actions.push({
      type: 'prettify',
      path: '/src/components/',
    });

    return actions;
  },
};
