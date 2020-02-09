const path = require('path');
const getDataFromJson = require('./getDataFromJson');

const templates = {};

const getTemplate = (templateName) => {
    let template = templates[templateName];
    if (!template) {
        template = path.resolve(`src/templates/${templateName}.tsx`);
        templates[template] = template;
    }
    return template;
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
        const data = getDataFromJson();
        data.pages.forEach((pageData) => {
            const pagePath = pageData.pagePath;
            const template = getTemplate(pageData.template);
            createPage({
                path: pagePath,
                component: template,
                context: pageData,
            });
        });
        createPage({
            path: '/',
            component: path.resolve(`src/pages/index.tsx`),
            context: { test: 'test' }
        })
}

exports.onCreatePage = ({ page, actions }) => {
    console.log(page);
    const { createPage, deletePage } = actions
    deletePage(page)
    // You can access the variable "house" in your page queries now
    createPage({
      ...page,
      context: {
        ...page.context,
        house: `Gryffindor`,
      },
    })
  }