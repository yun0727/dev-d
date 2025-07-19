import NetworkIcon from "../assets/icon/Cellular Connection.svg?react";
import WifiIcon from "../assets/icon/Wifi.svg?react";
import BatteryIcon from "../assets/icon/Battery.svg?react";

export default function StatusBar() {
  return (
    <div className="pt-[15.6px] pb-[14px] px-[16px] flex justify-between w-full">
      <div className="font-semibold text-[15.6px]">18:35 </div>
      <div className="flex gap-[4px]">
        <NetworkIcon />
        <WifiIcon />
        <BatteryIcon />
      </div>
    </div>
  );
}
