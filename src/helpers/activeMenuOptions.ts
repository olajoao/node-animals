type activeMenuOption = "" | "all" | "dog" | "cat" | "fish";

export const defineActiveOption = (menuOption: activeMenuOption) => {
  let returnOption = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  };

  if(menuOption !== "") {
    returnOption[menuOption] = true;
  } 

  return returnOption;
}