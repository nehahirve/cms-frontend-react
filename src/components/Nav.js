import React, { useContext } from "react"
import { Link } from "gatsby"
import { GlobalStateContext } from "../context/GlobalContextProvider"

import styles from "../styles/Nav.module.scss"

export default function Nav() {
  const state = useContext(GlobalStateContext)

  return state.pages ? (
    <>
      <nav className={styles.nav}>
        <ul>
          {state.pages.map(page => {
            return (
              <Link
                to={`/${page.slug}`}
                state={{
                  page: {
                    title: page.title,
                    body: page.body,
                  },
                  pages: state.pages,
                }}
              >
                <li key={page.id}>{page.title}</li>
              </Link>
            )
          })}
        </ul>
      </nav>
      <Link to="/">
        <button className={styles.button}>
          <svg
            width="279"
            viewBox="0 0 279 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 169C28.3333 186.834 83.1 208 87.5 150C93 77.5002 181 37.0002 200 80.0002C219 123 291.5 168.5 275.5 115C259.5 61.5001 238 -16.4999 275.5 5.00006"
              stroke="black"
              stroke-width="4"
            />
          </svg>
        </button>
      </Link>
    </>
  ) : null
}
