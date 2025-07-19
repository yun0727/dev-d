import StageCard from "../common/StageCard";
import TextBox from "../common/TextBox";

const stageItems = [
  {
    id: 1,
    title: ["내 월세 정보와", "계약서 업로드"],
    src: "/src/assets/image/document.webp",
    width: 60,
    height: 60,
  },
  {
    id: 2,
    title: ["카드 결제 완료"],
    src: "/src/assets/image/card.webp",
    width: 68,
    height: 60,
  },
  {
    id: 3,
    title: ["요청한 날짜에 ", "집주인에게 월세 도착"],
    src: "/src/assets/image/calendar.webp",
    width: 61,
    height: 50,
  },
  {
    id: 4,
    title: ["월세 보낸 후 ", "카카오톡 알림 전송"],
    src: "/src/assets/image/kakaotalk.webp",
    width: 50,
    height: 50,
  },
];

export default function StageSection() {
  return (
    <div className="mt-[82px]">
      <TextBox>
        집업페이는 <br />
        이렇게 진행해요
      </TextBox>
      <div className="flex flex-wrap gap-[10px] pt-[28px]">
        {stageItems.map((item) => (
          <StageCard key={item.id}>
            <StageCard.Number>{item.id}</StageCard.Number>
            <StageCard.Title lines={Array.isArray(item.title)}>
              {item.title}
            </StageCard.Title>
            <StageCard.Image
              src={item.src}
              width={item.width}
              height={item.height}
            />
          </StageCard>
        ))}
      </div>
    </div>
  );
}
