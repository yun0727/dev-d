export default function TextBox({ children, className }) {
  return (
    <div
      className={`text-gray-900 text-[24px] font-[700] leading-[36px] ${className}`}
    >
      {children}
    </div>
  );
}
