import StatusBar from "./components/StatusBar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import AnimationSection from "./components/AnimationSection";
import CTASection from "./components/CTASection";

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
