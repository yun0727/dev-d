import DescriptionCard from "../common/DescriptionCard";
import TextBox from "../common/TextBox";

export default function CardPaymentSection() {
  return (
    <div>
      <TextBox className="w-[231px]">
        매달 내는 월세 <br />
        이제 <span className="text-indigo-600">카드로 결제</span>하세요
      </TextBox>
      <div className="flex flex-col gap-[10px] mt-[28px]">
        <DescriptionCard>
          무이자 할부와 카드 포인트 혜택을 누려요
        </DescriptionCard>
        <DescriptionCard>
          집주인 알림없이 내 이름으로 입금!
          <br />
          <span className="text-slate-500 text-[14px]">
            집주인 동의없이 진행해요
          </span>
        </DescriptionCard>
        <DescriptionCard>
          공식 인가 받은{" "}
          <span className="text-indigo-500 font-[700]">Payple</span>을 통해
          안전송금!
        </DescriptionCard>
      </div>
    </div>
  );
}
