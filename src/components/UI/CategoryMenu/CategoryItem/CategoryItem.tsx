import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryItem.module.scss";
import Close from 'assets/icons/close.svg';
import Edit from 'assets/icons/edit.svg';
import Save from 'assets/icons/save.png';
import { useState } from "react";
import { ICategory } from "types/products";
import { useCreateCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } from "services/products.api";
import { useTranslation } from 'react-i18next';

interface CategoryItemProps {
  className?: string;
  category: ICategory;
  variant?: 'new';
  add?: () => void;
}

export const CategoryItem = (props: CategoryItemProps) => {
  const { className, category, variant, add } = props;
  const { t } = useTranslation();
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(category.title);

  const [fetchUpdateCategory, { isError: isErrorUpdate }] = useUpdateCategoryMutation();
  const [fetchDaleteCategory, { isError: isErrorDelete }] = useDeleteCategoryMutation();
  const [fetchAddCategory, { isError: isErrorAdd }] = useCreateCategoryMutation();

  const editHandler = async () => {
    if (edit) {
      try {
        await fetchUpdateCategory({ id: category.id, title: value }).unwrap();
      } catch (error) {
        console.log(t('messages.error_save_category'), ': ', error);
      }
    }
    setEdit(prev => !prev);
  }

  const deleteHandler = async () => {
    try {
      await fetchDaleteCategory(category.id).unwrap();
    } catch (error) {
      console.log(t('messages.error_remove_category'), ': ', error);
    }
  }

  const addHandler = async () => {
    try {
      await fetchAddCategory({ id: category.id, title: value }).unwrap();
      if (add) { add() }
    } catch (error) {
      console.log(t('messages.error_create_category'), ': ', error);
    }
  }

  return (
    <>
      {variant === 'new' ? (
        <>
          <li className={classNames(cls.categoryItem, {}, [className, cls.addItem])}>
            <input
              className={`${cls.input}  ${cls.edit}`}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className={cls.editBtn} type="button" onClick={addHandler}>
              <img src={Save} alt="save" title={t('buttons.save')} />
            </button>
            <button className={cls.deleteBtn} type="button" onClick={() => { if (add) { add() } }}>
              <img src={Close} alt="close" title={t('buttons.remove')} />
            </button>
          </li>
          {isErrorAdd && <div className={cls.error}>{t('messages.error_create_category')}</div>}
        </>

      ) : (
        <>
          <li className={classNames(cls.categoryItem, {}, [className])}>
            <input
              className={`${cls.input}  ${edit ? cls.edit : ''}`}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disabled={!edit}
            />
            <button className={cls.editBtn} type="button" onClick={editHandler}>
              {edit ? <img src={Save} alt="save" title={t('buttons.save')} /> : <img src={Edit} alt="edit" title={t('buttons.edit')} />}
            </button>
            <button className={cls.deleteBtn} type="button" onClick={deleteHandler}>
              <img src={Close} alt="close" title={t('buttons.remove')} />
            </button>
          </li>
          {isErrorUpdate && <div className={cls.error}>{t('messages.error_save_category')}</div>}
          {isErrorDelete && <div className={cls.error}>{t('messages.error_remove_category')}</div>}
        </>
      )
      }
    </>
  );
};