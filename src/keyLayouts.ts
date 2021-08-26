export type Layouts = {
  [key:string]: Array<Array<string>>;
};

export type ActionButton = {
  [key:string]: (value: string) => string;
};

const mix: Array<Array<string>> = [
  [ '?', '_', '.', '!', ',', ':', ';', '-', '', ],
  [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '', ],
]

const rus: Array<Array<string>> = [
  [ 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', '', ],
  [ 'з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', '', ],
  [ 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', '', ],
  [ 'ы', 'э', 'ю', 'я', 'й', 'ъ', 'ь', '',  ],
  ...mix,
  [ '<backspace>', '[upper]', '{eng}', '{num}', '{emoji}', '{phrases}', '\n', '', ],
];

const eng: Array<Array<string>> = [
  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', '', ],
  [ 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', '', ],
  [ 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '', ],
  ...mix,
  [ '<backspace>', '[upper]', '{rus}', '{num}', '{emoji}', '{phrases}', '\n', '', ],
];

const num: Array<Array<string>> = [
  [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', ],
  [ '+', '-', '×', ':', '=', '(', ')', '', ],
  [ '%', '<', '>', '\'', ',', '.', '/', '~', '', ],
  [ '<back>', '<backspace>', ' ', '\n', '', ],
];

const emoji: Array<Array<string>> = [
  [ '☺', '☹', '😁', '😂', '😉', '😋', '😍', '😎', '😏', '😔', '😖', '🤗', '', ],
  [ '😘', '😛', '😜', '😟', '😡', '😠', '😤', '😬', '😭', '😢', '😳', '😴', '', ],
  [ '🙈', '🙉', '🙊', '🙏', '🚽', '🛁', '🚁', '🚂', '🚃', '🚑', '🚒', '🚓', '', ],
  [ '🚕', '🚗', '🚙', '🚚', '🚛', '🚜', '🚢', '🚣', '🚴', '🔥', '☕', '❤', '', ],
  [ '👋', '👌', '👍', '👏', '🥶', '🌨', '🎹', '🌜', '🌝', '💐', '🌷', '🌸', '', ],
  [ '<back>', '<backspace>', ' ', '\n', '', ],
];

const phrases: Array<Array<string>> = [
  [ 'Я_хочу_', 'пить', 'есть', 'спать', '', ],
  [ 'писить', 'какать', 'гулять', 'в_магазин', '', ],
  [ 'поговорить_', 'с_мамой', 'с_папой', 'с_бабушкой', '', ],
  [ 'Я_люблю_', 'свою_мамочку', 'своего_папочку', '', ],
  [ 'Да', 'Нет', 'Не_знаю', '', ],
  [ '?', '_', '.', '!', ',', ':', ';', '-', '', ],
  [ '<back>', '<backspace>', ' ', '\n', '', ],
];

const layouts: Layouts = {
  eng,
  rus,
  num,
  emoji,
  phrases,
};

export const actionModifier: ActionButton = {
  'none': (value: string) => { return  value },
  'upper': (value: string) => { return  value.toUpperCase() },
}

export default layouts;
