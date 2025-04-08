'use client';
import UseToggle from '@/hooks/use-toggle/UseToggle';
import Modal from '../modal/Modal';
import style from './style.module.css';
import SubTitle from '../sub-title/SubTitle';


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
        <SubTitle subTitle={'Hi this is the modal title'}/>
      </Modal.Title>

      <Modal.Body>
        <p>This is a text Body Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.</p>
      </Modal.Body>
    </Modal>

    )}
    </>
    
  )
}

export default OpenModalBtn