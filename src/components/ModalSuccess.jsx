import React, { useState } from 'react'

export const ModalSuccess = ({downloadData, onClose}) => {

  const [successMessage, setSuccessMessage] = useState('');
  const [image, setimage] = useState('./images/sim.jpeg')
  const _onClose = () => {
    setSuccessMessage('NO MAMEDDDD!!!');
    setimage('./images/nom.jpeg');
    setTimeout(() => onClose(), 2000);
  }

  const _download = async () => {
    const image = await fetch(downloadData.url);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement('a')
    link.href = imageURL;
    link.download = downloadData.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSuccessMessage('AYYMMMMMMM!!!');
  }

  return (
    <div className="modal-container">
      <div className='modal-body'>
        <button onClick={onClose} className='modal-close'>X</button>
        <h3>Seguro que quieres descargarlom?</h3>
        <img id="sim" src={image} alt="" />
       { successMessage ? <h1>{successMessage}</h1> : null}
        <div className='confirm-buttons'>
          <button onClick={_download}>Sim</button>
          <button onClick={_onClose}>Nom</button>
        </div>
      </div>
    </div>
  )
}
