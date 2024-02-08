import { classNames } from "utils/classNames/classNames";
import { Button } from "components/UI/Button/Button";
import { useNavigate } from 'react-router-dom';
import cls from "./BackButton.module.scss";
import { useTranslation } from 'react-i18next';

interface BackButtonProps {
  className?: string;
}

export const BackButton = (props: BackButtonProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={classNames(cls.backButton, {}, [className])}>
      <Button icon="back" form="circ" color="ping" width="32px" height="32px" onClick={() => navigate(-1)} />
      <div>{t('buttons.back')}</div>
    </div>
  );
};