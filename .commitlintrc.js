
/**
 * @see https://commitlint.js.org/#/reference-rules?id=available-rules
 */
module.exports = {
    extends: ['@commitlint/config-lerna-scopes'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'config'],
        ],
        'type-case': [2, 'always', 'lowercase'],
        'type-empty': [2, 'never'],
        'type-max-length': [0],
        'type-min-length': [0],

        'scope-enum': [0],
        'scope-case': [2, 'always', 'lowercase'],
        'scope-empty': [0],
        'scope-max-length': [0],
        'scope-min-length': [0],

        'subject-case': [2, 'always', 'lowercase'],
        'subject-empty': [2, 'never'],
        'subject-max-length': [0],
        'subject-min-length': [0],

        'header-case': [2, 'always', 'lowercase'],
        'header-full-stop': [2, 'never', '.'],
        'header-max-length': [2, 'always', 70],
        'header-min-length': [0],

        'body-case': [2, 'always', 'lowercase'],
        'body-full-stop': [2, 'never', '.'],
        'body-leading-blank': [2, 'always'],
        'body-empty': [0],
        'body-max-length': [0],
        'body-min-length': [0],
        'body-max-line-length': [0],

        'footer-leading-blank': [2, 'always'],
        'footer-empty': [0],
        'footer-max-length': [0],
        'footer-min-length': [0],
        'footer-max-line-length': [0],
        
        'references-empty': [0],
        'signed-off-by': [0],
    },
};
