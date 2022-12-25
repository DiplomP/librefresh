import React from 'react'
import './Menu.css'
import { Icon } from '@mui/material'

const Menu = ({header, items, active, setActive}) => {
  return (
	<div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
		<div className='blur'/>
		<div className='menu__content' onClick={e => e.stopPropagation()}>
			<div className='menu__header'>
				<a className='a1' href='/'>
					{header}	
				</a>
			</div>
			<ul className='ul1'>
				{items.map(item =>
					<li key={item.value} className='menu__items'>
						<a className='a2' href={item.href}>{item.value}</a>
						<Icon sx={{ color: 'aliceblue', fontSize: 40}}>{item.icon}</Icon>
					</li>
				)}
			</ul>
		</div>
	</div>
  )
}

export default Menu