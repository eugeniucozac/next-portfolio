import { library } from "@fortawesome/fontawesome-svg-core"
import { fab, faTwitter, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faDesktop,
  faFileCode,
  faAtlas,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import "../scss/main.scss"
library.add(
  fab,
  faDesktop,
  faFileCode,
  faGithub,
  faTwitter,
  faLinkedinIn,
  faAtlas,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faDatabase
)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.instanceOf(Object).isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
}
