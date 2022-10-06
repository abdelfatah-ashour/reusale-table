import "./style.sass";

type PopupType = {
  heading?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export function Popup({ heading = "", isOpen, onClose = () => {}, children }: PopupType) {
  return (
    <>
      {isOpen ? (
        <div className="popup">
          <div className="popup_box">
            <div className="popup_heading">
              {heading ? <h6>{heading}</h6> : null}{" "}
              <div onClick={onClose} className="popup__close">
                X
              </div>
            </div>
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
