import { Dispatch, SetStateAction, useEffect, useState } from "react";

import RemoveBtn from 'assets/icons/close.svg';
import SearchBtn from 'assets/img/header/search.png';
import { useDebounce } from "hooks/debounce";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "services/products.api";
import { classNames } from "utils/classNames/classNames";

import cls from "./Search.module.scss";

interface SearchProps {
  className?: string;
  variant?: 'header' | 'param';
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

export const Search = (props: SearchProps) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const { className = '', variant = 'header', value = searchValue, setValue = setSearchValue } = props;
  const mods = {
    [cls[variant]]: true,
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
          placeholder={`${t('search.search')}...`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value ?
          <img src={RemoveBtn} alt="clear" className={cls.btn} onClick={onClickClear} />
          : <img src={SearchBtn} alt="search" className={cls.btn} />
        }
      </div>
      {variant === 'header' && dropdown && (
        <ul className={cls.dropdown} data-testid="dropdown">
          {isLoading && <p>{t('messages.loading')}...</p>}
          {isError && <p>{t('messages.no_response_server')}...</p>}
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