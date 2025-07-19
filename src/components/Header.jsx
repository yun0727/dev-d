import ArrowIcon from "../assets/icon/Vector.svg?react";

export default function Header() {
  return (
    <div className="relative h-[56px] w-full flex justify-center items-center ">
      <ArrowIcon className="absolute top-[20px] left-[20px]" />
      <div className="text-zinc-900 text-[18px] font-bold">혜택</div>
    </div>
  );
}
