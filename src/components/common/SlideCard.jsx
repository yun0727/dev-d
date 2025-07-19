function SlideCard({ children }) {
  return (
    <div className="w-[168px] h-[120px] bg-slate-100 rounded-[10px] pt-[20px] pl-[16px]">
      {children}
    </div>
  );
}

function SlideCardTitle({ children }) {
  return (
    <div className="text-zinc-900 text-[16px] font-[700] leading-snug">
      {children}
    </div>
  );
}

function SlideCardDetail({ src, text, width, height }) {
  return (
    <div className="flex items-center mt-[20px] gap-[8px]">
      <img
        src={src}
        alt="slide image"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <div className="text-[12px] text-zinc-900">{text}</div>
    </div>
  );
}
SlideCard.Title = SlideCardTitle;
SlideCard.Detail = SlideCardDetail;

export default SlideCard;
