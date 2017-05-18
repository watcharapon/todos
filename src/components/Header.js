import React from 'react'
import FilterLink from '../containers/FilterLink'

const Header = () => (
<div>
  <p style={{paddingTop: 10}}>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
</div>
)

export default Header
