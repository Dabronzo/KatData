import React, { useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";

type SubmenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode[] | React.ReactNode;
  positionTop: undefined | number;
  positionLeft: undefined | number;
};

const SubMenu: React.FC<SubmenuProps> = ({ children, isOpen, onClose, positionTop, positionLeft }) => {

  const submenuRef = useRef<HTMLDivElement>(null);
  useClickOutside(submenuRef, onClose)

  const createStyleObject = () => {
    const styleSubmenu = {
      top: 0,
      left: 0
    }
    if (positionTop && positionLeft) {
      styleSubmenu.top = positionTop;
      styleSubmenu.left = positionLeft + 80
    }
    return styleSubmenu;
  }

  console.log('this is the position top', positionTop);

  return (
    <div className="absolute inline-block z-10"  ref={submenuRef} style={createStyleObject()}>
      {isOpen && (
        <div className="bg-[#ADD8E6] p-2 rounded shadow-md ">
          {children}
        </div>
      )}
    </div>
  );
};

export default SubMenu;