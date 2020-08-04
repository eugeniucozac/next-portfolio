require("dotenv").config()
import Prismic from "prismic-javascript"
export const apiEndpoint = process.env.PRISMIC_END_POINT
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN
export const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export default Prismic
