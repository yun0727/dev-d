import QnACard from "../common/QnACard";

export default function QnASection() {
  return (
    <div className="mt-[100px]">
      <div className="text-zinc-900 font-[700]">자주 묻는 질문</div>
      <div className="flex flex-col">
        <QnACard />
      </div>
    </div>
  );
}
