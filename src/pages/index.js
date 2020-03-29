import React, { useEffect, useState, Fragment } from "react"
import Cookies from "universal-cookie"
import moment from "moment"
import Switch from "../components/switch"
import CustomHelmet from "../components/common/CustomHelmet"
import "../components/layout.css"

const cookies = new Cookies()

export default function () {
  const cookieDarkMode = cookies.get("dark-mode")
  const [isDarkMode, setIsDarkMode] = useState(cookieDarkMode === "true" ? true : false)
  const [time, setTime] = useState(moment())
  const [loading, setLoading] = useState(true)

  const deg = 6
  let minute = time.format("mm") * deg
  let hour = (time.format("HH") * 30) + ((minute / deg) / 12)
  let second = time.format("ss") * deg

  useEffect(() => {
    const interval = setInterval(() => setTime(moment()))
    return () => clearInterval(interval)
  }, [])

  function handleDarkMode() {
    cookies.set("dark-mode", !isDarkMode, { path: "/" })
    setIsDarkMode(!isDarkMode)
  }

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    })
  }

  return (
    loading ?
      <Fragment />
      :
      <div className="clock-wrapper">
        <CustomHelmet
          title="Analog Clock UI"
          description="Analog Clock UI with Dark and Light Mode."
          isDarkMode={isDarkMode}
          time={time}
        />
        <Switch isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
        <div className="clock">
          <div className="hour">
            <div className="hr" style={{ transform: `rotateZ(${hour}deg)` }}>
            </div>
          </div>
          <div className="minute">
            <div className="min" style={{ transform: `rotateZ(${minute}deg)` }}>
            </div>
          </div>
          <div className="second">
            <div className="sec" style={{ transform: `rotateZ(${second}deg)` }}>
            </div>
          </div>
        </div>
      </div>
  )
}
