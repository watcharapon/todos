import React from 'react'
import FilterLink from '../containers/FilterLink'

const Header = ({count}) => (
<div>
  <p style={{paddingTop: 10}}>
  <a href="#" style={{marginRight: 15}}><span className="badge">{count}</span></a>
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
