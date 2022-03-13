import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BsChatSquare } from "react-icons/bs";
export default {
  widgets: [
    {
      id: 1,
      link: "mailto:info@moryaconstructions.in",
      iconSrc: <AiOutlineMail />,
      altText: "email",
      title: "info@moryaconstructions.in",
      // description: "",
    },

    {
      id: 3,
      link: "#contact",
      iconSrc: <BsChatSquare />,
      altText: "Get a Quote",
      title: "Get a Quote",
    },
    {
      id: 2,
      link: "tel:+91 240 2351344",

      iconSrc: <AiOutlinePhone />,
      altText: "Chat",
      title: "+91 240 2351344r",
      // description: "",
    },
  ],
  menuItem: [
    {
      path: "home",
      label: "Home",
    },
    {
      path: "services",
      label: "Services",
    },
    {
      path: "projects",
      label: "Projects",
    },

    {
      path: "testimonial",
      label: "Testimonial",
    },
    {
      path: "contact",
      label: "Contact",
    },
  ],
};
