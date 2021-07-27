import dayjs from 'dayjs'
import duration from 'dayjs/duration'

dayjs.extend(duration)

export default function diff(start, end) {
  const a = dayjs(start)
  const b = dayjs(end)
  return dayjs.duration(a.diff(b))
}
