import { classNames } from "utils/classNames/classNames";
import cls from "./CategoryItem.module.scss";
import Close from 'assets/icons/close.svg';
import Edit from 'assets/icons/edit.svg';
import Save from 'assets/icons/save.png';
import { useState } from "react";
import { ICategory } from "types/products";
import { useCreateCategoryMutation, useDeleteCategoryMutation, useUpdateCategoryMutation } from "services/products.api";

interface CategoryItemProps {
  className?: string;
  category: ICategory;
  variant?: 'new';
  add?: () => void;
}

export const CategoryItem = (props: CategoryItemProps) => {
  const { className, category, variant, add } = props;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(category.title);

  const [fetchUpdateCategory, { isError: updateError }] = useUpdateCategoryMutation();
  const [fetchDaleteCategory, { isError: deleteError }] = useDeleteCategoryMutation();
  const [fetchAddCategory, { isError: addError }] = useCreateCategoryMutation();

  const editHandler = () => {
    if (edit) {
      fetchUpdateCategory({ id: category.id, title: value });
    }
    setEdit(prev => !prev);
  }

  const deleteHandler = () => {
    fetchDaleteCategory(category.id);
  }

  const addHandler = () => {
    fetchAddCategory({ id: category.id, title: value }).then(() => {
      if (add) { add() }
    });
  }

  return (
    <>
      {variant === 'new' ? (
        <li className={classNames(cls.categoryItem, {}, [className, cls.addItem])}>
          <input
            className={`${cls.input}  ${cls.edit}`}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={cls.editBtn} type="button" onClick={addHandler}>
            <img src={Save} alt="save" title="Сохранить" />
          </button>
          <button className={cls.deleteBtn} type="button" onClick={() => { if (add) { add() } }}>
            <img src={Close} alt="close" title="Удалить" />
          </button>
        </li>
      ) : (
        <li className={classNames(cls.categoryItem, {}, [className])}>
          <input
            className={`${cls.input}  ${edit ? cls.edit : ''}`}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!edit}
          />
          <button className={cls.editBtn} type="button" onClick={editHandler}>
            {edit ? <img src={Save} alt="save" title="Сохранить" /> : <img src={Edit} alt="edit" title="Редактировать" />}
          </button>
          <button className={cls.deleteBtn} type="button" onClick={deleteHandler}>
            <img src={Close} alt="close" title="Удалить" />
          </button>
        </li>
      )
      }
    </>
  );
};