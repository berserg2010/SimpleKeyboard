type Layout = Array<Array<string>>;

export type Layouts = {
  [key: string]: Layout;
};

export type ActionButton = {
  [key: string]: (value: string) => string;
};

const mixSymbols: Layout = [['?', '_', '.', '!', ',', ':', ';', '-', '']];

const mixNum: Layout = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '']];

const mixUnits: Layout = [
  ['мм', 'см', 'дм', 'м', 'км', 'м^2', 'м^3', ''],
  ['м/с', 'км/ч', 'мг', 'г', 'кг', 'т', ''],
];

const mixSpaceChar: Layout = [['<back>', '<backspace>', '\n', '']];

const rus: Layout = [
  ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', ''],
  ['з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', ''],
  ['с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', ''],
  ['ы', 'э', 'ю', 'я', 'й', 'ъ', 'ь', ''],
  ...mixNum,
  ...mixSymbols,
  ['<backspace>', '[upper]', '{eng}', '{num}', '{emoji}', '{phrases}', '\n', ''],
];

const eng: Layout = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', ''],
  ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', ''],
  ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''],
  ...mixNum,
  ...mixSymbols,
  ['<backspace>', '[upper]', '{rus}', '{num}', '{emoji}', '{phrases}', '\n', ''],
];

const num: Layout = [
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ''],
  ['+', '-', '×', ':', '=', '(', ')', ''],
  ['%', '<', '>', "'", ',', '.', '/', '~', ''],
  ...mixUnits,
  ...mixSymbols,
  ...mixSpaceChar,
];

const emoji: Layout = [
  ['☺', '☹', '😁', '😂', '😉', '😋', '😍', '😎', '😏', '😔', '😖', '🤗', ''],
  ['😘', '😛', '😜', '😟', '😡', '😠', '😤', '😬', '😭', '😢', '😳', '😴', ''],
  ['🙈', '🙉', '🙊', '🙏', '🚽', '🛁', '🚁', '🚂', '🚃', '🚑', '🚒', '🚓', ''],
  ['🚕', '🚗', '🚙', '🚚', '🚛', '🚜', '🚢', '🚣', '🚴', '🔥', '☕', '❤', ''],
  ['👋', '👌', '👍', '👏', '🥶', '🌨', '🎹', '🌜', '🌝', '💐', '🌷', '🌸', ''],
  ...mixSymbols,
  ...mixSpaceChar,
];

const phrases: Layout = [
  ['Я_хочу_', 'пить', 'есть', 'спать', ''],
  ['писить', 'какать', 'гулять', 'в_магазин', ''],
  ['поговорить_', 'с_мамой', 'с_папой', 'с_бабушкой', ''],
  ['Я_люблю_', 'свою_мамочку', 'своего_папочку', ''],
  ['Да', 'Нет', 'Не_знаю', ''],
  ...mixSymbols,
  ...mixSpaceChar,
];

const layouts: Layouts = {
  eng,
  rus,
  num,
  emoji,
  phrases,
};

export const actionModifier: ActionButton = {
  none: (value: string): string => value,
  upper: (value: string): string => value.toUpperCase(),
};

export default layouts;
