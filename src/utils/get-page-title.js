import defaultSettings from '@/settings'

const title = defaultSettings.title || '微阿'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${title}- ${pageTitle} `
  }
  return `${title}`
}
