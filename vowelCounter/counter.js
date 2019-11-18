const getCount = (str) => {
  const regex = /[aeiouAEIOUÁáÀàÉéÈèÍíÌìÓóÒòÚúÙù]/g;
  let onlyVowel = str.match(regex);
  if (onlyVowel === null) {
    onlyVowel = 0;
    return onlyVowel;
  }
  const vowelsCount = onlyVowel.length;
  return vowelsCount;
};

module.exports = {
  getCount,
};
