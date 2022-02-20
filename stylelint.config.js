module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-declaration'],
      },
    ],
    'selector-class-pattern': [
      '^([a-z][a-z0-9]*)((_|__|-|--)[a-z0-9]+)*$',
      {
        message: 'Expected class selector to be _, __, - or --',
      },
    ],
  },
};
