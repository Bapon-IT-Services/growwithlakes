import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { MobileNavLink } from '../../config/navigation';
import * as S from './index.style';

export type { MobileNavLink };

type MobileNavMenuProps = {
  links: MobileNavLink[];
  menuLabel?: string;
};

export default function MobileNavMenu({
  links,
  menuLabel = 'Open menu',
}: MobileNavMenuProps) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <>
      <S.MenuToggle
        type="button"
        aria-label={menuLabel}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        onClick={() => setOpen(true)}
      >
        <MenuOutlined aria-hidden style={{ fontSize: 18 }} />
      </S.MenuToggle>

      <Drawer
        id="mobile-nav-drawer"
        title="Menu"
        placement="right"
        open={open}
        onClose={close}
        size={300}
        closeIcon={<CloseOutlined style={{ color: '#d4af37' }} />}
        styles={{
          header: {
            background: '#0a0806',
            borderBottom: '1px solid rgba(212, 175, 55, 0.22)',
            color: '#fafafa',
          },
          body: {
            background: '#0a0806',
            padding: '1rem 1.25rem 2rem',
          },
          mask: { backdropFilter: 'blur(4px)' },
        }}
      >
        <S.DrawerNav aria-label="Mobile navigation">
          {links.map((item) => {
            if (item.to) {
              return (
                <S.DrawerLink
                  key={item.key}
                  as={Link}
                  to={item.to}
                  $active={item.active}
                  onClick={close}
                >
                  {item.label}
                </S.DrawerLink>
              );
            }

            return (
              <S.DrawerLink
                key={item.key}
                href={item.href}
                $active={item.active}
                onClick={close}
              >
                {item.label}
              </S.DrawerLink>
            );
          })}
        </S.DrawerNav>
      </Drawer>
    </>
  );
}
