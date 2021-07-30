export type Layouts = {
  [key:string]: Array<Array<string>>;
};

export type ActionButton = {
  [key:string]: any;
};


const rus: Array<Array<string>> = [
  [ 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'к', ],
  [ 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х',  ],
  [ 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я', '<backspace>', ],
  [ '[upper]','{eng}', '{num}', ',', ' ', '.', '\n', ],
];

const eng: Array<Array<string>> = [
  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', ],
  [ 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', ],
  [ 'u', 'v', 'w', 'x', 'y', 'z', '<backspace>', ],
  [ '[upper]', '{rus}', '{num}', ',', ' ', '.', '\n', ],
];

const num: Array<Array<string>> = [
  [ '#', '<', '>', '_', '-', '1', '2', '3', '?', ],
  [ '@', '(', ')', '=', '+', '4', '5', '6', '!', ],
  [ '"', '\'', ':', '%', '/', '7', '8', '9', '<backspace>', ],
  [ '<back>', '^', '~', ' ', '*', ',', '0', '.', '\n', ],
];

const layouts: Layouts = {
  eng,
  rus,
  num,
};

export const actionModifier: ActionButton = {
  'none': (value: string) => { return  value },
  'upper': (value: string) => { return  value.toUpperCase() },
}

export default layouts;
