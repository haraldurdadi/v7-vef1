/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

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

function longest(str) {
  // Útfæra
}

function shortest(str) {
  // Útfæra
}

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
    const reversed = reverse(str)
    return str.toLowerCase() === reversed.toLowerCase()  
  }
  return false;
}
console.assert(palindrome('halló') === false, 'palindrome: strengur, ekki')
console.assert(palindrome('hah') === true, 'palindrome: strengur, er')
console.assert(palindrome('') === false, 'palindrome: tómi strengur ekki')

function vowels(str) {
  // Útfæra
}

function consonants(str) {
  // Útfæra
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
