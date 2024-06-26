import { useState, useEffect, createContext } from 'react'
import Card from "./card"
import { Container } from "./styles"
import TimelineMark from "./mark"

const IntervalContext = createContext()

export default function VerticalTimeline({ events, interval, ...restProps }) {
  const [tick, setTick] = useState(0)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [time, setTime] = useState(3000)
  const [isOnLeft, setIsOnLeft] = useState(true)
  const [cards, setCards] = useState([])
  const [marks, setMarks] = useState([])
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setTimeout(() => {
      setIsOnLeft(prev => !prev)
      setMarks(prev => [<TimelineMark key={events[tick].id} />, ...prev.slice(0, 5)])
      setCards(prev => [<Card key={events[tick].id} isOnLeft={isOnLeft} event={events[tick]} />, ...prev.slice(0, 5)])
      setTick(prev => prev < events.length - 1 ? prev + 1 : 0)
    }, time)

    if (isFirstLoad) {
      setTime(Math.max(3000, interval || 0))
      setIsFirstLoad(false)
    }

    return () => clearTimeout(timer)
  }, [tick, isPaused])

  return (
    <IntervalContext.Provider value={{ tick, setIsPaused }}>
      <Container {...restProps}>
        {cards}
        {marks}
      </Container>
    </IntervalContext.Provider>
  )
}

export { IntervalContext }
