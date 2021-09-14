import { useState } from "react";

function UseProgressBar() {
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [total, setTotal] = useState(100);

  // // const ctaHandler=()=>{
  //     console.log("runn");
  //     // let newTotal = {one} +{two} + {three};

  //     let newTotal = parseInt(one) + parseInt(two) +parseInt(three)
  //     console.log("new total ", newTotal);
  //     let newOne = 100-parseInt(one);
  //     let newTwo = 100-parseInt(two);
  //     let newThree = 100-parseInt(three);

  //     console.log(
  //       "new total=>",
  //       parseInt(newOne),
  //       parseInt(newTwo),
  //       parseInt(newThree),
  //       ((parseInt(newOne)+ parseInt(newTwo)+ parseInt(newThree))/3)
  //     );
  //     let finalTotal = ((parseInt(newOne)+ parseInt(newTwo)+ parseInt(newThree))/3)

  // // }

  const ctaOne = (val) => {
    console.log("one", val);
    let newVal = 100 - parseInt(val);
    setOne(parseInt(val));
    setTwo(parseInt(newVal - 10) / 2);
    setThree(parseInt(newVal + 10) / 2);
    console.log("one", one, "=", two, "=", three);
  };
  const ctaTwo = (val) => {
    console.log("Two", val);
    let newVal = 100 - parseInt(val);
    setTwo(parseInt(val));
    setOne(parseInt(newVal + 6) / 2);
    setThree(parseInt(newVal - 6) / 2);
    console.log("two", one, "=", two, "=", three);
  };
  const ctaThree = (val) => {
    console.log("Three", val);
    let newVal = 100 - parseInt(val);
    setThree(parseInt(val));
    setTwo(parseInt(newVal + 8) / 2);
    setOne(parseInt(newVal - 8) / 2);
    console.log("three", one, "=", two, "=", three);
  };

  return [one, two, three, ctaOne, ctaTwo, ctaThree];
}
export default UseProgressBar;
