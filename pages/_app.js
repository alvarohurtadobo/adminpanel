import "../styles/global.css"
import Layout from "../components/layout.js"
import Head from "next/head"
import SideNavbar from "../components/SideNavbar"

export default function AppWrapper({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <title>{pageProps.title ? pageProps.title : "Our Basic Title"}</title>
      </Head> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SideNavbar/>
    </>
  )
}
