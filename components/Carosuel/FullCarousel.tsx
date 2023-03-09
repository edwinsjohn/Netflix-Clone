import CardSlider from "./CardSlider";

export default function FullCarousel(props: any) {
  return (
    <div>
      <div className="ml-[72px] tracking-wide text-white text-[14px] z-20 font-semibold">
        <h1>{props.sectionTitle}</h1>
      </div>
      <CardSlider link={props.link} />
    </div>
  );
}
