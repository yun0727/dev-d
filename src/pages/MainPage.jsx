import StatusBar from "../components/common/StatusBar";
import AnimationSection from "../components/Sections/AnimationSection";
import CTASection from "../components/Sections/CTASection";
import Header from "../components/Sections/Header";
import MainContent from "../components/Sections/MainContent";

export default function MainPage() {
  return (
    <div className="h-[844px] bg-gradient-to-b from-blue-100 to-white relative flex flex-col items-center">
      <StatusBar />
      <Header />
      <MainContent />
      <AnimationSection />
      <CTASection />
    </div>
  );
}
