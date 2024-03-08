import React, { useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";

type SubmenuProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode[] | React.ReactNode;
  positionTop: undefined | number;
  positionLeft: undefined | number;
  offsetWidth: undefined | number
};

const SubMenu: React.FC<SubmenuProps> = ({ children, isOpen, onClose, positionTop, positionLeft, offsetWidth }) => {

  const submenuRef = useRef<HTMLDivElement>(null);
  useClickOutside(submenuRef, onClose)

  const createStyleObject = () => {
    console.log('on menu', submenuRef.current?.offsetWidth)
    const styleSubmenu = {
      top: 0,
      left: 0,
      height: isOpen ? submenuRef.current?.offsetHeight : 0,
      width: isOpen ? 250 : 0,
    }
    if (positionTop && positionLeft && offsetWidth) {
      styleSubmenu.top = positionTop + 17;
      styleSubmenu.left = positionLeft + offsetWidth - 20;
    }
    return styleSubmenu;
  }

  console.log('this is the position top', positionTop);

  return (
    <div className="absolute inline-block z-10 overflow-y-hidden overflow-x-hidden" 
       style={createStyleObject()}
      >
     <div className="bg-[#ADD8E6] p-2 rounded shadow-md " ref={submenuRef}>
          {children}
        </div>
    </div>
  );
};

export default SubMenu;