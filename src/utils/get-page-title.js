import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Trading Assistance'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
