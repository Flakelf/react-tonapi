import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) =>
  createPortal(children, document.getElementById("modal-root")!);

export { Portal };
