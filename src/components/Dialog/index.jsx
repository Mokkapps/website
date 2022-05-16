import React from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

Dialog.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

function Dialog(props) {
  return (
    <>
      {props.show ? (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full z-800"></div>
      ) : null}
      <dialog
        open={props.show}
        className="relative top-20 mx-auto p-8 w-4/5 md:w-3/5 shadow-lg rounded-md bg-white z-900"
      >
        <FaWindowClose
          className="absolute right-3 top-3 cursor-pointer"
          onClick={() => {
            props.onClose();
          }}
        />
        <header className="flex justify-center">
          <h3>{props.title}</h3>
        </header>
        <section>{props.children}</section>
      </dialog>
    </>
  );
}

export default Dialog;
