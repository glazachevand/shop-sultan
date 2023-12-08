import { classNames } from "utils/classNames/classNames";
import cls from "./Pagination.module.scss";
import Next from "assets/icons/arrow-yellow.svg"
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { useEffect } from "react";
import { setLimit, setPage } from "store/reducers/filterSlice";
import { limitPerPage } from "types/pages";
interface PaginationProps {
  className?: string;
  productsCount: number
}

export const Pagination = (props: PaginationProps) => {
  const { className, productsCount } = props;

  const dispatch = useAppDispatch();
  const { page, limit } = useAppSelector((state) => state.filters);
  let pagesCount = 0;

  useEffect(() => {
    const mediaNDesktop = window.matchMedia('(min-width: 1400.98px)');
    const mediaNotebook = window.matchMedia('(max-width: 1400px)');
    const mediaMobile = window.matchMedia('(max-width: 1024px)');

    function adaptPagination() {
      if (mediaMobile.matches) {
        dispatch(setLimit(limitPerPage.MOBILE));
      } else if (mediaNotebook.matches) {
        dispatch(setLimit(limitPerPage.NOTEBOOK));
      } else if (mediaNDesktop.matches) {
        dispatch(setLimit(limitPerPage.DESKTOP));
      }
    }

    adaptPagination();

    mediaNDesktop.addEventListener('change', adaptPagination);
    mediaNotebook.addEventListener('change', adaptPagination);
    mediaMobile.addEventListener('change', adaptPagination);

    return () => {
      mediaNDesktop.removeEventListener('change', adaptPagination);
      mediaNotebook.removeEventListener('change', adaptPagination);
      mediaMobile.removeEventListener('change', adaptPagination);
    };

  }, []);

  if (limit && productsCount) {
    pagesCount = Math.ceil(productsCount / limit);
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