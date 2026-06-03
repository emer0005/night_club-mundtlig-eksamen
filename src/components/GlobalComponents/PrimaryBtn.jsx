"use client";

const PrimaryBtn = ({ text, children, ...props }) => {
  return (
    <div className="link relative inline-block">
      <button className="cursor-pointer text-white border-t border-b border-white px-6 py-3 font-semibold uppercase bg-transparent hover:text-[var(--color-surface-highlight-primary)]" {...props}>
        {children ?? text}
      </button>
    </div>
  );
};

export default PrimaryBtn;
