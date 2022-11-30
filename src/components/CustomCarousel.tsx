import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CustomCarousel(props: any) {
  const { children, ...rest } = props;
  return <Carousel {...rest}>{children}</Carousel>;
}
