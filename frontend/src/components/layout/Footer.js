import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-dark text-white mb-0 p-4 text-center fixed-bottom"> 
    {/* fixed-bottom */}
      Copyright &copy; {new Date().getFullYear()} BoneThrow
    </div>
  );
}
