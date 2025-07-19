function StageCard({ children }) {
  return (
    <div className="w-[176px] h-[192px] bg-slate-100 rounded-[10px] pt-[16px] pl-[12px] relative">
      {children}
    </div>
  );
}

function Number({ children }) {
  return <div className="text-blue-400 text-[18px] font-[800]">{children}</div>;
}

function Title({ children, lines }) {
  if (lines && Array.isArray(children)) {
    return (
      <div className="text-zinc-900 text-[16px] font-[600] pt-[16px]">
        {children.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    );
  }
}

function Image({ src, width, height }) {
  return (
    <img
      className="absolute bottom-[15px] right-[15px]"
      src={src}
      width={width}
      height={height}
    />
  );
}

StageCard.Number = Number;
StageCard.Title = Title;
StageCard.Image = Image;

export default StageCard;
