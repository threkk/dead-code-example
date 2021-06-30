import diff from './diff'

const event = new Event('dateChange')
const result = document.querySelector('#result')

class DateInput {
  constructor(id) {
    this.el = document.querySelector(`#${id}`)
    this.date = this.el.value ? new Date(this.el.value) : null

    this.el.addEventListener('change', (_) => {
      const d = new Date(this.el.value)
      this.date = isNaN(d) ? null : d
      document.dispatchEvent(event)
    })
  }
  getDate() {
    return this.date
  }
}

const dateA = new DateInput('dateA')
const dateB = new DateInput('dateB')

document.addEventListener('dateChange', (_) => {
  const a = dateA.getDate()
  const b = dateB.getDate()
  const text = diff(a, b)

  if (text != null) result.textContent = `It has been ${text}.`
})
