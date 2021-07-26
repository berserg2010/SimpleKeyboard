type LayoutType = {
  [key:string]: Array<Array<string>>;
}

export type Layouts = {
  [key:string]: LayoutType;
};

export type ActionButton = {
  [key:string]: any;
};


const rusLower: Array<Array<string>> = [
  [ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', ],
  [ 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', ],
  [ '[upper]', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '<backspace>', ],
  [ '{eng}', '{num}', ',', ' ', '.', ],
];

const rusUpper: Array<Array<string>> = [
  [ 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', ],
  [ 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э' ],
  [ '[lower]', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '<backspace>', ],
  [ '{eng}', '{num}', ',', ' ', '.', ],
];

const engLower: Array<Array<string>> = [
  [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
  [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
  [ '[upper]', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<backspace>', ],
  [ '{rus}', '{num}', ',', ' ', '.', ],
];

const engUpper: Array<Array<string>> = [
  [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', ],
  [ 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ],
  [ '[lower]', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<backspace>' ],
  [ '{rus}', '{num}', ',', ' ', '.', ],
];

const numFirst: Array<Array<string>> = [
  [ '#', '₽', '&', '_', '-', '1', '2', '3', '?', ],
  [ '@', '(', ')', '=', '+', '4', '5', '6', '!', ],
  [ '\'', ':', '%', '/', '7', '8', '9', '<backspace>', ],
  [ '<back>', '"', ' ', '*', ',', '0', '.', ],
];

const layouts: Layouts = {
  eng: {
    lower: engLower,
    upper: engUpper,
  },
  rus: {
    lower: rusLower,
    upper: rusUpper,
  },
  num: {
    lower: numFirst,
  },
};

export const actionButtons: ActionButton = {
  '{rusLower}': () => { layouts['rusLower'] },
  '{rusUpper}': () => { layouts['rusUpper'] },
  '{engLower}': () => { layouts['engLower'] },
  '{engUpper}': () => { layouts['engUpper'] },
}


export default layouts;
