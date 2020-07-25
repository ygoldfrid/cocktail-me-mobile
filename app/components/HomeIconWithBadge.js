import React from "react";

import IconWithBadge from "./IconWithBadge";
import useBar from "../hooks/useBar";

function HomeIconWithBadge(props) {
  const { bar } = useBar();
  return <IconWithBadge {...props} badgeCount={bar.length} />;
}

export default HomeIconWithBadge;
