import React, { useState, ReactNode } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <h2 
        className="cursor-pointer flex items-center gap-2 hover:underline"
        onClick={toggleOpen}>
        <span className="font-bold text-lg">{isOpen ? '-' : '+'}</span>
        <span>{title}</span>
      </h2>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
