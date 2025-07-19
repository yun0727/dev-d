import BenefitSection from "../components/Sections/BenefitSection";
import CardPaymentSection from "../components/Sections/CardPaymentSection";
import ChargeSection from "../components/Sections/ChargeSection";
import QnASection from "../components/Sections/QnASection";
import StageSection from "../components/Sections/StageSection";

export default function DetailPage() {
  return (
    <div className="mt-[60px] ml-[20px]">
      <CardPaymentSection />
      <BenefitSection />
      <ChargeSection />
      <StageSection />
      <QnASection />
    </div>
  );
}
