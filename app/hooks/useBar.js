import { useContext } from "react";

import api from "../api/apiService";
import BarContext from "./barContext";
import logger from "../utility/logger";

export default useBar = () => {
  const { bar, setBar, loadBar } = useContext(BarContext);

  const addOrRemoveItem = async (ingredient, isInMyBar = true) => {
    let actionFunc;

    if (isInMyBar) {
      setBar(bar.filter((ing) => ing._id !== ingredient._id));
      actionFunc = api.removeFromBar;
    } else {
      bar.unshift(ingredient);
      setBar([...bar]);
      actionFunc = api.addToBar;
    }

    const result = await actionFunc(ingredient._id);
    if (!result.ok) logger.log(result);
  };

  function getMissingLength(components, barIds) {
    const size = components.length;

    const match = components.filter((component) => {
      if (barIds.includes(component.ingredient._id)) return true;
      for (let alt of component.ingredient.alternatives)
        if (barIds.includes(alt)) return true;

      component.missing = true;
      return false;
    }).length;
    return size - match;
  }

  return { bar, addOrRemoveItem, getMissingLength, loadBar };
};
