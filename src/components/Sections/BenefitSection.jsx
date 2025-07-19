import SlideCard from "../common/SlideCard";
import TextBox from "../common/TextBox";
import ArrowIcon from "../../assets/icon/indigo-arrow.svg?react";

export default function BenefitSection() {
  const slideItems = [
    {
      id: 1,
      title: "카페 결제",
      benefit: "최대 12,000원",
      icon: "/src/assets/image/cafe.webp",
      width: "16",
      height: "22",
      store: "프렌차이즈 카페",
    },
    {
      id: 2,
      title: "온라인 정기 결제",
      benefit: "50% 할인",
      icon: "/src/assets/image/youtube.webp",
      width: "18",
      height: "18",
      store: "유튜브 & 넷플릭스",
    },
    {
      id: 3,
      title: "쿠팡 할인",
      benefit: "최대 6천원",
      icon: "/src/assets/image/coupang.webp",
      width: "36",
      height: "8",
      store: "쿠팡",
    },
    {
      id: 4,
      title: "편의점 할인",
      benefit: "최대 8천원",
      icon: "/src/assets/image/store.webp",
      width: "18",
      height: "15",
      store: "전국 편의점",
    },
  ];

  return (
    <div className="mt-[80px]">
      <TextBox className="w-[231px]">
        그동안 놓쳤던 <br /> 혜택까지 받으세요
      </TextBox>
      <div className="-ml-[20px] overflow-x-hidden mt-[28px]">
        <div
          className="flex gap-[8px]  animate-infinite-scroll hover:pause"
          style={{ width: "fit-content" }}
        >
          {slideItems.map((item) => (
            <SlideCard key={item.id}>
              <SlideCard.Title>
                {item.title} <br />
                {item.benefit}
              </SlideCard.Title>
              <SlideCard.Detail
                src={item.icon}
                text={item.store}
                width={item.width}
                height={item.height}
              />
            </SlideCard>
          ))}
          {slideItems.map((item) => (
            <SlideCard key={`duplicate-${item.id}`}>
              <SlideCard.Title>
                {item.title} <br />
                {item.benefit}
              </SlideCard.Title>
              <SlideCard.Detail
                src={item.icon}
                text={item.store}
                width={item.width}
                height={item.height}
              />
            </SlideCard>
          ))}
        </div>
      </div>
      <div className="mt-[24px] text-slate-500 text-[14px] text-center">
        이 혜택은 월세 80만원, 집업 제휴 카드 기준이에요 <br />
        카드사마다 혜택은 다를 수 있어요
      </div>
      <div className="mt-[20px] flex justify-center items-center gap-[8px]">
        <div className="text-indigo-600 text-[16px] font-[600]">
          집업카드 둘러보기
        </div>
        <ArrowIcon />
      </div>
    </div>
  );
}
