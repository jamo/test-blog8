const path = require("path")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { execSync } = require(`child_process`)

const exec = (cmd, ...params) => {
  console.log(`running: "${cmd}, ${params}"`)
  const res = execSync(cmd, params)
  return String(res)
}
exports.onPreBuild = function() {
  console.log(`aw yeah`)

  console.log(exec(`env`))

  console.log(`aw yeah`)
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const paths = []
  for (let i = 1; i < 10; i++) {
    const id = i
    const sitePath = `/${i}`
    paths.push(sitePath)
    createPage({
      path: sitePath,
      component: path.resolve(`./src/templates/spam.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: id,
      },
    })
  }

  createPage({
    path: `/`,
    component: path.resolve(`./src/templates/index.jsx`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      paths
    },
  })
}
