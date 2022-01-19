import * as React from 'react'

const GroupContext = React.createContext()

function groupReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + 1}
    }
    case 'decrement': {
      return {count: state.count - 1}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function GroupProvider({children}) {
  const [state, dispatch] = React.useReducer(groupReducer, {count: 0})
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = {state, dispatch}
  return <GroupContext.Provider value={value}>{children}</GroupContext.Provider>
}

function useGroupContext() {
  const context = React.useContext(GroupContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a GroupProvider')
  }
  return context
}

export {GroupProvider, useGroupContext}