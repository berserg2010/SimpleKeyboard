export type Layouts = {
    [key:string]: Array<Array<string>>;
};

const rus: Array<Array<string>> = [
    [ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ' ],
    [ 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э' ],
    [ '{uppercase}', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '{backspace}' ],
    [ '{numerical}', ',', '{space}', '.' ],
];

const layouts: Layouts = {
    rus,
};

export default layouts;
