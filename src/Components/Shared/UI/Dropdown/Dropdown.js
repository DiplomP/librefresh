import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import ReactPlayer from 'react-player';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import './dropdown.scss'

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const [link, setLink] = useState('')
  const [value, setValue] = useState('Выберите урок')
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
		setLink(item.link);
		setValue(item.value);
		setOpen(!open)
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
	<div className='container'>
		<div className="dd-wrapper">
			<div
				tabIndex={0}
				className="dd-header"
				role="button"
				onKeyPress={() => toggle(!open)}
				onClick={() => toggle(!open)}
			>
				<div className="dd-header__title">
				<p className="dd-header__title--bold">{value}</p>
				</div>
				</div>
			{open && (
			<ul className="dd-list">
			{items.map(item => (
				<li className="dd-list-item" key={item.id}>
				<button type="button" onClick={() => handleOnClick(item)}>
					<span className='item__text'>{item.value}</span>
					<span>{isItemInSelection(item) && <BeenhereIcon color='primary' />}</span>
				</button>
				</li>
			))}
			</ul>
		)}
		</div>
		<ReactPlayer height="95%" width="100%" url={link}/>
	</div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);