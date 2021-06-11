# eslint-config-hjcostabr76

> Custom eslint configurations designed for ___typescript___ developing.

### It's good for:
- nodejs;
- React JS;

### It ___Will___ be good for (soon):
- React Native;

## Table of Contents
- [Principles](#Principles)
- [How to](#How-to)
- [Sub-packages](#Sub-packages)
- [Used Plugins](#Used-Plugins)

## Principles

1. __Type Safety__:

    Typescript is powerfull _and_ awesome! Let's make it work for us!

2. __Less is more__:

    We should write less. Less code means less places where a bug might emerge from. So whenever you can make it smaller and cleaner do It! _(As far as it doesn't overrule principle #1)_.

3. __S.O.L.I.D.__ and __Clean Code__:

    Well, you know about it. Right?

## How to

- __Installation__:
    ```
    $ npm i -D eslint-config-hjcostabr76
    ```

- __Other dependencies__:
    
    To use it you'll need [ESLint Typescript parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#typescript-eslint-parser) and, [ESLint](https://eslint.org/docs/user-guide/getting-started#installation-and-usage) packages to be installed.

- __Config file__:

    With that all set you'll only need to build your project's eslint config file. It should look something like this:

    ```js
    // .eslintrs.js

    module.exports = {
        parserOptions: {
            project: './tsconfig.json',
            tsconfigRootDir: __dirname,
        },
        extends: [
            'hjcostabr76/ts-node'
        ],

        ...
    }
    ```

## Sub-packages

You can simply import it into your lint config. If you do this you will be getting general typescript rules only. All other configs derive from it (except `spellcheck`).

```js

// .eslintrs.js

module.exports = {
    
    ...
    
    extends: 'hjcostabr76',

    ...
}
```

But what you probably want to do is to get some sub package(s). They are:

- `ts-node`: Rules for NodeJS with typescript;
- `ts-package`: Rules for writing your npm packages using typescript;
- `tsx`: React with Typescript;
- `spellcheck`: No need for description;

So your eslint config might come to look more like:

```js

// .eslintrs.js

module.exports = {
    
    ...
    
    extends: [
        'hjcostabr76/ts-node',
        'hjcostabr76/spellcheck',
    ],

    ...
}
```

> ___Soon___ there will be more sub packages for React

## Used Plugins

This set of rules was built thanks to some good plugins presented by the community:

- [Typescript](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#eslint-plugin-typescript);
- [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs#eslint-plugin-sonarjs----);
- [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn#eslint-plugin-unicorn--);
- [Import](https://github.com/benmosher/eslint-plugin-import#eslint-plugin-import);
- [Proper Arrows](https://github.com/getify/eslint-plugin-proper-arrows#eslint-plugin-proper-arrows);
- [Node](https://github.com/mysticatea/eslint-plugin-node#eslint-plugin-node);
- [Array Func](https://github.com/freaktechnik/eslint-plugin-array-func#eslint-plugin-array-func);
- [Promise](https://github.com/xjamundx/eslint-plugin-promise#eslint-plugin-promise);
- [ESLint Comments](https://mysticatea.github.io/eslint-plugin-eslint-comments/);
- [Deprecation](https://github.com/gund/eslint-plugin-deprecation#eslint-plugin-deprecation);
