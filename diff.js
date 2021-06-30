import intervalToDuration from 'date-fns/intervalToDuration'
import formatDuration from 'date-fns/formatDuration'

function oldDiff(start, end) {
  return Math.abs(start - end)
}

export default function diff(start, end) {
  if (start && start instanceof Date && end && end instanceof Date)
    return formatDuration(intervalToDuration({ start, end }))
  else return null
}
