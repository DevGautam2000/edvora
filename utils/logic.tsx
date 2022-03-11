export const closest = (arr: any, num: any) => {
    return (
      arr.reduce((acc: any, val: any) => {
        if (Math.abs(val - num) < Math.abs(acc)) {
          return val - num;
        } else {
          return acc;
        }
      }, Infinity) + num
    );
  };