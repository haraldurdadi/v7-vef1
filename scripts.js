/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bdðfghjklmnprstvxþ".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

//komið
function longest(str) {
  if (!isString(str)) {
    return null;
  }
  if (str === "") {
    return "";
  }
  const words = split(str, " ");
  let lengstaOrd = words[0];
  let maxLength = lengstaOrd.length;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (word.length > maxLength) {
      lengstaOrd = word;
      maxLength = word.length;
    }
  }
  return lengstaOrd;
}
console.assert(
  longest("hæ og bæ") === "hæ",
  "longest: skilar fyrsta orðinu ef annað jafnt finnast"
);
console.assert(
  longest("halló heimur!") === "heimur!",
  "longest: greinarmerki er partur af orðinu"
);
console.assert(
  longest("") === "",
  "longest: ef str er tómur strengur er skilað tómum streng"
);
console.assert(
  longest(123) === null,
  "longest: skilar null ef str er ekki strengur"
);
console.assert(longest(null) === null, "longest: skilar null ef str er null");

//komið
function shortest(str) {
  if (!isString(str)) {
    return null;
  }
  if (str === "") {
    return "";
  }
  const words = split(str, " ");
  let stydstaOrd = words[0];
  let minLength = stydstaOrd.length;

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (word.length < minLength) {
      stydstaOrd = word;
      minLength = word.length;
    }
  }
  return stydstaOrd;
}
console.assert(
  shortest("sæll kall") === "sæll",
  "shortest: skilar fyrsta orðinu ef annað jafnt finnst"
);
console.assert(
  shortest("verkefni 7!") === "7!",
  "shortest: greinarmerki er partur af orðinu"
);
console.assert(
  shortest("") === "",
  "shortest: ef str er tómur strengur er skilað tómum streng"
);
console.assert(
  shortest(123) === null,
  "shortest: skilar null ef str er ekki strengur"
);
console.assert(shortest(null) === null, "shortest: skilar null ef str er null");

//komið
function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("halló") === "óllah",
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);

//komið
function palindrome(str) {
  if (isString(str) && str !== "") {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase();
  }
  return false;
}
console.assert(palindrome("halló") === false, "palindrome: strengur, ekki");
console.assert(palindrome("hah") === true, "palindrome: strengur, er");
console.assert(palindrome("") === false, "palindrome: tómi strengur ekki");

function vowels(str) {
  if (!isString(str)) {
    return 0;
  }
  const lagstafirStr = str.toLowerCase();
  const stafir = split(lagstafirStr, '');
  let count = 0;

  for(let i = 0; i < stafir.length; i++) {
    if (VOWELS.includes(stafir[i])) {
      count++;
    }
  }
  return count;
}
console.assert(vowels("halló") === 2, "vowels: skilar fjölda sérhljóða í str");
console.assert(vowels("bmx") === 0, "vowels: ef engir sérhljóðar skilar 0");
console.assert(vowels("") === 0, "vowels: ef tómur strengur þá skila 0");
console.assert(vowels(false) === 0, "vowels: ef str er ekki strengur þá skila 0");
console.assert(vowels("EYÓ") === 3, "vowels: telur íslenska hástafs sérhljóða með");
console.assert(vowels("aeiouyáéýúíóöæ") === 14, "vowels: telur alla íslenska sérhljóða");
console.assert(vowels("123") === 0, "vowels: ef tölur inní str skilar 0");

function consonants(str) {
  if (!isString(str)) {
    return 0;
  }
  const lagstafirStr = str.toLowerCase();
  const stafir = split(lagstafirStr, '');
  let count = 0;

  for(let i = 0; i< stafir.length; i++) {
    if (CONSONANTS.includes(stafir[i])) {
      count++;
    }
  }
  return count;
}
console.assert(consonants("halló") === 3, "consonants: skilar fjölda samhljóða í str");
console.assert(consonants("aeiouyáéýúíóöæ") === 0, "consonants: engir sérhljóðar í samhljóðum");
console.assert(consonants("") === 0, "consonants: ef str er tómur strengur skilar 0");
console.assert(consonants(false) === 0, "consonants: ef str er ekki strengur skilar 0");
console.assert(consonants("HÆ") === 1, "consonants: telur íslenska hástafs samhljóða með");
console.assert(consonants("bdðfghjklmnprstvxþ") === 18, "consonants: telur alla samhljóða með");

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
