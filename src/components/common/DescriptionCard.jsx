import BlueArrowIcon from "../../assets/icon/blue-arrow.svg?react";
export default function DescriptionCard({ children }) {
  return (
    <div className="px-[15px] py-[12px] w-[350px] bg-slate-100 rounded-[10px] flex gap-[10px] items-center">
      <BlueArrowIcon />
      <div className="text-zinc-900 text-[16px]">{children}</div>
    </div>
  );
}
