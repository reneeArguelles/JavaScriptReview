const sampleArray = [1, 0, null, undefined, false, -0, 0n, "", '', ``, NaN, 'A', 123, -123, -0x0, -0.0, { name: "ObjectName" }, 0, '0', 'false', function(){}, BigInt(1232424), BigInt("0b11111111111111111111111111111111111111111111111111111")];

const checkTruthyOrFalsy = sampleArray.map((element) => Boolean(element));

console.log(checkTruthyOrFalsy);