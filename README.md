# TFS extension for Visual Studio Code

**Visual Studio Code Team Foundation Server integration**

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/github/release/gperouffe/vscode-tfs.svg?style=flat-square)](https://github.com/gperouffe/vscode-tfs/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/gperouffe.vscode-tfs.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=gperouffe.vscode-tfs)
[![David](https://img.shields.io/david/gperouffe/vscode-tfs.svg?style=flat-square)](https://david-dm.org/gperouffe/vscode-tfs?type=dev)
[![David](https://img.shields.io/david/dev/gperouffe/vscode-tfs.svg?style=flat-square)](https://david-dm.org/gperouffe/vscode-tfs?type=dev)

---

## Important!

> **You MUST have a Visual Studio with Team Foundation Server features to be able to use this extension.**

## Installation

1. Open up VS Code
2. Type **`F1`**
3. Type `ext` in command palette.
4. Select `Extensions: Install Extension` and hit **`ENTER`**
5. Type `tfs`
6. Select **`TFS`** extension and hit **`ENTER`**

## Configuration

You need to provide a path to the TF command line client used by the extension to perform TFS actions.
To set this path, add the following entry to Settings (**File > Preferences > Settings**):

```javascript
    "tfs.location": "<path-to-tf-command-line>"
```

If you plan to use the `tf.exe` command line provided by the Visual Studio IDE, the value to provide will be similar to `C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\Common7\\IDE\\TF.exe`.

## Features

- **Automatic Checkout (for Edit)** on saving a file.

### List of available commands

- **Add** `vscode-tfs.add`
- **Check Out for Edit** `vscode-tfs.checkout`
- **Delete** `vscode-tfs.delete`
- **Undo Pending Changes** `vscode-tfs.undo`
- **Open in Browser** `vscode-tfs.openInBrowser`

## Issues

Please report any issue or comment [here](https://github.com/gperouffe/vscode-tfs/issues).

## Contribute

To be able to contribute to TFS development, you need to be at ease with **NodeJS** language and **Git** usage.

```sh
git clone https://github.com/gperouffe/vscode-tfs.git
cd vscode-tfs
npm install
npm test
```

## About the fork

This is a fork of [ivangabriele.vscode-tfs](https://github.com/ivangabriele/vscode-tfs). The changes are:

- Configurable path to `tf.exe` binary.
- New TFS menu commands.
- Fixed checkout for edit on save.
- Improved error handling.

## Links

- [TFS extension on Visual Studio Market Place](https://marketplace.visualstudio.com/items/gperouffe.vscode-tfs)
- [TFS extension on Github](https://github.com/gperouffe/vscode-tfs)
- [MIT Licence](https://github.com/gperouffe/vscode-tfs/blob/master/LICENCE)
