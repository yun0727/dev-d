import TextBox from "../common/TextBox";

export default function ChargeSection() {
  return (
    <div className="mt-[80px]">
      <TextBox>
        국내 최저 <br /> 수수료 <span className="text-indigo-600">2.3%</span>
      </TextBox>
      <div className="mt-[12px] text-zinc-500 text-[18px] font-[600]">
        첫 결제 2.8% 재결제 2.3%
      </div>
      <img
        className="mt-[42px] w-[292px] h-[182px] mx-auto"
        src="/src/assets/image/charge.webp"
        alt="charge"
      />
    </div>
  );
}
