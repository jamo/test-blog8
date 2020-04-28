import React from "react"
import Layout from "../components/layout"
export default ({pageContext}) => {
  return (
    <Layout>
      <div>Hello test {pageContext.slug}</div>
    </Layout>
  )
}
