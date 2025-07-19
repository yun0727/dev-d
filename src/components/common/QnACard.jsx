import { useState } from "react";

const qnaItems = [
  {
    id: 1,
    question: "임대인 동의가 필요한가요?",
    answer: "네. 결제 취소는 집주인에게 월세를 보내기 전까지 가능해요",
  },
  {
    id: 2,
    question: "계약서는 왜 업로드 해야하나요?",
    answer: "네. 결제 취소는 집주인에게 월세를 보내기 전까지 가능해요",
  },
  {
    id: 3,
    question: "결제 취소가 가능한가요?",
    answer: "네. 결제 취소는 집주인에게 월세를 보내기 전까지 가능해요",
  },
  {
    id: 4,
    question: "결제 취소가 가능한가요?",
    answer: "네. 결제 취소는 집주인에게 월세를 보내기 전까지 가능해요",
  },
];

export default function QnACard() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <>
      {qnaItems.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div key={item.id}>
            <div
              className="text-zinc-900 text-[18px] font-[600] py-[20px] cursor-pointer flex justify-between items-center"
              onClick={() => toggleItem(item.id)}
            >
              {item.question}
            </div>
            <div
              className={`bg-[#F9F9FB] text-zinc-500 text-[14px] font-[600] px-[20px] -ml-[20px] overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "py-[12px] max-h-[100px] opacity-100"
                  : "py-0 max-h-0 opacity-0"
              }`}
            >
              {item.answer}
            </div>
            <div className="outline outline-1 -ml-[20px] outline-zinc-300" />
          </div>
        );
      })}
    </>
  );
}
