import React from 'react';

const Modal = ({ details }) => {
  const { name, status, flags } = details;

  return (
    <div>
      {/* The button to open modal */}
      {/* <a href="#my_modal_8" className="btn">
        open modal
      </a> */}
      {/* Put this part before </body> tag */}
      <div className="modal" id="my_modal_8">
        <div className="modal-box">
          <h3 className="font-bold text-2xl">{name?.common}</h3>
          <figure className="mt-4">
            <img src={flags?.png} className="w-full h-full" alt="country" />
          </figure>
          <div className="mt-4">
            <p className="text-lg">
              <strong>Official Name: </strong> {name?.official}
            </p>
            <p className="text-lg">
              <strong>Status: </strong> {status}
            </p>
          </div>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;