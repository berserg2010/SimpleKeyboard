/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3342:
/***/ (function(module, __unused_webpack___webpack_exports__, __webpack_require__) {

// extracted by mini-css-extract-plugin

    if(true) {
      // 1645393314881
      var cssReload = __webpack_require__(4783)(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ 2427:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(9963);
// EXTERNAL MODULE: ./node_modules/element-plus/es/index.js + 177 modules
var es = __webpack_require__(1173);
// EXTERNAL MODULE: ./node_modules/element-plus/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__(3074);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(6252);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/App.vue?vue&type=template&id=1e146a4a&ts=true

const _hoisted_1 = {
    class: "wrapper",
    ref: "fullscreenElement"
};
const _hoisted_2 = /*#__PURE__*/ (0,runtime_core_esm_bundler/* createElementVNode */._)("span", { class: "logo" }, "Simple Keyboard", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_el_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-icon");
    const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.up)("el-button");
    const _component_TextInput = (0,runtime_core_esm_bundler/* resolveComponent */.up)("TextInput");
    const _component_KeyboardComponent = (0,runtime_core_esm_bundler/* resolveComponent */.up)("KeyboardComponent");
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_1, [
        (0,runtime_core_esm_bundler/* createElementVNode */._)("header", null, [
            _hoisted_2,
            (_ctx.isFullscreen)
                ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_el_button, {
                    key: 0,
                    ref: "fullscreenButton",
                    circle: "",
                    onClick: (0,runtime_dom_esm_bundler/* withModifiers */.iM)(_ctx.hideKeyboardHandler, ["stop", "prevent"])
                }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                        (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_icon, {
                            size: 14,
                            style: { "vertical-align": "middle" }
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
                ref: "fullscreenButton",
                circle: "",
                onClick: (0,runtime_dom_esm_bundler/* withModifiers */.iM)(_ctx.fullscreenHandler, ["stop", "prevent"])
            }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                    (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_el_icon, {
                        size: 14,
                        style: { "vertical-align": "middle" }
                    }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [
                            ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)((0,runtime_core_esm_bundler/* resolveDynamicComponent */.LL)(_ctx.isFullscreen ? _ctx.Close : _ctx.FullScreen)))
                        ]),
                        _: 1 /* STABLE */
                    })
                ]),
                _: 1 /* STABLE */
            }, 8 /* PROPS */, ["onClick"])
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */._)("main", null, [
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_TextInput, { isFullscreen: _ctx.isFullscreen }, null, 8 /* PROPS */, ["isFullscreen"]),
            (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_KeyboardComponent, {
                getKeyboard: _ctx.getKeyboard,
                isHiddenKeyboard: _ctx.isHiddenKeyboard
            }, null, 8 /* PROPS */, ["getKeyboard", "isHiddenKeyboard"])
        ])
    ], 512 /* NEED_PATCH */));
}

;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=1e146a4a&ts=true

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(2262);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/TextInput.vue?vue&type=template&id=8ed8c798&ts=true

const TextInputvue_type_template_id_8ed8c798_ts_true_hoisted_1 = { class: "text_input" };
const TextInputvue_type_template_id_8ed8c798_ts_true_hoisted_2 = ["rows"];
function TextInputvue_type_template_id_8ed8c798_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", TextInputvue_type_template_id_8ed8c798_ts_true_hoisted_1, [
        (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createElementVNode */._)("textarea", {
            type: "textarea",
            placeholder: "Поле для ввода",
            rows: _ctx.maxRows,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ((_ctx.input) = $event))
        }, null, 8 /* PROPS */, TextInputvue_type_template_id_8ed8c798_ts_true_hoisted_2), [
            [runtime_dom_esm_bundler/* vModelText */.nr, _ctx.input]
        ])
    ]));
}

;// CONCATENATED MODULE: ./src/components/TextInput.vue?vue&type=template&id=8ed8c798&ts=true

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm-bundler.js + 3 modules
var vuex_esm_bundler = __webpack_require__(4709);
;// CONCATENATED MODULE: ./src/use/useScroll.ts
function useScroll() {
    const scrollToBottom = (el) => {
        el?.scrollBy(0, el.scrollHeight);
    };
    return {
        scrollToBottom,
    };
}

;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/TextInput.vue?vue&type=script&lang=ts



/* harmony default export */ var TextInputvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'TextInput',
    props: {
        isFullscreen: {
            type: Boolean,
            default: false,
        },
    },
    setup: function (props) {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const { scrollToBottom } = useScroll();
        const { isFullscreen } = (0,reactivity_esm_bundler/* toRefs */.BK)(props);
        const input = (0,runtime_core_esm_bundler/* computed */.Fl)({
            get() {
                return store.state.keyboardStore.input;
            },
            set(newValue) {
                const length = store.state.keyboardStore.input.length;
                store.dispatch('inputText', newValue.slice(length));
            },
        });
        const maxRows = (0,runtime_core_esm_bundler/* computed */.Fl)(() => {
            return isFullscreen.value ? 4 : 3;
        });
        (0,runtime_core_esm_bundler/* onUpdated */.ic)(() => {
            const textarea = document.getElementsByTagName('textarea')[0];
            (0,runtime_core_esm_bundler/* nextTick */.Y3)(() => {
                scrollToBottom(textarea);
            });
        });
        return {
            input,
            maxRows,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/TextInput.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/components/TextInput.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TextInputvue_type_script_lang_ts, [['render',TextInputvue_type_template_id_8ed8c798_ts_true_render]])

/* harmony default export */ var TextInput = (__exports__);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/KeyboardComponent.vue?vue&type=template&id=26ef0c07&ts=true

const KeyboardComponentvue_type_template_id_26ef0c07_ts_true_hoisted_1 = {
    ref: "keyboardRef",
    class: "keyboard"
};
function KeyboardComponentvue_type_template_id_26ef0c07_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ButtonComponent = (0,runtime_core_esm_bundler/* resolveComponent */.up)("ButtonComponent");
    return (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("section", KeyboardComponentvue_type_template_id_26ef0c07_ts_true_hoisted_1, [
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
    ], 512 /* NEED_PATCH */)), [
        [runtime_dom_esm_bundler/* vShow */.F8, !_ctx.isHiddenKeyboard]
    ]);
}

;// CONCATENATED MODULE: ./src/components/KeyboardComponent.vue?vue&type=template&id=26ef0c07&ts=true

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
    ['<backspace>', '[upper]', '{eng}', '{num}', '{emoji}', '{phrases}', '\n', ''],
];
const eng = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', ''],
    ['j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', ''],
    ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''],
    ...mixNum,
    ...mixSymbols,
    ['<backspace>', '[upper]', '{rus}', '{num}', '{emoji}', '{phrases}', '\n', ''],
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
const layouts = {
    eng,
    rus,
    num,
    emoji,
    phrases,
};
const actionModifier = {
    none: (value) => value,
    upper: (value) => value.toUpperCase(),
};
/* harmony default export */ var keyLayouts = (layouts);

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(3577);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/ButtonComponent.vue?vue&type=template&id=ddc7d720&ts=true

function ButtonComponentvue_type_template_id_ddc7d720_ts_true_render(_ctx, _cache, $props, $setup, $data, $options) {
    return ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("button", {
        ref: "buttonRef",
        class: "button",
        onClick: _cache[0] || (_cache[0] = (0,runtime_dom_esm_bundler/* withModifiers */.iM)(
        //@ts-ignore
        (...args) => (_ctx.clickButton && _ctx.clickButton(...args)), ["stop", "prevent"]))
    }, (0,shared_esm_bundler/* toDisplayString */.zw)(_ctx.checkButton), 513 /* TEXT, NEED_PATCH */));
}

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
        const checkButton = (0,runtime_core_esm_bundler/* computed */.Fl)(() => {
            let char = '';
            const firstChar = props.char[0];
            const lastChar = props.char[props.char.length - 1];
            buttonRef.value?.classList.remove('button--symbol');
            if ((firstChar === '{' && lastChar === '}') ||
                (firstChar === '[' && lastChar === ']') ||
                (firstChar === '<' && lastChar === '>')) {
                char = props.char.slice(1, props.char.length - 1);
                if (char === 'upper') {
                    char = modifier.value === 'none' ? '⇧' : '⇩';
                }
                else if (char === 'backspace') {
                    // char = '⇤';
                    char = 'Шаг назад';
                }
                else if (char === 'back') {
                    char = '⇦';
                }
                else if (char === 'emoji') {
                    char = '😉';
                }
                else if (char === 'phrases') {
                    char = 'Фразы';
                }
            }
            else {
                char = props.char;
                // Блок проверки спец символов
                switch (char) {
                    case '\n':
                        char = '↵';
                        break;
                    case '_':
                        char = '_';
                        break;
                    case '':
                        // char = '↰';
                        char = '^';
                        break;
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
                    store.commit('textBackspace');
                }
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
                store.dispatch('inputText', textContent);
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
const ButtonComponent_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(ButtonComponentvue_type_script_lang_ts, [['render',ButtonComponentvue_type_template_id_ddc7d720_ts_true_render]])

/* harmony default export */ var ButtonComponent = (ButtonComponent_exports_);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/components/KeyboardComponent.vue?vue&type=script&lang=ts




/* harmony default export */ var KeyboardComponentvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'KeyboardComponent',
    components: {
        ButtonComponent: ButtonComponent,
    },
    props: {
        getKeyboard: {
            type: Function,
            required: true,
        },
        isHiddenKeyboard: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const store = (0,vuex_esm_bundler/* useStore */.oR)();
        const currentLayout = (0,runtime_core_esm_bundler/* computed */.Fl)(() => store.state.keyboardStore.currentLayout);
        const layout = (0,runtime_core_esm_bundler/* computed */.Fl)(() => keyLayouts[currentLayout.value]);
        const keyboardRef = (0,reactivity_esm_bundler/* ref */.iH)('');
        (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
            // console.info('[onMounted]')
            props.getKeyboard(keyboardRef.value);
        });
        (0,runtime_core_esm_bundler/* onUpdated */.ic)(() => {
            // console.info('[onUpdated]')
            props.getKeyboard(keyboardRef.value);
        });
        return {
            layout,
            keyboardRef,
        };
    },
}));

;// CONCATENATED MODULE: ./src/components/KeyboardComponent.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./src/components/KeyboardComponent.vue




;
const KeyboardComponent_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(KeyboardComponentvue_type_script_lang_ts, [['render',KeyboardComponentvue_type_template_id_26ef0c07_ts_true_render]])

/* harmony default export */ var KeyboardComponent = (KeyboardComponent_exports_);
;// CONCATENATED MODULE: ./src/use/useIterator.ts

function useIterator() {
    const delay = 1500;
    const timerId = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const running = (0,reactivity_esm_bundler/* ref */.iH)('');
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

;// CONCATENATED MODULE: ./src/use/useFullscreen.ts

/* harmony default export */ function useFullscreen() {
    const fullscreenElement = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const fullscreenButton = (0,reactivity_esm_bundler/* ref */.iH)(null);
    const isFullscreen = (0,reactivity_esm_bundler/* ref */.iH)(false);
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
    const fullscreenHandler = () => {
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
    const fullscreenEventHandler = () => {
        let fsElement;
        const fsDoc = document;
        if (fsDoc.fullscreenElement !== undefined) {
            fsElement = fsDoc.fullscreenElement;
        }
        else if (fsDoc.webkitFullscreenElement !== undefined) {
            fsElement = fsDoc.webkitFullscreenElement;
        }
        isFullscreen.value = fsElement !== null;
    };
    return {
        fullscreenElement,
        fullscreenButton,
        isFullscreen,
        fullscreenHandler,
        fullscreenEventHandler,
    };
}

// EXTERNAL MODULE: ./node_modules/@element-plus/icons-vue/dist/es/arrow-down.mjs
var arrow_down = __webpack_require__(8647);
// EXTERNAL MODULE: ./node_modules/@element-plus/icons-vue/dist/es/arrow-up.mjs
var arrow_up = __webpack_require__(3928);
// EXTERNAL MODULE: ./node_modules/@element-plus/icons-vue/dist/es/close.mjs
var es_close = __webpack_require__(4915);
// EXTERNAL MODULE: ./node_modules/@element-plus/icons-vue/dist/es/full-screen.mjs
var full_screen = __webpack_require__(5876);
;// CONCATENATED MODULE: ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[8].use[0]!./src/App.vue?vue&type=script&lang=ts







/* harmony default export */ var Appvue_type_script_lang_ts = ((0,runtime_core_esm_bundler/* defineComponent */.aZ)({
    name: 'App',
    components: {
        TextInput: TextInput,
        KeyboardComponent: KeyboardComponent,
    },
    setup() {
        const { timerId, running, keyboard, button, removeClassFromElements, rowsIterator, colsIterator, getKeyboard } = useIterator();
        const { scrollToBottom } = useScroll();
        const { fullscreenElement, fullscreenButton, isFullscreen, fullscreenHandler, fullscreenEventHandler } = useFullscreen();
        const isHiddenKeyboard = (0,reactivity_esm_bundler/* ref */.iH)(false);
        const hideKeyboardHandler = () => {
            isHiddenKeyboard.value = !isHiddenKeyboard.value;
            if (fullscreenElement.value) {
                const fsElementGet = fullscreenElement.value.getElementsByTagName('textarea')[0];
                if (isHiddenKeyboard.value) {
                    fsElementGet.style.height = 'calc(100vh - 60px - 32px)';
                }
                else {
                    fsElementGet.style.height = 'auto';
                    scrollToBottom(fsElementGet);
                }
            }
        };
        (0,runtime_core_esm_bundler/* onMounted */.bv)(() => {
            document.addEventListener('fullscreenchange', fullscreenEventHandler);
            document.addEventListener('webkitfullscreenchange', fullscreenEventHandler);
            document.addEventListener('click', () => {
                if (running.value === '') {
                    timerId.value = rowsIterator();
                    running.value = 'row';
                }
                else if (running.value === 'row') {
                    clearInterval(timerId.value);
                    removeClassFromElements(keyboard.value);
                    timerId.value = colsIterator();
                    running.value = 'col';
                }
                else {
                    clearInterval(timerId.value);
                    removeClassFromElements(keyboard.value);
                    button.value.click();
                    timerId.value = rowsIterator();
                    running.value = 'row';
                }
            });
        });
        return {
            fullscreenElement,
            fullscreenButton,
            isFullscreen,
            fullscreenHandler,
            getKeyboard,
            isHiddenKeyboard,
            hideKeyboardHandler,
            ArrowDown: arrow_down/* default */.Z,
            ArrowUp: arrow_up/* default */.Z,
            Close: es_close/* default */.Z,
            FullScreen: full_screen/* default */.Z,
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
        input: '',
        currentLayout: 'rus',
        // modifier: 'none',
        modifier: 'upper',
        beforeLayout: '',
    };
};
const mutations = {
    inputText(state, input) {
        state.input = state.input + input;
    },
    textBackspace(state) {
        state.input = state.input.slice(0, state.input.length - 1);
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
};
const actions = {
    inputText({ commit }, input) {
        commit('inputText', input);
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
};
const getters = {};
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
var main = __webpack_require__(3342);
;// CONCATENATED MODULE: ./src/index.ts






(0,runtime_dom_esm_bundler/* createApp */.ri)(App).provide('store', store).use(es/* default */.ZP).mount('#app');


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
/******/ 			loaded: false,
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
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 		__webpack_require__.h = function() { return "18b8072d2ca1476ae1ac"; }
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 		var blockingPromises;
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
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
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
/******/ 						blockingPromises = [];
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
/******/ 					throw new Error("apply() is only allowed in ready status");
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
/******/ 		function loadUpdateChunk(chunkId) {
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
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(2427); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;