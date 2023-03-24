import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './components.module.css';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

const Sidebar = () => {
  const [openRedux, setOpenRedux] = useState(false);
  const [openChakra, setOpenChakra] = useState(false);

  return (
    <aside className={css.sidebar}>
      <ul className={css.sidebarList}>
        <li className={css.sidebarItem}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onClick={() => {
              setOpenRedux(!openRedux);
            }}
          >
            <div className={css.sidebarLink}>Redux</div>

            {openRedux ? (
              <AiOutlineDown size={15} />
            ) : (
              <AiOutlineRight size={15} />
            )}
          </div>
          {openRedux && (
            <ul>
              <li className={css.sidebarItem}>
                <NavLink
                  to={'/projects/redux-thank'}
                  className={css.sidebarInternalLink}
                >
                  AsyncThank
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/projects/redux-toolkit'}
                  className={css.sidebarInternalLink}
                >
                  Toolkit (sync example)
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/projects/redux-rtk'}
                  className={css.sidebarInternalLink}
                >
                  RTK Query{' '}
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <ul className={css.sidebarList}>
        <li className={css.sidebarItem}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onClick={() => {
              setOpenChakra(!openChakra);
            }}
          >
            <div className={css.sidebarLink}>Next Work</div>

            {openChakra ? (
              <AiOutlineDown size={15} />
            ) : (
              <AiOutlineRight size={15} />
            )}
          </div>
          {openChakra && (
            <ul>
              <li className={css.sidebarItem}>
                <NavLink
                  to={'/projects/redux-thank'}
                  className={css.sidebarInternalLink}
                >
                  Redux Async Thank
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/projects/redux-toolkit'}
                  className={css.sidebarInternalLink}
                >
                  Redux Toolkit
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
