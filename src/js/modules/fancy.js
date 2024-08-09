import { Fancybox } from "@fancyapps/ui";
export const fancy = () => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      //   showOnStart: false,
    },
  });

  Fancybox.bind('[data-fancybox="fleet_inner"]', {
    Thumbs: {
      //   showOnStart: false,
    },
  });
};
