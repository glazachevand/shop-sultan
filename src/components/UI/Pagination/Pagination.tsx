import { classNames } from "utils/classNames/classNames";
import cls from "./Pagination.module.scss";
import Next from "assets/icons/arrow-yellow.svg"
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { setPage } from "store/reducers/filterSlice";
interface PaginationProps {
  className?: string;
}

export const Pagination = (props: PaginationProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { page, limit } = useAppSelector((state) => state.filters);
  const countProducts = useAppSelector((state) => state.products.countProducts);
  let pagesCount = 0;

  if (limit && countProducts) {
    pagesCount = Math.ceil(countProducts / limit);
  }

  return (
    <>
      {page && limit && pagesCount && (
        <div className={classNames(cls.pagination, {}, [className])}>
          {page > 1 && (
            <div
              className={cls.prev}
              onClick={() => {
                dispatch(setPage(page - 1))
              }}>
              <img src={Next} alt="" />
            </div>
          )}
          <ul className={cls.list}>
            {[...Array(pagesCount)].map((_, i) =>
              <li
                key={i}
                className={`${cls.page} ${page === i + 1 ? cls.active : ''}`}
                onClick={() => { dispatch(setPage(i + 1)) }}
              >
                {i + 1}
              </li>
            )}
          </ul>
          {page < pagesCount && (
            <div
              className={cls.next}
              onClick={() => dispatch(setPage(page + 1))}
            >
              <img src={Next} alt="" />
            </div>
          )}
        </div>
      )}
    </>

  );
};