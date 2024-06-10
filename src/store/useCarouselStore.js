import { createCarouselSlice } from "./createCarouselSlice";
import { shallow } from "zustand/shallow";

const useCarouselStore = () => {
  const { slidesData, slideImages, handleNextSlide } = createCarouselSlice(
    (state) => ({
      slidesData: state.slidesData,
      slideImages: state.slideImages,
      handleNextSlide: state.handleNextSlide
      // handlePrevSlide: state.handlePrevSlide
    }),
    shallow
  );

  return {
    slidesData,
    slideImages,
    handleNextSlide
    // handlePrevSlide
  };
};

export default useCarouselStore;
