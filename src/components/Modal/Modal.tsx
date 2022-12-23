import React, { useRef, useCallback, useEffect, ReactNode } from "react";
import styled from "styled-components";

import { Portal } from "../Portal/Portal";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: auto;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ModalProps {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ opened = false, onClose, children }) => {
  const overlayRef = useRef(null);

  const onKeyUp = useCallback(
    (e: any) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (opened) {
      window.addEventListener("keyup", onKeyUp);
    } else {
      window.removeEventListener("keyup", onKeyUp);
    }

    return () => window.removeEventListener("keyup", onKeyUp);
  }, [opened, onKeyUp]);

  const onOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        e.preventDefault();

        onClose();
      }
    },
    [onClose]
  );

  return (
    <>
      {opened && (
        <Portal>
          <Overlay onClick={onOverlayClick} ref={overlayRef}>
            {children}
          </Overlay>
        </Portal>
      )}
    </>
  );
};

export { Modal };
