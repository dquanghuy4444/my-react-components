import * as React from 'react'
import './DarkMode.css'
import styled from '@emotion/styled'

const PrimaryText = styled.div({
  padding: 20,
  color: 'var(--colors-primary)',
  backgroundColor: 'var(--colors-background)',
})

function ThemeToggler() {
  const [theme, setTheme] = React.useState('light')
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  React.useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <button onClick={() => setTheme(nextTheme)}>
      Change to {nextTheme} mode
    </button>
  )
}

function DarkMode() {
  return (
    <div>
      <PrimaryText>This text is the primary color</PrimaryText>
      <ThemeToggler />
    </div>
  )
}

export default DarkMode