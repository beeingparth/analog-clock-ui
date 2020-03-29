import React from "react"
import Helmet from "react-helmet"
import DarkClock from "../../images/favicon/DarkClock.png"
import LightClock from "../../images/favicon/LightClock.png"
import ShareBanner from "../../images/ShareBanner.png"

export default function (props) {
  const { title = "Your are awesome", description = "", isDarkMode, time } = props
  return (
    <Helmet>

      {/* Meta Title */}
      <title>{time.format('LTS')} - {title}</title>
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {/* Meta Description */}
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />

      {/* FACEBOOK */}
      {/* <meta property="og:url" content="https://beeingparth.com/" /> */}
      <meta property="og:image" content={ShareBanner} />

      {/* TWITTER */}
      {/* <meta name="twitter:url" content="https://beeingparth.com" /> */}
      <meta name="twitter:image" content={ShareBanner} />

      {/* Meta Keywords */}
      <meta name="keywords" content="gatsbyjs, Clock, Analog Clock, Analog Clock UI, UI, CSS, Designs, darkmode, lightmode" />

      {/* favicon */}
      <link rel="icon" href={isDarkMode ? DarkClock : LightClock} />

      {/* Body */}
      <body className={isDarkMode ? "dark-mode" : "light-mode"} />
    </Helmet>
  )
}
