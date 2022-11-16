import React, { useState } from 'react'
import cx from 'classnames'
import css from './index.module.css'

export const TestComponent = () => {
  const [isActive, setActive] = useState(false)

  return (
    <div
      className={cx(css.testComponent, {
        [css.testComponentActivated]: isActive,
      })}
    >
      <div>Test Component</div>
      <div>
        <button type="button" onClick={() => setActive((value) => !value)}>
          Toggle
        </button>
      </div>
    </div>
  )
}
