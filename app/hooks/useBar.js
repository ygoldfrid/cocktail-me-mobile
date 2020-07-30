import { useContext } from "react";

import api from "../api/apiService";
import BarContext from "./barContext";
import logger from "../utility/logger";

export default useBar = () => {
  const { bar, loadBar, setBar, useMyBar, setUseMyBar } = useContext(
    BarContext
  );

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

  const getMissingCount = (components, barIds) => {
    const size = components.length;

    const match = components.filter((component) => {
      if (barIds.includes(component.ingredient._id)) {
        component.missing = false;
        return true;
      }

      if (useMyBar)
        for (let alt of component.ingredient.alternatives)
          if (barIds.includes(alt._id)) {
            component.missing = false;
            return true;
          }

      component.missing = true;
      return false;
    }).length;

    return size - match;
  };

  function replaceComponents(cocktail, bar) {
    let areThereAlternatives = false;

    const replacedComponents = cocktail.components.map((component) => {
      if (bar.includes(component.ingredient._id)) return component;
      for (let alt of component.ingredient.alternatives)
        if (bar.includes(alt._id)) {
          areThereAlternatives = true;
          return {
            _id: component._id,
            ingredient: { ...alt },
          };
        }
      return component;
    });

    return { replacedComponents, areThereAlternatives };
  }

  return {
    addOrRemoveItem,
    bar,
    getMissingCount,
    loadBar,
    replaceComponents,
    setUseMyBar,
    useMyBar,
  };
};
