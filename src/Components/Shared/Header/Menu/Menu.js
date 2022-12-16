import React from 'react'
import './Menu.css'
import { Icon } from '@mui/material'

const Menu = ({header, items, active, setActive}) => {
  return (
	<div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
		<div className='blur'/>
		<div className='menu__content' onClick={e => e.stopPropagation()}>
			<div className='menu__header'>
				<a href='/'>
					{header}	
				</a>
			</div>
			<ul>
				{items.map(item =>
					<li key={item.value} className='menu__items'>
						<a href={item.href}>{item.value}</a>
						<Icon sx={{ color: 'aliceblue', fontSize: 40}}>{item.icon}</Icon>
					</li>
				)}
			</ul>
		</div>
	</div>
  )
}

export default Menu