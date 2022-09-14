import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uploadAvatar } from '../../store/userReducer/reducer';
import './Avatar.css';

export default function Avatar() {
  const dispatch = useDispatch();
  const formRef = useRef();
  const submitHandler = useCallback((event) => {
    event.preventDefault();

    dispatch(uploadAvatar(event));
  }, [formRef]);

  return (
    <form method="POST" ref={formRef} onSubmit={submitHandler} encType="multipart/form-data">
      <p><input type="file" name="avatar" /></p>
      <p><input type="submit" name="upload" value="Загрузить" /></p>
    </form>
  );
}
