const images = [
  {
    src: "../src/assets/image/box.webp",
    alt: "main_image",
    width: "110px",
    height: "98px",
    delay: "0s",
  },
  {
    src: "../src/assets/image/coin.webp",
    alt: "main_image",
    width: "126px",
    height: "102px",
    delay: "0.5s",
  },
  {
    src: "../src/assets/image/report.webp",
    alt: "main_image",
    width: "91px",
    height: "87px",
    delay: "1s",
  },
  {
    src: "../src/assets/image/phone.webp",
    alt: "main_image",
    width: "103px",
    height: "136px",
    delay: "1.5s",
  },
  {
    src: "../src/assets/image/card.webp",
    alt: "main_image",
    width: "88px",
    height: "77px",
    delay: "2s",
  },
  {
    src: "../src/assets/image/home.webp",
    alt: "main_image",
    width: "101px",
    height: "97px",
    delay: "2.5s",
  },
];

export default function AnimationSection() {
  return (
    <div className="mt-[103px] py-[30px] w-full flex justify-center overflow-hidden">
      {images.map((image) => (
        <img
          src={image.src}
          alt={image.alt}
          className="animate-float mx-2"
          style={{
            width: image.width,
            height: image.height,
            animationDelay: image.delay,
          }}
        />
      ))}
    </div>
  );
}
