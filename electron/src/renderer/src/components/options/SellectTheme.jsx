import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

const SellectTheme = (props) => {
  const { darkMode, setDarkMode } = props
  const { t } = useTranslation()

  // * System mode
  const toggleThemeSystemMode = () => {
    // * set theme mode data
    setDarkMode(false)
    // * local remove theme mode data
    localStorage.removeItem('theme')
  }
  const toggleThemeDarkMode = () => {
    const mode = !darkMode
    // * set theme mode data
    setDarkMode(mode)
    if (mode == true) {
      // * Dark mode
      localStorage.setItem('theme', 'dark')
    } else {
      // * Light mode
      localStorage.setItem('theme', 'light')
    }
  }
  return (
    <>
      <Helmet>
        <title>{t('Prayer Time - Theme Setting')}</title>
      </Helmet>
      <div>
        <label className="w-full p-3 inline-flex items-center cursor-pointer justify-between text-gray-900 dark:text-white">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={darkMode}
            onChange={toggleThemeDarkMode}
          />
          <span className="capitalize me-3 text-sm">{t('dark mode')}</span>
          <div className="relative w-11 h-6 bg-gray-400 outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div>
        <button
          onClick={toggleThemeSystemMode}
          type="button"
          className="w-full p-3 flex items-center justify-between text-xs outline-none text-gray-900 dark:text-white"
        >
          <span className="capitalize me-3 text-sm">{t('system theme')}</span>
          <svg
            data-toggle-icon="sun"
            className="w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
          </svg>
        </button>
      </div>
    </>
  )
}

export default SellectTheme
