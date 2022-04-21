import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

interface PropertyMetaObj {
  property: string
  content: string
}

type NameMetaObj = {
  name: string
  content: string
}

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

interface Props {
  description?: string
  lang?: string
  meta?: Meta
  noIndex?: boolean
  title: string
}

const Seo = ({
  description = "",
  lang = "en",
  title,
  noIndex = false,
  meta = [],
}: Props): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `
  )

  if (noIndex) {
    return (
      <Helmet
        meta={[
          {
            name: `robots`,
            content: "noindex",
          },
        ]}
      />
    )
  }

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default Seo
