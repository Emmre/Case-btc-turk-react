import React, { createContext, useState, FC } from "react"

interface DataContextState {
  news: [{}]
  setNews: React.Dispatch<React.SetStateAction<{}>>
}
interface IProps {
  children: React.ReactNode
}

export const App = createContext<DataContextState | null | any>(null)

const AppProvider: FC<IProps> = ({ children }) => {
  const [news, setNews] = useState<any>([{}])

  return (
    <App.Provider
      value={{
        news,
        setNews,
      }}
    >
      {children}
    </App.Provider>
  )
}

export default AppProvider
