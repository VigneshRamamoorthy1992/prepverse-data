function solution(input) {
  const schedule = [...Array(7)].map((e) => Array(1440).fill(0));
  let scheduleMap = {
    Mon: 0,
    Tue: 1,
    Wed: 2,
    Thu: 3,
    Fri: 4,
    Sat: 5,
    Sun: 6,
  };

  const inputArr = input.split("\n");

  inputArr.forEach((ia) => {
    const meeting = ia.split(" ");
    const from = meeting[1].split("-")[0];
    const to = meeting[1].split("-")[1];

    const fromInt = +from.split(":")[0] * 60 + +from.split(":")[1];
    const toInt = +to.split(":")[0] * 60 + +to.split(":")[1];
    schedule[scheduleMap[meeting[0]]] = schedule[scheduleMap[meeting[0]]].map(
      (e, index) => {
        if (e === 1 || (index >= fromInt && index < toInt)) {
          return 1;
        } else return 0;
      }
    );
  });
  // const scheduleOne = schedule.flat(1);
  const scheduleOne = [];
  schedule.forEach((sch) => scheduleOne.push(...sch));
  let maxCount = 0;
  let prevVal;
  let counter = 0;
  scheduleOne.forEach((e) => {
    if (!!prevVal) {
      prevVal = e;
    }
    if (e === 0) {
      counter++;
    } else {
      prevVal = e;
      counter = 0;
    }
    maxCount = Math.max(maxCount, counter);
  });
  console.log("mac: ", maxCount);
}

solution(
  `Sun 10:00-20:00
Fri 05:00-10:00
Fri 16:30-23:50
Sat 10:00-24:00
Sun 01:00-04:00
Sat 02:00-06:00
Tue 03:30-18:15
Tue 19:00-20:00
Wed 04:25-15:14
Wed 15:14-22:40
Thu 00:00-23:59
Mon 05:00-13:00
Mon 15:00-21:00`
);
