export default function MainContent() {
  return (
    <>
      <img
        src="../src/assets/image/logo.webp"
        alt="zipup pay"
        className="w-[132px] mx-auto mt-[33px] "
      />

      <div className="mx-auto mt-[24px] text-[36px] w-[252px] h-[96px] text-center leading-[48px] font-[line-seed-bd]">
        매달 내는 <span className="text-indigo-600">월세</span>에{" "}
        <span className="text-indigo-600">혜택</span>을 더하다
      </div>

      <div className="mx-auto mt-[24px] text-center text-[16px] font-[500] ">
        월세는 카드로 간편하게 결제하고 <br /> 집업만의 특별한 혜택까지
        받으세요!
      </div>
    </>
  );
}
