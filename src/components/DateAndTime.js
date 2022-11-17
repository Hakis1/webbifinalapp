import React, { useState, useEffect } from 'react'

export const DateAndTime = () => {

  const [date, setDate] = useState(new Date());

  const timeAndDate = () => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  }
  useEffect(() => {
    timeAndDate();
  });

  return (
    <div className="DateTime">
      <p>Time: {date.toLocaleTimeString()} </p>
      <p>Date: {date.toLocaleDateString()}</p>
    </div>
  )
}