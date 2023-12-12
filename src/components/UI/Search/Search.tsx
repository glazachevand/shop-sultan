import { classNames } from "utils/classNames/classNames";
import cls from "./Search.module.scss";
import SearchBtn from 'assets/img/header/search.png';
import RemoveBtn from 'assets/icons/close.svg';
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDebounce } from "hooks/debounce";
import { useGetProductsQuery } from "services/products.api";
import { Link } from "react-router-dom";

interface SearchProps {
  className?: string;
  type?: 'header' | 'param';
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

export const Search = (props: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const { className = '', type = 'header', value = searchValue, setValue = setSearchValue } = props;
  const mods = {
    [cls[type]]: true,
  };

  const debounced = useDebounce(searchValue);
  const { isLoading, isError, data: products } = useGetProductsQuery({ search: debounced }, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  });

  useEffect(() => {
    if (debounced.length >= 3 && products && products?.length > 0) {
      setDropdown(true);
    }
  }, [debounced, products])

  const onClickDropdown = () => {
    setDropdown(false);
    setSearchValue('');
  };

  const onClickClear = () => {
    setValue('');
    setDropdown(false);
  }

  return (
    <div className={classNames(cls.search, mods, [className])} data-testid="search">
      <div className={cls.form}>
        <input
          type="search"
          className={cls.input}
          placeholder="Поиск..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value ?
          <img src={RemoveBtn} alt="clear" className={cls.btn} onClick={onClickClear} />
          : <img src={SearchBtn} alt="search" className={cls.btn} />
        }
      </div>
      {type === 'header' && dropdown && (
        <ul className={cls.dropdown}>
          {isLoading && <p>Загружается...</p>}
          {isError && <p>Нет ответа от сервера...</p>}
          {products?.map((product) => (
            <li className={cls.dropdownItem} key={product.id} onClick={onClickDropdown}>
              <Link to={`/product/${product.id}`}>
                <span>{product.brand} </span>{product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};