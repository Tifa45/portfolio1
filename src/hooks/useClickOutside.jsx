import { useEffect, useRef } from "react";

function useClickOutside(action) {
  const nodeRef = useRef(null);

  const handleClick = (e) => {
    if (nodeRef && !nodeRef.current.contains(e.target)) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return nodeRef;
}

export default useClickOutside;
