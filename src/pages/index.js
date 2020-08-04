import Head from "next/head"
import React from "react"
import PropTypes from "prop-types"
import { Layout } from "../components/Layout"
import { Header } from "../components/Header"
import { About } from "../components/About"
import { Experience } from "../components/Experience"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { Past } from "../components/Past"
import { Contact } from "../components/Contact"
import Prismic, { Client } from "../../prismic-configuration"

const Index = ({ preview, header, about, skill, experience, projects, past, contact }) => {
  const scrollElement = item => {
    document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout preview={preview}>
      <Head>
        <title>Eugeniu Cozac </title>
      </Head>
      <Header data={header} scroll={scrollElement} />
      <main>
        <About data={about} scroll={scrollElement} />
        <Experience data={experience} />
        <Skills data={skill} />
        <Projects data={projects} />
        <Past data={past} />
        <Contact data={contact} />
      </main>
    </Layout>
  )
}

export const getServerSideProps = async context => {
  const result = await Client(context.req).query([
    Prismic.Predicates.any("document.type", ["header", "about", "experience", "skill", "projects", "past", "contact"]),
  ])

  const { ...predicates } = await result.results.reduce((accumulator, predicate) => {
    accumulator[predicate.type] = predicate.data
    return accumulator
  }, {})

  return {
    props: {
      ...predicates,
    },
  }
}

Index.propTypes = {
  preview: PropTypes.instanceOf(Object).isRequired,
  header: PropTypes.instanceOf(Object).isRequired,
  about: PropTypes.instanceOf(Object).isRequired,
  skill: PropTypes.instanceOf(Object).isRequired,
  experience: PropTypes.instanceOf(Object).isRequired,
  projects: PropTypes.instanceOf(Object).isRequired,
  past: PropTypes.instanceOf(Object).isRequired,
  contact: PropTypes.instanceOf(Object).isRequired,
}

export default Index
