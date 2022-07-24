/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 342:
/***/ (function(module, __unused_webpack___webpack_exports__, __webpack_require__) {

// extracted by mini-css-extract-plugin

    if(true) {
      // 1658648437772
      var cssReload = __webpack_require__(783)(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ 449:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(963);
// EXTERNAL MODULE: ./node_modules/element-plus/es/defaults.mjs + 783 modules
var defaults = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/element-plus/theme-chalk/index.css
var theme_chalk = __webpack_require__(216);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(252);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(577);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/App.vue?vue&type=template&id=611fc19c&ts=true

function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_MainHeader = (0,runtime_core_esm_bundler/* resolveComponent */.up)("MainHeader");
    const _component_TextInput = (0,runtime_core_esm_bundler/* resolveComponent */.up)("TextInput");
    const _component_KeyboardComponent = (0,runtime_core_esm_bundler/* resolveComponent */.up)("KeyboardComponent");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
        class: (0,shared_esm_bundler/* normalizeClass */.C_)(_ctx.FULLSCREEN_ELEMENT_CLASSNAME)
    }, [
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_MainHeader),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("main", null, [
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_TextInput),
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_KeyboardComponent, { onChange: _ctx.getKeyboard }, null, 8 /* PROPS */, ["onChange"])
        ])
    ], 2 /* CLASS */));
}

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/TextInput.vue?vue&type=template&id=eea886b8&ts=true

const _hoisted_1 = ["textContent"];
const _hoisted_2 = ["textContent"];
function TextInputvue_type_template_id_eea886b8_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", {
        class: (0,shared_esm_bundler/* normalizeClass */.C_)(_ctx.SCROLL_ELEMENT_CLASSNAME),
        style: (0,shared_esm_bundler/* normalizeStyle */.j5)([_ctx.styles])
    }, [
        ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.textArray, (value, key) => {
            return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, { key: key }, [
                (0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
                    class: "line_number",
                    textContent: (0,shared_esm_bundler/* toDisplayString */.zw)(key + 1)
                }, null, 8 /* PROPS */, _hoisted_1),
                (0,runtime_core_esm_bundler/* createElementVNode */._)("p", {
                    class: (0,shared_esm_bundler/* normalizeClass */.C_)(_ctx.TEXT_ELEMENT_CLASSNAME),
                    textContent: (0,shared_esm_bundler/* toDisplayString */.zw)(value)
                }, null, 10 /* CLASS, PROPS */, _hoisted_2)
            ], 64 /* STABLE_FRAGMENT */));
        }), 128 /* KEYED_FRAGMENT */))
    ], 6 /* CLASS, STYLE */));
}

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js + 5 modules
var vuex_esm_bundler = __webpack_require__(989);
;// CONCATENATED MODULE: ./src/constants.ts
const SCROLL_ELEMENT_CLASSNAME = 'text_input';
const TEXT_ELEMENT_CLASSNAME = 'text_element';
const CARET_CLASSNAME = 'caret';
const FULLSCREEN_ELEMENT_CLASSNAME = 'wrapper';

;// CONCATENATED MODULE: ./src/use/useScroll.ts


/* harmony default export */ var useScroll = (() => {
    /**
     * Прокрутить скролл, держать в области видимости элемент с указанным классом.
     */
    const scrollElement = async () => {
        await (0,runtime_core_esm_bundler/* nextTick */.Y3)();
        const [caret] = document.getElementsByClassName(CARET_CLASSNAME);
        caret?.scrollIntoView({ block: 'center', behavior: 'auto' });
    };
    return {
        scrollElement,
    };
});

;// CONCATENATED MODULE: ./src/use/useCaret.ts



/* harmony default export */ var useCaret = (() => {
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const text = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readText);
    /**
     * Создание элемента каретки.
     */
    const createCaret = () => {
        const caret = document.createElement('span');
        caret.setAttribute('class', 'caret');
        return caret;
    };
    /**
     * Вычисление и добавление каретки в текст.
     */
    const setCaret = async (position) => {
        await (0,runtime_core_esm_bundler/* nextTick */.Y3)();
        const textElements = document.getElementsByClassName(TEXT_ELEMENT_CLASSNAME);
        // Удаляем каретку из текста
        Array.from(textElements).forEach((item) => {
            const [caret] = item.getElementsByClassName('caret');
            caret?.remove();
        });
        if (typeof position === 'undefined' || position >= text.value.length) {
            textElements[textElements.length - 1].appendChild(createCaret());
            return;
        }
        // Получаем массив строк от начала до текущей позиции
        const lines = text.value.slice(0, position).split('\n');
        // Получаем позицию в строке
        const positionInLine = lines[lines.length - 1].length;
        // Получаем элемент с текущей позицией
        const textEl = textElements[lines.length - 1];
        // Сохраняем значение элемента
        const value = textEl.textContent || '';
        textEl.textContent = '';
        if (position === 0) {
            textEl.appendChild(createCaret());
            textEl.append(value);
            return;
        }
        textEl.append(value.slice(0, positionInLine));
        textEl.appendChild(createCaret());
        textEl.append(value.slice(positionInLine));
    };
    return {
        setCaret,
    };
});

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/TextInput.vue?vue&type=script&lang=ts





/* harmony default export */ var TextInputvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'TextInput',
    setup() {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const { scrollElement } = useScroll();
        const { setCaret } = useCaret();
        const text = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readText);
        const textArray = (0,runtime_core_esm_bundler/* computed */.Fl)(() => text.value.split('\n'));
        const caretPosition = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readCaretPosition);
        const styles = (0,runtime_core_esm_bundler/* computed */.Fl)(() => ({
            gridTemplateRows: textArray.value.length < 2 ? '1fr' : `repeat(${textArray.value.length - 1}, auto) 1fr`,
        }));
        (0,runtime_core_esm_bundler/* watch */.YP)(caretPosition, () => {
            setCaret(caretPosition.value);
            scrollElement();
        });
        (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
            setCaret();
            scrollElement();
        });
        return {
            textArray,
            SCROLL_ELEMENT_CLASSNAME: SCROLL_ELEMENT_CLASSNAME,
            TEXT_ELEMENT_CLASSNAME: TEXT_ELEMENT_CLASSNAME,
            styles,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/TextInput.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/TextInput.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TextInputvue_type_script_lang_ts, [['render',TextInputvue_type_template_id_eea886b8_ts_true_render]])

/* harmony default export */ var TextInput = (__exports__);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/KeyboardComponent.vue?vue&type=template&id=13197e22&ts=true

const KeyboardComponentvue_type_template_id_13197e22_ts_true_hoisted_1 = {
    ref: "keyboardRef",
    class: "keyboard"
};
function KeyboardComponentvue_type_template_id_13197e22_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ButtonComponent = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ButtonComponent");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(runtime_dom_esm_bundler/* Transition */.uT, {
        name: "slide-fade",
        persisted: ""
    }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
            (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("section", KeyboardComponentvue_type_template_id_13197e22_ts_true_hoisted_1, [
                ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(_ctx.layout, (i, key) => {
                    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", {
                        key: key,
                        class: "row"
                    }, [
                        ((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)(i, (j, key) => {
                            return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_ButtonComponent, {
                                key: key,
                                char: j
                            }, null, 8 /* PROPS */, ["char"]));
                        }), 128 /* KEYED_FRAGMENT */))
                    ]));
                }), 128 /* KEYED_FRAGMENT */))
            ], 512 /* NEED_PATCH */), [
                [runtime_dom_esm_bundler/* vShow */.F8, !_ctx.isHiddenKeyboard]
            ])
        ]),
        _: 1 /* STABLE */
    }));
}

;// CONCATENATED MODULE: ./src/components/KeyboardComponent.vue?vue&type=template&id=13197e22&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(262);
;// CONCATENATED MODULE: ./src/keyLayouts.ts
const mixSymbols = [['?', '_', '.', '!', ',', ':', ';', '-', '']];
const mixNum = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '']];
const mixUnits = [
    ['мм', 'см', 'дм', 'м', 'км', 'м^2', 'м^3', ''],
    ['м/с', 'км/ч', 'мг', 'г', 'кг', 'т', ''],
];
const mixSpaceChar = [['<back>', '<backspace>', '\n', '']];
const rus = [
    ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', ''],
    ['з', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'р', ''],
    ['с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', ''],
    ['ы', 'э', 'ю', 'я', 'й', 'ъ', 'ь', ''],
    ...mixNum,
    ...mixSymbols,
    ['<backspace>', '{nav}', '[upper]', '{eng}', '{num}', '{emoji}', '{phrases}', '\n', ''],
];
const eng = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', ''],
    ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', ''],
    ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''],
    ...mixNum,
    ...mixSymbols,
    ['<backspace>', '{nav}', '[upper]', '{rus}', '{num}', '{emoji}', '{phrases}', '\n', ''],
];
const num = [
    ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ''],
    ['+', '-', '×', ':', '=', '(', ')', ''],
    ['%', '<', '>', "'", ',', '.', '/', '~', ''],
    ...mixUnits,
    ...mixSymbols,
    ...mixSpaceChar,
];
const emoji = [
    ['☺', '☹', '😁', '😂', '😉', '😋', '😍', '😎', '😏', '😔', '😖', '🤗', ''],
    ['😘', '😛', '😜', '😟', '😡', '😠', '😤', '😬', '😭', '😢', '😳', '😴', ''],
    ['🙈', '🙉', '🙊', '🙏', '🚽', '🛁', '🚁', '🚂', '🚃', '🚑', '🚒', '🚓', ''],
    ['🚕', '🚗', '🚙', '🚚', '🚛', '🚜', '🚢', '🚣', '🚴', '🔥', '☕', '❤', ''],
    ['👋', '👌', '👍', '👏', '🥶', '🌨', '🎹', '🌜', '🌝', '💐', '🌷', '🌸', ''],
    ...mixSymbols,
    ...mixSpaceChar,
];
const phrases = [
    ['Я_хочу_', 'пить', 'есть', 'спать', ''],
    ['писить', 'какать', 'гулять', 'в_магазин', ''],
    ['поговорить_', 'с_мамой', 'с_папой', 'с_бабушкой', ''],
    ['Я_люблю_', 'свою_мамочку', 'своего_папочку', ''],
    ['Да', 'Нет', 'Не_знаю', ''],
    ...mixSymbols,
    ...mixSpaceChar,
];
const nav = [
    ['left', 'top', 'right', 'bottom', ''],
    ['<backspace>', '{rus}', '{eng}', '{num}', '{emoji}', '{phrases}', '\n', ''],
];
const layouts = {
    eng,
    rus,
    num,
    emoji,
    phrases,
    nav,
};
const actionModifier = {
    none: (value) => value,
    upper: (value) => value.toUpperCase(),
};
/* harmony default export */ var keyLayouts = (layouts);

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/ButtonComponent.vue?vue&type=template&id=4e60cb34&ts=true

function ButtonComponentvue_type_template_id_4e60cb34_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
        ref: "buttonRef",
        class: "button",
        onClick: _cache[0] || (_cache[0] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(
        //@ts-ignore
        (...args) => (_ctx.clickButton && _ctx.clickButton(...args)), ["stop", "prevent"]))
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.checkButton), 513 /* TEXT, NEED_PATCH */));
}

;// CONCATENATED MODULE: ./src/types/enums.ts
var Nav;
(function (Nav) {
    Nav["LEFT"] = "left";
    Nav["TOP"] = "top";
    Nav["RIGHT"] = "right";
    Nav["BOTTOM"] = "bottom";
})(Nav || (Nav = {}));

// EXTERNAL MODULE: ./node_modules/voca/index.js
var voca = __webpack_require__(485);
var voca_default = /*#__PURE__*/__webpack_require__.n(voca);
;// CONCATENATED MODULE: ./src/classes/caretPosition.ts

class CaretPosition {
    /**
     * Вычислить позицию каретки при перемещении влево.
     *
     * @param currentPosition
     * @param text
     */
    static toLeft(currentPosition, text) {
        // Получаем символ слева
        const char = this.getLastChar(text.slice(0, currentPosition));
        if (currentPosition > char.length) {
            return currentPosition - char.length;
        }
        else {
            return 0;
        }
    }
    /**
     * Вычислить позицию каретки при перемещении вправо.
     *
     * @param currentPosition
     * @param text
     */
    static toRight(currentPosition, text) {
        // Получаем символ справа
        const char = voca_default().chain(text.slice(currentPosition)).graphemeAt(0).value();
        const newPosition = currentPosition + char.length;
        if (newPosition < text.length) {
            return newPosition;
        }
        else {
            return text.length;
        }
    }
    /**
     * Вычислить позицию каретки при перемещении вверх.
     *
     * @param currentPosition
     * @param text
     */
    static toTop(currentPosition, text) {
        // Получаем массив строк от начала до текущей позиции с усечением последней строки
        const lines = text.slice(0, currentPosition).split('\n');
        if (lines.length > 1) {
            // Получить подстроку и количество символов в подстроке для текущей строки
            const [currentSubstring, currentCountChars] = this.getSubstringFromArray(lines, lines.length - 1);
            // Следующая строка на которую требуется перейти и количество символов в следующей строке
            const [nextLine, nextLineChars] = this.getSubstringFromArray(lines, lines.length - 2, lines.length - 1);
            // Позиция в конце следующей строки
            const nextLineNullPosition = currentPosition - currentSubstring.length - 1;
            if (currentCountChars < nextLineChars) {
                // Если в текущей строке символов меньше чем в следующей,
                // то в следующей строке сместить курсор на количество символов текущей строки
                return nextLineNullPosition - nextLine.length + this.getCharArray(nextLine, 0, currentCountChars).length;
            }
            else {
                // Иначе установить курсор в конец следующей строки
                return nextLineNullPosition;
            }
        }
        return 0;
    }
    /**
     * Вычислить позицию каретки при перемещении вниз.
     *
     * @param currentPosition
     * @param text
     */
    static toBottom(currentPosition, text) {
        // Получаем массив строк от начала до текущей позиции с усечением последней строки
        const lines = text.slice(0, currentPosition).split('\n');
        // Получаем массив из всех строк
        const splitLines = text.split('\n');
        if (lines.length < splitLines.length) {
            // Получить подстроку и количество символов в подстроке для текущей строки
            const [currentSubstring, currentCountChars] = this.getSubstringFromArray(lines, lines.length - 1);
            // Текущая строка (вся)
            const [currentLine] = splitLines.slice(lines.length - 1, lines.length);
            // Следующая строка на которую требуется перейти и количество символов в следующей строке
            const [nextLine, nextLineChars] = this.getSubstringFromArray(splitLines, lines.length, lines.length + 1);
            // Позиция в начале следующей строки
            const nextLineNullPosition = currentPosition - currentSubstring.length + currentLine.length + 1;
            if (currentCountChars < nextLineChars) {
                // Если в текущей строке символов меньше чем в следующей,
                // то в следующей строке сместить курсор на количество символов текущей строки
                return nextLineNullPosition + this.getCharArray(nextLine, 0, currentCountChars).length;
            }
            else {
                // Иначе установить курсор в конец следующей строки
                return nextLineNullPosition + nextLine.length;
            }
        }
        return text.length;
    }
    /**
     * Вернуть картеж из подстроки элемента массива и количества символов в подстроке.
     *
     * @param arr
     * @param start
     * @param end
     */
    static getSubstringFromArray(arr, start, end) {
        // Подстрока
        const [substring] = arr.slice(start, end);
        // Количество символов в подстроке
        const countChars = voca_default().countGraphemes(substring);
        return [substring, countChars];
    }
    /**
     * Получить подстроку из строки.
     *
     * @param text
     * @param start
     * @param end
     */
    static getCharArray(text, start, end) {
        return voca_default().graphemes(text).slice(start, end).join('');
    }
    /**
     * Получить последний символ.
     *
     * @param text
     */
    static getLastChar(text) {
        const char = voca_default().chain(text).reverseGrapheme().graphemeAt(0).value();
        return char;
    }
}
/* harmony default export */ var classes_caretPosition = (CaretPosition);

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/ButtonComponent.vue?vue&type=script&lang=ts





/* harmony default export */ var ButtonComponentvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'ButtonComponent',
    props: {
        char: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const buttonRef = (0,reactivity_esm_bundler/* ref */.iH)(null);
        const currentLayout = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.state.keyboardStore.currentLayout);
        const modifier = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.state.keyboardStore.modifier);
        const beforeLayout = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.state.keyboardStore.beforeLayout);
        const text = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readText);
        const caretPosition = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readCaretPosition);
        const checkButton = (0,runtime_core_esm_bundler/* computed */.Fl)(() => {
            let char = '';
            const firstChar = props.char[0];
            const lastChar = props.char[props.char.length - 1];
            buttonRef.value?.classList.remove('button--symbol');
            if ((firstChar === '{' && lastChar === '}') ||
                (firstChar === '[' && lastChar === ']') ||
                (firstChar === '<' && lastChar === '>')) {
                char = props.char.slice(1, props.char.length - 1);
                switch (char) {
                    case 'upper': {
                        char = modifier.value === 'none' ? '⇧' : '⇩';
                        break;
                    }
                    case 'backspace': {
                        char = 'Шаг назад';
                        break;
                    }
                    case 'back': {
                        char = '⇦';
                        break;
                    }
                    case 'emoji': {
                        char = '😉';
                        break;
                    }
                    case 'phrases': {
                        char = 'Фразы';
                        break;
                    }
                }
            }
            else {
                char = props.char;
                // Блок проверки спец символов
                switch (char) {
                    case '\n': {
                        char = '↵';
                        break;
                    }
                    case '_': {
                        char = '_';
                        break;
                    }
                    case '': {
                        // char = '↰';
                        char = '^';
                        break;
                    }
                    case 'left': {
                        char = '←';
                        break;
                    }
                    case 'top': {
                        char = '↑';
                        break;
                    }
                    case 'right': {
                        char = '→';
                        break;
                    }
                    case 'bottom': {
                        char = '↓';
                        break;
                    }
                    default:
                        char = actionModifier[modifier.value](char);
                }
                // Изменение цвета кнопок с буквами
                const regexp = /[A-Za-zА-ЯЁа-яё]/;
                if (char.search(regexp) !== -1) {
                    buttonRef.value?.classList.add('button--symbol');
                }
            }
            return char;
        });
        const clickButton = (ev) => {
            const char = props.char;
            const firstChar = char[0];
            const lastChar = char[char.length - 1];
            const actionType = char.slice(1, char.length - 1);
            if (firstChar === '{' && lastChar === '}') {
                store.dispatch('setBeforeLayout', currentLayout.value);
                store.dispatch('setCurrentLayout', actionType);
            }
            else if (firstChar === '[' && lastChar === ']') {
                if (modifier.value === 'upper' && actionType === 'upper') {
                    store.dispatch('setModifier', 'none');
                }
                else {
                    store.dispatch('setModifier', actionType);
                }
            }
            else if (firstChar === '<' && lastChar === '>') {
                if (actionType === 'back') {
                    store.dispatch('setCurrentLayout', beforeLayout.value);
                    store.dispatch('setBeforeLayout', '');
                }
                else if (actionType === 'backspace') {
                    store.dispatch('backspace');
                }
            }
            else if (['left', 'top', 'right', 'bottom'].includes(char)) {
                let newPosition = 0;
                switch (char) {
                    case Nav.LEFT: {
                        newPosition = classes_caretPosition.toLeft(caretPosition.value, text.value);
                        break;
                    }
                    case Nav.RIGHT: {
                        newPosition = classes_caretPosition.toRight(caretPosition.value, text.value);
                        break;
                    }
                    case Nav.TOP: {
                        newPosition = classes_caretPosition.toTop(caretPosition.value, text.value);
                        break;
                    }
                    case Nav.BOTTOM: {
                        newPosition = classes_caretPosition.toBottom(caretPosition.value, text.value);
                        break;
                    }
                }
                store.dispatch('setCaretPosition', newPosition);
            }
            else {
                let textContent = ev.target.textContent;
                // Блок проверки спец символов
                if (['\n', '_', ''].includes(char)) {
                    textContent = char;
                }
                // Вернуть заглавные к строчным буквам
                if (store.state.keyboardStore.modifier !== 'upper') {
                    store.dispatch('setModifier', 'upper');
                }
                if (textContent) {
                    store.dispatch('inputText', textContent);
                }
            }
        };
        return {
            buttonRef,
            checkButton,
            clickButton,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/ButtonComponent.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/ButtonComponent.vue




;
const ButtonComponent_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ButtonComponentvue_type_script_lang_ts, [['render',ButtonComponentvue_type_template_id_4e60cb34_ts_true_render]])

/* harmony default export */ var ButtonComponent = (ButtonComponent_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/KeyboardComponent.vue?vue&type=script&lang=ts




/* harmony default export */ var KeyboardComponentvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'KeyboardComponent',
    components: {
        ButtonComponent: ButtonComponent,
    },
    emits: ['change'],
    setup(props, { emit }) {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const keyboardRef = (0,reactivity_esm_bundler/* ref */.iH)('');
        const currentLayout = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.state.keyboardStore.currentLayout);
        const layout = (0,runtime_core_esm_bundler/* computed */.Fl)(() => keyLayouts[currentLayout.value]);
        const isHiddenKeyboard = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readIsHiddenKeyboard);
        (0,runtime_core_esm_bundler/* watch */.YP)(currentLayout, async () => {
            await (0,runtime_core_esm_bundler/* nextTick */.Y3)();
            emit('change', keyboardRef.value);
        }, { immediate: true });
        return {
            layout,
            keyboardRef,
            isHiddenKeyboard,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/KeyboardComponent.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/KeyboardComponent.vue




;
const KeyboardComponent_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(KeyboardComponentvue_type_script_lang_ts, [['render',KeyboardComponentvue_type_template_id_13197e22_ts_true_render]])

/* harmony default export */ var KeyboardComponent = (KeyboardComponent_exports_);
;// CONCATENATED MODULE: ./src/use/useFullscreen.ts




/* harmony default export */ function useFullscreen() {
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const { scrollElement } = useScroll();
    const fullscreenButton = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const fullscreenElement = (0,runtime_core_esm_bundler/* computed */.Fl)(() => {
        const [el] = document.getElementsByClassName(FULLSCREEN_ELEMENT_CLASSNAME);
        return el;
    });
    const isFullscreen = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readIsFullscreen);
    /**
     * Выйти из полноэкранного режима.
     */
    const exitFullscreen = () => {
        // console.info('[exitFullscreen]')
        const fsDoc = document;
        const fsElement = fsDoc.fullscreenElement ||
            fsDoc.webkitFullscreenElement ||
            fsDoc.msFullscreenElement ||
            fsDoc.mozFullScreenElement;
        if (fsElement) {
            let exitFS;
            if (fsDoc.exitFullscreen) {
                exitFS = fsDoc.exitFullscreen();
            }
            else if (fsDoc.webkitCancelFullScreen) {
                exitFS = fsDoc.webkitCancelFullScreen();
            }
            else if (fsDoc.msExitFullscreen) {
                exitFS = fsDoc.msExitFullscreen();
            }
            else if (fsDoc.mozCancelFullScreen) {
                exitFS = fsDoc.mozCancelFullScreen();
            }
            else {
                alert('Выход из полноэкранного режима не работает, для выхода нажмите Esc.');
            }
            if (exitFS) {
                exitFS
                    .then(() => {
                    console.info('Document Exited from Full screen mode');
                })
                    .catch((err) => {
                    console.warn(err);
                });
            }
        }
    };
    /**
     * Переключение полноэкранного режима.
     */
    const toggleFullscreen = () => {
        if (!isFullscreen.value) {
            if (fullscreenElement.value.requestFullscreen) {
                fullscreenElement.value.requestFullscreen();
            }
            else if (fullscreenElement.value.webkitRequestFullScreen) {
                fullscreenElement.value.webkitRequestFullScreen();
            }
            else if (fullscreenElement.value.msRequestFullscreen) {
                fullscreenElement.value.msRequestFullscreen();
            }
            else if (fullscreenElement.value.mozRequestFullScreen) {
                fullscreenElement.value.mozRequestFullScreen();
            }
        }
        else {
            exitFullscreen();
        }
    };
    /**
     * Переключение состояния при изменении полноэкранного режима.
     */
    const fullscreenEventHandler = () => {
        let fsElement;
        const fsDoc = document;
        if (fsDoc.fullscreenElement !== undefined) {
            fsElement = fsDoc.fullscreenElement;
        }
        else if (fsDoc.webkitFullscreenElement !== undefined) {
            fsElement = fsDoc.webkitFullscreenElement;
        }
        store.commit('toggleIsFullscreen', fsElement !== null);
    };
    /**
     * Переключить полноэкранный режим.
     */
    const onToggleFullscreen = async () => {
        isFullscreen.value && store.commit('toggleHiddenKeyboard', false);
        toggleFullscreen();
        await scrollElement();
    };
    return {
        fullscreenElement,
        fullscreenButton,
        isFullscreen,
        fullscreenEventHandler,
        onToggleFullscreen,
    };
}

;// CONCATENATED MODULE: ./src/use/useIterator.ts

function useIterator() {
    const delay = 1500;
    const timerId = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const running = (0,reactivity_esm_bundler/* ref */.iH)();
    const keyboard = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const rows = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const lenArray = (0,reactivity_esm_bundler/* ref */.iH)(0);
    const row = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const button = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const removeClassFromElements = (node) => {
        // console.info('[removeClassFromElements]')
        const elements = node.querySelectorAll('button');
        elements.forEach((element) => {
            element.classList.remove('button--selected');
        });
    };
    const rowsIterator = () => {
        let cursor = 0;
        // console.info('[rowsIterator]', rows.value)
        return window.setTimeout(function tick() {
            removeClassFromElements(rows.value[cursor === 0 ? lenArray.value - 1 : cursor - 1]);
            const buttons = rows.value[cursor].querySelectorAll('button');
            row.value = cursor;
            buttons.forEach((button) => {
                button.classList.add('button--selected');
            });
            cursor = cursor < lenArray.value - 1 ? ++cursor : 0;
            timerId.value = window.setTimeout(tick, delay);
        }, 0);
    };
    const colsIterator = () => {
        let cursor = 0;
        // console.info('[colsIterator]', rows.value)
        const buttons = rows.value[row.value].querySelectorAll('button');
        const lenButtonsArray = buttons.length - 1;
        return window.setTimeout(function tick() {
            buttons[cursor === 0 ? lenButtonsArray : cursor - 1].classList.remove('button--selected');
            buttons[cursor].classList.add('button--selected');
            button.value = buttons[cursor];
            cursor = cursor < lenButtonsArray ? ++cursor : 0;
            timerId.value = window.setTimeout(tick, delay);
        }, 0);
    };
    const getKeyboard = (keyboardRef) => {
        // console.info('[getKeyboard]');
        keyboard.value = keyboardRef;
        rows.value = keyboardRef.querySelectorAll('.row');
        lenArray.value = rows.value?.length || 0;
    };
    return {
        timerId,
        running,
        keyboard,
        button,
        removeClassFromElements,
        rowsIterator,
        colsIterator,
        getKeyboard,
    };
}

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/MainHeader.vue?vue&type=template&id=7ba20ae4&ts=true

const MainHeadervue_type_template_id_7ba20ae4_ts_true_hoisted_1 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "logo" }, "Simple Keyboard", -1 /* HOISTED */);
function MainHeadervue_type_template_id_7ba20ae4_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_el_space = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-space");
    const _component_el_tag = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-tag");
    const _component_el_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-icon");
    const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-button");
    const _component_el_popconfirm = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-popconfirm");
    const _component_el_upload = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-upload");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("header", null, [
        MainHeadervue_type_template_id_7ba20ae4_ts_true_hoisted_1,
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_space),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_tag, {
            round: "",
            style: { "font-size": "16px" }
        }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.charsLength), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_popconfirm, {
            title: "Удаляем текст?",
            "confirm-button-text": "Да",
            "cancel-button-text": "Нет",
            teleported: false,
            onConfirm: (0,runtime_dom_esm_bundler/* withModifiers */.iM)(_ctx.onRemoveText, ["stop"]),
            onCancel: _cache[1] || (_cache[1] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(() => { }, ["stop"]))
        }, {
            reference: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_button, {
                    class: "header__button",
                    circle: "",
                    onClick: _cache[0] || (_cache[0] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(() => { }, ["stop"]))
                }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_icon, {
                            size: 14,
                            style: { "vertical-align": "middle" }
                        }, {
                            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                                ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.LL)(_ctx.DocumentDelete)))
                            ]),
                            _: 1 /* STABLE */
                        })
                    ]),
                    _: 1 /* STABLE */
                })
            ]),
            _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onConfirm"]),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_upload, {
            "file-list": _ctx.uploadFiles,
            "onUpdate:file-list": _cache[2] || (_cache[2] = ($event) => ((_ctx.uploadFiles) = $event)),
            class: "header__upload",
            action: "#",
            accept: ".txt",
            "auto-upload": false,
            "show-file-list": false,
            limit: 1,
            "on-change": _ctx.onUploadText,
            "on-remove": _ctx.onUploadText,
            onClick: _cache[3] || (_cache[3] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(() => { }, ["stop"]))
        }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_button, {
                    class: "header__button",
                    circle: ""
                }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_icon, {
                            style: { "vertical-align": "middle" },
                            size: 14
                        }, {
                            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                                ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.LL)(_ctx.Download)))
                            ]),
                            _: 1 /* STABLE */
                        })
                    ]),
                    _: 1 /* STABLE */
                })
            ]),
            _: 1 /* STABLE */
        }, 8 /* PROPS */, ["file-list", "on-change", "on-remove"]),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_button, {
            class: "header__button",
            circle: "",
            onClick: (0,runtime_dom_esm_bundler/* withModifiers */.iM)(_ctx.onExportText, ["stop", "prevent"])
        }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_icon, {
                    style: { "vertical-align": "middle" },
                    size: 14
                }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                        ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.LL)(_ctx.Upload)))
                    ]),
                    _: 1 /* STABLE */
                })
            ]),
            _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"]),
        (_ctx.isFullscreen)
            ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_el_button, {
                key: 0,
                class: "header__button",
                circle: "",
                onClick: (0,runtime_dom_esm_bundler/* withModifiers */.iM)(_ctx.onToggleShowKeyboard, ["stop", "prevent"])
            }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_icon, {
                        style: { "vertical-align": "middle" },
                        size: 14
                    }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                            ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.LL)(_ctx.isHiddenKeyboard ? _ctx.ArrowUp : _ctx.ArrowDown)))
                        ]),
                        _: 1 /* STABLE */
                    })
                ]),
                _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onClick"]))
            : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("v-if", true),
        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_button, {
            class: "header__button",
            ref: "fullscreenButton",
            circle: "",
            onClick: (0,runtime_dom_esm_bundler/* withModifiers */.iM)(_ctx.onToggleFullscreen, ["stop", "prevent"])
        }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_icon, {
                    style: { "vertical-align": "middle" },
                    size: 14
                }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                        ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.LL)(_ctx.isFullscreen ? _ctx.Close : _ctx.FullScreen)))
                    ]),
                    _: 1 /* STABLE */
                })
            ]),
            _: 1 /* STABLE */
        }, 8 /* PROPS */, ["onClick"])
    ]));
}

;// CONCATENATED MODULE: ./src/components/MainHeader.vue?vue&type=template&id=7ba20ae4&ts=true

// EXTERNAL MODULE: ./node_modules/@element-plus/icons-vue/dist/index.js
var dist = __webpack_require__(781);
// EXTERNAL MODULE: ./node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__(162);
;// CONCATENATED MODULE: ./src/use/useTextExport.ts




/* harmony default export */ var useTextExport = (() => {
    const store = (0,vuex_esm_bundler/* useStore */.oR)();
    const { setCaret } = useCaret();
    const uploadFiles = (0,reactivity_esm_bundler/* ref */.iH)([]);
    /**
     * Сохранить текст в файл.
     */
    const onExportText = () => {
        const text = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readText);
        // Для названия файла берется первая строка текста
        const filename = text.value.split('\n')[0];
        const blob = new Blob([text.value], { type: 'text/plain;charset=utf-8' });
        (0,FileSaver_min.saveAs)(blob, `${filename}.txt`);
    };
    /**
     * Загрузить текст из файла.
     *
     * @param file
     */
    const onUploadText = async (file) => {
        const text = (await file.raw?.text()) || '';
        await store.dispatch('uploadText', text);
        uploadFiles.value = [];
        await setCaret(0);
    };
    /**
     * Очистить текстовое поле.
     */
    const onRemoveText = async () => {
        await store.dispatch('uploadText', '');
        await setCaret(0);
    };
    return {
        onExportText,
        uploadFiles,
        onUploadText,
        onRemoveText,
    };
});

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/MainHeader.vue?vue&type=script&lang=ts






/* harmony default export */ var MainHeadervue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'MainHeader',
    setup() {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const { fullscreenElement, fullscreenButton, isFullscreen, onToggleFullscreen } = useFullscreen();
        const { scrollElement } = useScroll();
        const { onExportText, onUploadText, uploadFiles, onRemoveText } = useTextExport();
        const isHiddenKeyboard = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readIsHiddenKeyboard);
        const charsLength = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.getters.readCharsLength);
        /**
         * Переключатель отображения клавиатуры.
         */
        const onToggleShowKeyboard = async () => {
            store.commit('toggleHiddenKeyboard');
            if (fullscreenElement.value && !isHiddenKeyboard.value) {
                // Если fullscreen и клавиатура отображается - прокрутить
                await scrollElement();
            }
        };
        return {
            charsLength,
            uploadFiles,
            onExportText,
            onUploadText,
            onRemoveText,
            isFullscreen,
            isHiddenKeyboard,
            onToggleShowKeyboard,
            onToggleFullscreen,
            fullscreenButton,
            ArrowDown: dist/* ArrowDown */.K5e,
            ArrowUp: dist/* ArrowUp */.a2Z,
            Close: dist/* Close */.x8P,
            FullScreen: dist/* FullScreen */.ITT,
            Download: dist/* Download */.UWx,
            Upload: dist/* Upload */.gqx,
            DocumentDelete: dist/* DocumentDelete */.jY0,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/MainHeader.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/MainHeader.vue




;
const MainHeader_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(MainHeadervue_type_script_lang_ts, [['render',MainHeadervue_type_template_id_7ba20ae4_ts_true_render]])

/* harmony default export */ var MainHeader = (MainHeader_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/App.vue?vue&type=script&lang=ts







/* harmony default export */ var Appvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'App',
    components: {
        MainHeader: MainHeader,
        TextInput: TextInput,
        KeyboardComponent: KeyboardComponent,
    },
    setup() {
        const { fullscreenEventHandler } = useFullscreen();
        const { timerId, running, keyboard, button, removeClassFromElements, rowsIterator, colsIterator, getKeyboard } = useIterator();
        (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
            document.addEventListener('fullscreenchange', fullscreenEventHandler);
            document.addEventListener('webkitfullscreenchange', fullscreenEventHandler);
            document.addEventListener('click', () => {
                if (running.value === 'row') {
                    clearInterval(timerId.value);
                    removeClassFromElements(keyboard.value);
                    timerId.value = colsIterator();
                    running.value = 'col';
                }
                else if (running.value === 'col') {
                    clearInterval(timerId.value);
                    removeClassFromElements(keyboard.value);
                    button.value.click();
                    timerId.value = rowsIterator();
                    running.value = 'row';
                }
                else {
                    timerId.value = rowsIterator();
                    running.value = 'row';
                }
            });
        });
        return {
            getKeyboard,
            FULLSCREEN_ELEMENT_CLASSNAME: FULLSCREEN_ELEMENT_CLASSNAME,
        };
    },
}));

;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/App.vue




;
const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_ts, [['render',render]])

/* harmony default export */ var App = (App_exports_);
;// CONCATENATED MODULE: ./src/store/modules/keyboardStore.ts


const state = () => {
    return {
        text: '',
        currentLayout: 'rus',
        // modifier: 'none',
        modifier: 'upper',
        beforeLayout: '',
        caretPosition: 0,
        isFullscreen: false,
        isHiddenKeyboard: false,
    };
};
const mutations = {
    inputText(state, text) {
        state.text = text;
    },
    setCurrentLayout(state, currentLayout) {
        state.currentLayout = currentLayout;
    },
    setModifier(state, modifier) {
        state.modifier = modifier;
    },
    setBeforeLayout(state, beforeLayout) {
        state.beforeLayout = beforeLayout;
    },
    setCaretPosition(state, payload) {
        state.caretPosition = payload;
    },
    toggleIsFullscreen(state, payload) {
        state.isFullscreen = payload;
    },
    toggleHiddenKeyboard(state, flag) {
        if (typeof flag === 'undefined') {
            state.isHiddenKeyboard = !state.isHiddenKeyboard;
        }
        else {
            state.isHiddenKeyboard = flag;
        }
    },
};
const actions = {
    inputText({ commit, getters }, char) {
        const text = getters.readText;
        const caretPosition = getters.readCaretPosition;
        let result = '';
        if (!caretPosition) {
            result = char + text;
        }
        else if (caretPosition === text.length) {
            result = text + char;
        }
        else {
            result = text.slice(0, caretPosition) + char + text.slice(caretPosition);
        }
        commit('inputText', result);
        commit('setCaretPosition', caretPosition + char.length);
    },
    backspace({ commit, getters }) {
        const text = getters.readText;
        const caretPosition = getters.readCaretPosition;
        const char = classes_caretPosition.getLastChar(text.slice(0, caretPosition));
        const result = text.slice(0, caretPosition - char.length) + text.slice(caretPosition);
        commit('inputText', result);
        commit('setCaretPosition', caretPosition - char.length);
    },
    uploadText({ commit }, text) {
        commit('inputText', text);
        commit('setCaretPosition', 0);
    },
    setCurrentLayout({ commit }, currentLayout) {
        commit('setCurrentLayout', currentLayout);
    },
    setModifier({ commit }, modifier) {
        commit('setModifier', modifier);
    },
    setBeforeLayout({ commit }, beforeLayout) {
        commit('setBeforeLayout', beforeLayout);
    },
    setCaretPosition({ commit }, payload) {
        commit('setCaretPosition', payload);
    },
};
const getters = {
    readText(state) {
        return state.text;
    },
    readCharsLength(state) {
        return voca_default().countGraphemes(state.text);
    },
    readCaretPosition(state) {
        return state.caretPosition;
    },
    readIsFullscreen(state) {
        return state.isFullscreen;
    },
    readIsHiddenKeyboard(state) {
        return state.isHiddenKeyboard;
    },
};
/* harmony default export */ var keyboardStore = ({
    namespaced: false,
    state,
    getters,
    actions,
    mutations,
});

;// CONCATENATED MODULE: ./src/store/index.ts


const debug = "production" !== 'production';
const store = (0,vuex_esm_bundler/* createStore */.MT)({
    modules: {
        keyboardStore: keyboardStore,
    },
    strict: debug,
});

// EXTERNAL MODULE: ./src/assets/scss/main.scss
var main = __webpack_require__(342);
;// CONCATENATED MODULE: ./src/index.ts






(0,runtime_dom_esm_bundler/* createApp */.ri)(App).provide('store', store).use(defaults/* default */.Z).mount('#app');


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "index." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "c029f31ede98725a43d8"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "simple-keyboard:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesimple_keyboard"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksimple_keyboard"] = self["webpackChunksimple_keyboard"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(449); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;