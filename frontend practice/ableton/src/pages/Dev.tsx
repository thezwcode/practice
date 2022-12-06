import { useRef } from "react";
import { AddPageMenuItem } from "../api/api";
import useHttp from "../hooks/use-http";

const Dev: React.FC = () => {
  const pageNameRef: React.RefObject<HTMLInputElement> = useRef(null);
  const navItemRef: React.RefObject<HTMLInputElement> = useRef(null);
  const indexRef: React.RefObject<HTMLInputElement> = useRef(null);
  const { sendRequest, error } = useHttp(AddPageMenuItem);

  const submitFormHandler = () => {
    if (pageNameRef.current?.value && navItemRef.current?.value) {
      sendRequest({
        page: pageNameRef.current.value,
        itemName: navItemRef.current.value,
      });
    } else {
      alert("page name and nav item name are not available");
    }
  };

  return (
    <>
      <form>
        <div>
          <label>Page Name</label>
          <input type="text" ref={pageNameRef} />
        </div>
        <div>
          <label>Navigation Item Name</label>
          <input type="text" ref={navItemRef} />
        </div>
        <div>
          <label>Index (if needed)</label>
          <input type="number" ref={indexRef} />
        </div>

        <button onClick={submitFormHandler}></button>
      </form>
    </>
  );
};

export default Dev;
