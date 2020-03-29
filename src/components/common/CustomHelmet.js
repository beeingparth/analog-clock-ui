import React from "react"
import Helmet from "react-helmet"
// import Clock1 from "../../images/clock1.png"
// import Clock2 from "../../images/clock2.png"
// import Clock3 from "../../images/clock3.png"

export default function (props) {
  const { title = "Your are awesome", isDarkMode } = props
  return (
    <Helmet>
      <title>{title}</title>
      <body className={isDarkMode ? "dark-mode" : "light-mode"} />
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <link rel="shortcut icon" type="image/png" href="/images/clock3.png" />
    </Helmet>
  )
}
