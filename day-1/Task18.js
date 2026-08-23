var mixedBag=["Hamdy", 21, true, null, undefined, {name: "Hamdy"}, [1,2,3]];
console.log(typeof mixedBag[0]);
console.log(typeof mixedBag[1]);
console.log(typeof mixedBag[2]);
console.log(typeof mixedBag[3]);// علشان في خطأ تاريخي قديم و هما حافظوا عليه علشان التوافق مع الكواد القديمة
console.log(typeof mixedBag[4]);
console.log(typeof mixedBag[5]);
console.log(typeof mixedBag[6]);