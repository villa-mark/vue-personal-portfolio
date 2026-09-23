/**
 * Computes elapsed years/months between a start date and now, so displayed
 * experience duration stays accurate without manual updates.
 */
export function getExperienceDuration(startDate: string, now: Date = new Date()) {
  const start = new Date(startDate)
  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()

  if (now.getDate() < start.getDate()) {
    months -= 1
  }
  if (months < 0) {
    years -= 1
    months += 12
  }

  return { years: Math.max(years, 0), months: Math.max(months, 0) }
}

/** e.g. "2 years 1 month", "8 months", "1 year" */
export function formatExperienceDuration(startDate: string, now?: Date): string {
  const { years, months } = getExperienceDuration(startDate, now)
  const yearLabel = years > 0 ? `${years} year${years === 1 ? '' : 's'}` : ''
  const monthLabel = months > 0 ? `${months} month${months === 1 ? '' : 's'}` : ''

  if (yearLabel && monthLabel) return `${yearLabel} ${monthLabel}`
  return yearLabel || monthLabel || 'Less than a month'
}

/** e.g. "2+" — compact form for stat tiles */
export function formatExperienceYearsShort(startDate: string, now?: Date): string {
  const { years } = getExperienceDuration(startDate, now)
  return `${years}+`
}
