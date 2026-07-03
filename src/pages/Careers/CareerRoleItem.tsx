import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { AnimatePresence } from 'framer-motion';
import { useId, useState } from 'react';
import type { CareerRole } from '../../config/careers';
import { popIn } from '../../motion/variants';
import * as S from './index.style';

type CareerRoleItemProps = {
  role: CareerRole;
  index: number;
};

export default function CareerRoleItem({ role, index }: CareerRoleItemProps) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();
  const isOpen = expanded;

  const toggleExpanded = () => {
    setExpanded((open) => !open);
  };

  return (
    <S.RoleItem
      variants={popIn}
      $active={isOpen}
    >
      <S.RoleIndex $active={isOpen} aria-hidden>
        {String(index + 1).padStart(2, '0')}
      </S.RoleIndex>
      <S.RoleHoverZone>
        <S.RoleBody>
          <S.RoleMeta>{role.type}</S.RoleMeta>
          <S.RoleTitle>{role.title}</S.RoleTitle>
          <S.RoleSummary>{role.summary}</S.RoleSummary>
          <AnimatePresence initial={false}>
            {isOpen && (
              <S.RoleDescription
                id={detailsId}
                key="description"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <S.RoleDescriptionInner>{role.description}</S.RoleDescriptionInner>
              </S.RoleDescription>
            )}
          </AnimatePresence>
        </S.RoleBody>
      </S.RoleHoverZone>
      <S.RoleActions>
        <S.ExpandButton
          type="button"
          aria-expanded={isOpen}
          aria-controls={detailsId}
          aria-label={
            isOpen ? `Hide details for ${role.title}` : `Show details for ${role.title}`
          }
          data-expanded={isOpen}
          onClick={toggleExpanded}
        >
          {isOpen ? <MinusOutlined aria-hidden /> : <PlusOutlined aria-hidden />}
        </S.ExpandButton>
        <Button type="primary" href={role.applyHref}>
          Apply
        </Button>
      </S.RoleActions>
    </S.RoleItem>
  );
}
