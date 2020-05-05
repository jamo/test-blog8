const { v4: uuidv4 } = require("uuid")

const path = require("path")
const fs = require("fs")
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
  for (let i = 1; i < 3; i++) {
    const id = uuidv4()
    const sitePath = `/${id}.html`
    if (i < 100) {
      paths.push(sitePath)
    }
    fs.writeFileSync(`./public${sitePath}`, `hello ${id}`)
  }

  createPage({
    path: `/`,
    component: path.resolve(`./src/templates/index.jsx`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      paths,
    },
  })
}
