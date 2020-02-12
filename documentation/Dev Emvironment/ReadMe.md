<h1> Development environment</h1>

| Author       | Info                            | Date       |
| ------------ | ------------------------------- | ---------- |
| Oberson Gaël | RIA1-Backbone / Create Document | 12.02.2020 |

<h1>Tables of contents </h1>

- [Choice of IDE](#choice-of-ide)
- [Installation IDE](#installation-ide)
- [Configuration IDE](#configuration-ide)
- [Tree structure](#tree-structure)

## Choice of IDE

Visual Studio Code is the editor we have chosen to use. It is an extensible editor developed by Microsoft. The numerous extensions available allow the use of several development technologies. It is based on the same ones as Atom and Electron.

The use of this IDE includes several advantages
- Extremely rich marketplace
- Customizable
- A lot of extension available for all kinds of languages

## Installation IDE

Visual Studio Code runs on : Windows (7,8,10), Debian, Ubuntu and Mac

[Download Link](https://code.visualstudio.com/Download)

## Configuration IDE

To install the required extensions, follow these steps:
1. Run a Powershell as Administrator
2. Copy ,paste and execute the code below
    ```powershell
    code --install-extension brapifra.phpserver
    code --install-extension CoenraadS.bracket-pair-colorizer
    code --install-extension DavidAnson.vscode-markdownlint
    code --install-extension formulahendry.auto-close-tag
    code --install-extension marmac.xslt-action
    code --install-extension mdickin.markdown-shortcuts
    code --install-extension MehediDracula.php-constructor
    code --install-extension MehediDracula.php-namespace-resolver
    code --install-extension mikeburgh.xml-format
    code --install-extension ms-vscode.cpptools
    code --install-extension njLeonZhang.markdown-image-paste
    code --install-extension PKief.material-icon-theme
    code --install-extension redhat.vscode-xml
    code --install-extension ritwickdey.live-sass
    code --install-extension ritwickdey.LiveServer
    code --install-extension shd101wyy.markdown-preview-enhanced
    code --install-extension starkwang.markdown
    code --install-extension yzane.markdown-pdf
    code --install-extension yzhang.markdown-all-in-one
    ```

## Tree structure

here is our tree structure

```
RIA1-Backbone
│   README.md
│   layout.html
│
└───assets
│   └───js
│       │   backbone.js
│       │   jquery.js
│       │   underscore.js
│       │   ...
│   
└───documentation
│   │   ...
│    
└───test
    │   file021.txt
    │   file022.txt
    │   
    └───js
    │   index.html
    │   todo.css
    │   ...
```

Folder `assets`
- In this directory are all the `js` files required for the use of the `backbone`

Folder `documentation`
- In this directory you will find all the documentation of this project.

Folder `test`
- In this directory is a test project with backbone found under the following link :  [Example backbone](https://github.com/jashkenas/backbone/) 

