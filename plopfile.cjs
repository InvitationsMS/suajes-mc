const config = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'list',
          name: 'type',
          message: 'What is your component type?',
          choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Page'],
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{camelCase type}}s/{{properCase name}}/{{properCase name}}.tsx',
          templateFile: 'plop-templates/functionalComponentTSTemplate.hbs'
        },
        {
          type: "add",
          path: "src/components/{{camelCase type}}s/{{properCase name}}/{{properCase name}}.scss",
          templateFile: "plop-templates/stylingComponentSCSSTemplate.hbs"
        },
        {
          type: "add",
          path: "src/components/{{camelCase type}}s/{{properCase name}}/index.ts",
          templateFile: "plop-templates/indexFunctionComponentTSTemplate.hbs"
        }
      ],
    })
  }
  
  module.exports = config;