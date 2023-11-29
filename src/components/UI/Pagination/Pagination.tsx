import { classNames } from "utils/classNames/classNames";
import cls from "./Pagination.module.scss";
import Next from "assets/icons/arrow-yellow.svg"

interface PaginationProps {
  className?: string;
}

export const Pagination = (props: PaginationProps) => {
  const { className } = props;
  const pages = [1, 2, 3, 4, 5, 6, 7];
  const page = 1;

  return (
    <div className={classNames(cls.pagination, {}, [className])}>
      <div className={cls.prev}><img src={Next} alt="" /></div>
      <ul className={cls.list}>
        {pages.map((item, i) =>
          <li key={item} className={`${cls.page} ${page === i + 1 ? cls.active : ''}`}>{i + 1}</li>
        )}
      </ul>
      <div className={cls.next}><img src={Next} alt="" /></div>
    </div>
  );
};