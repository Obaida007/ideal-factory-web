import kitchenImage from "@/assets/images/kitchens.png";
import wardrobeImage from "@/assets/images/wardrobes-closets.png";
import doorImage from "@/assets/images/Wooden-Doors.png";
import windowImage from "@/assets/images/premium-windows.jpg";
import kitchenIcon from "@/public/icons/kitchens.svg";
import wardrobeIcon from "@/public/icons/wardrobes.svg";
import doorIcon from "@/public/icons/doors.svg";
import windowIcon from "@/public/icons/window.svg";

/** Static assets only — titles & descriptions are supplied by the page (Server Component) */
export const SolutionsAssets = [
  { id: 1, icon: kitchenIcon,  image: kitchenImage  },
  { id: 2, icon: wardrobeIcon, image: wardrobeImage },
  { id: 3, icon: doorIcon,     image: doorImage     },
  { id: 4, icon: windowIcon,   image: windowImage   },
] as const;
