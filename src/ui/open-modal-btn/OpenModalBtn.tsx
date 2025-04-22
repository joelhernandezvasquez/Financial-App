'use client';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import Modal from '../modal/Modal';
import AddNewBudget from '../budget/modals/add-new-budget/AddNewBudget';
import style from './style.module.css';
interface Props{
    textBtn:string
}
const OpenModalBtn = ({textBtn}:Props) => {
  const{isToggle,handleToggle} = UseToggle();

  return (
    <>
    <button className={style.btn_container} onClick={handleToggle}>
      + {textBtn}
    </button>
    {isToggle && 
    (<Modal onClose={handleToggle}> 
      <Modal.Title>
        <h2 className={style.subtitle}>Add New Budget</h2>
      </Modal.Title>

      <Modal.Body>
        <AddNewBudget/>
      </Modal.Body>
    </Modal>
    )
    }
    </>   
  )
}

export default OpenModalBtn