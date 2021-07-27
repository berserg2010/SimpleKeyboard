export type Layouts = {
  [key:string]: Array<Array<string>>;
};

export type ActionButton = {
  [key:string]: any;
};


const rus: Array<Array<string>> = [
  [ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', ],
  [ 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', ],
  [ '[upper]', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '<backspace>', ],
  [ '{eng}', '{num}', ',', ' ', '.', ],
];

const eng: Array<Array<string>> = [
  [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
  [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
  [ '[upper]', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<backspace>', ],
  [ '{rus}', '{num}', ',', ' ', '.', ],
];

const num: Array<Array<string>> = [
  [ '#', '₽', '&', '_', '-', '1', '2', '3', '?', ],
  [ '@', '(', ')', '=', '+', '4', '5', '6', '!', ],
  [ '\'', ':', '%', '/', '7', '8', '9', '<backspace>', ],
  [ '<back>', '"', ' ', '*', ',', '0', '.', ],
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
