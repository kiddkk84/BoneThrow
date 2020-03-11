import React from "react";

export default function Footer() {
  return (
    <div id="scrollbardisaster" className="footer footer-expand-sm bg-dark text-white mb-auto p-4 text-center fixed-bottom"> 
    {/* fixed-bottom */}
      Copyright &copy; {new Date().getFullYear()} BoneThrow
    </div>
  );
}


