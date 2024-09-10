// import { useState, useEffect } from "react";

// export default function useMousePosition() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const updateMousePosition = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     document.addEventListener("mousemove", updateMousePosition);
//     return () => {
//       document.removeEventListener("mousemove", updateMousePosition);
//     };
//   }, []);

//   return mousePosition;
// }
