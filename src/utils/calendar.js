import { CALENDAR_EVENT } from '../constants'

function formatIcsDate(isoString) {
  return isoString.replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

export function getGoogleCalendarUrl() {
  const start = formatIcsDate('20260918T190000')
  const end = formatIcsDate('20260918T230000')

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: CALENDAR_EVENT.title,
    dates: `${start}/${end}`,
    details: CALENDAR_EVENT.description,
    location: CALENDAR_EVENT.location,
    ctz: 'Europe/Istanbul',
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export function downloadIcsFile() {
  const start = formatIcsDate('20260918T190000')
  const end = formatIcsDate('20260918T230000')

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Melda Hasan Wedding//TR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:melda-hasan-wedding-2026@davetiye`,
    `DTSTAMP:${formatIcsDate(new Date().toISOString())}`,
    `DTSTART;TZID=Europe/Istanbul:${start}`,
    `DTEND;TZID=Europe/Istanbul:${end}`,
    `SUMMARY:${CALENDAR_EVENT.title}`,
    `DESCRIPTION:${CALENDAR_EVENT.description}`,
    `LOCATION:${CALENDAR_EVENT.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'melda-hasan-dugun.ics'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
