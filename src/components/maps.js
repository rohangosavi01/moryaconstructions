import React from "react";
import { Spinner } from "theme-ui";

export default function GoogleMaps() {
  return (
    <>
      <iframe
        width="582"
        height="470"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=582&amp;height=531&amp;hl=en&amp;q=148,%20Samarth%20Nagar,%20Behind%20kasbekar%20Hospital,%20Aurangabad,%20Maharashtra%20431001,%20India%20Aurangabad+(Morya%20constructions)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      <a href="https://embedmaps.org/">
        <Spinner />
      </a>{" "}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=087b548087684b16cdf34acfda0f6e6884c4e555"
      ></script>
    </>
  );
}
