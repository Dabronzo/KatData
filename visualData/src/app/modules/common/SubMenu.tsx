import React, { useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";

type SubmenuProps = {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode[] | React.ReactNode;
};

const SubMenu: React.FC<SubmenuProps> = ({ children, isOpen, handleClose }) => {

  const submenuRef = useRef<HTMLDivElement>(null);
  useClickOutside(submenuRef, handleClose)

  return (
    <div className="relative inline-block" ref={submenuRef}>
      {isOpen && (
        <div className="absolute top-0 left-0 bg-[#ADD8E6] p-2 rounded shadow-md z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default SubMenu;