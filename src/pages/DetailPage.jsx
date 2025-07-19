import BenefitSection from "../components/Sections/BenefitSection";
import CardPaymentSection from "../components/Sections/CardPaymentSection";

export default function DetailPage() {
  return (
    <div className="mt-[60px] ml-[20px]">
      <CardPaymentSection />
      <BenefitSection />
    </div>
  );
}
