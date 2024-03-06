import Image from "next/image";
import "./page-card.scss";
type PageCardProps = {
  children: React.ReactNode;
  image: string;
  alt: string;
  padding?: string;
};

export default function PageCard({
  children,
  image,
  alt,
  padding,
}: PageCardProps) {
  return (
    <div id="regime-card" className={padding}>
      <div id="image-content-regime">
        <Image className="" src={image} alt={alt} fill />
      </div>
      {children}
    </div>
  );
}
