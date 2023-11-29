// src/app/components/SimpleForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { updateFormData, resetFormData } from '../store/form/formSlice';
import styles from './forms.module.scss';

const SimpleForm: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form.formData);

  const onSubmit = (data: any) => {
    console.log(data); // Aqui você pode fazer o que quiser com os dados do formulário
  };

  const handleChange = (field: string, value: string) => {
    dispatch(updateFormData({ field, value }));
  };

  return (
    <>
    <h2>React Hook Form</h2>
    <div className={styles.formulario}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input
          type="text"
          {...register('name')}
          value={formData.name}
          onChange={(e) => {
            setValue('name', e.target.value);
            handleChange('name', e.target.value);
          }}
          className={styles.campo}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="text"
          {...register('email')}
          value={formData.email}
          onChange={(e) => {
            setValue('email', e.target.value);
            handleChange('email', e.target.value);
          }}
          className={styles.campo}
        />
      </label>
      <br /><br />

      <button type="submit" className='btn'>Submit</button>
      <button type="button" onClick={() => dispatch(resetFormData())} className='btn'>
        Reset
      </button>
    </form>
    </div>
    </>
  );
};

export default SimpleForm;
