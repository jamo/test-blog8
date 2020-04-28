import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
export default ({pageContext}) => {
  return (
    <Layout>
      <div>Hello test
      <ul>
        {pageContext.paths.map(i => <li><Link to={i}>{i}</Link></li>)}
      </ul>
    </div>

    </Layout>
  )
}
