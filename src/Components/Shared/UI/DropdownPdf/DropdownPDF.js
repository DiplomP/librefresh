import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import './dropdown.scss';
import SinglePage from '../../PDF/single-page';

function DropdownPDF({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const [file, setFile] = useState()
  const [value, setValue] = useState('Выберите урок')
  const toggle = () => setOpen(!open);
  DropdownPDF.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
		setFile(item.file);
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
	<div className='container1'>
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
		<div className={value === 'Выберите урок' ? 'hide' : ''}>
			<SinglePage pdf={file}/>
		</div>
		
	</div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => DropdownPDF.handleClickOutside,
};

export default onClickOutside(DropdownPDF, clickOutsideConfig);