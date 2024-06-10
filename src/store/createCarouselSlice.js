import slides from "../data/slides";
import { create } from "zustand";
import { uid } from "uid";

const newSlides = () => {
  return slides.map((item) => ({
    ...item,
    id: uid()
  }));
};

export const createCarouselSlice = create((set) => ({
  slidesData: [...newSlides().slice(1), ...newSlides()],
  slideImages: [...newSlides().slice(0, 1)],

  handleNextSlide: () => {
    set((state) => {
      let newSlidesData = [...state.slidesData.slice(1)];

      let newSlideImages = [state.slidesData[0]];

      if (newSlidesData.length === slides.length) {
        newSlidesData = [...newSlidesData, ...newSlides()];
      }

      return {
        ...state,
        slidesData: newSlidesData,
        slideImages: newSlideImages
      };
    });
  }

  // handlePrevSlide: () =>
  //   set((state) => {
  //     const index = slides.findIndex(
  //       (obj) => state.slidesData[0].img === obj.img
  //     );
  //     const slideToPrepend = { ...slides.at(index - 1), id: uid() };
  //     let newSlidesData = [slideToPrepend, ...state.slidesData];

  //     const slideImageToPrepend = { ...slides.at(index - 2), id: uid() };
  //     const newSlideImages = [slideImageToPrepend];

  //     if (newSlidesData.length > 8) {
  //       newSlidesData = newSlidesData.slice(0, newSlidesData.length - 4);
  //     }

  //     return {
  //       ...state,
  //       slideImages: newSlideImages,
  //       slidesData: newSlidesData
  //     };
  //   })
}));
