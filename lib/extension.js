const vscode = require("vscode")
const commands = require("./commands")
const only = require("./util/only")
const checkoutOrRevert = require("./action/checkoutOrRevert")
const del = only(require("./action/delete"))
const rename = require("./action/rename")
const undo = require("./action/undo")
const fs = require("./util/fs")

module.exports.activate = function activate(context) {
  context.subscriptions.push(vscode.commands.registerCommand("vscode-tfs.add", commands.add))
  context.subscriptions.push(vscode.commands.registerCommand("vscode-tfs.checkout", commands.checkout))
  context.subscriptions.push(vscode.commands.registerCommand("vscode-tfs.delete", commands.delete))
  context.subscriptions.push(vscode.commands.registerCommand("vscode-tfs.undo", commands.undo))
  context.subscriptions.push(vscode.commands.registerCommand("vscode-tfs.openInBrowser", commands.openInBrowser))
  context.subscriptions.push(vscode.commands.registerCommand("vscode-tfs.menu", commands.menu))

  vscode.workspace.onWillSaveTextDocument(event => {
    const { document } = event
    if (document.isDirty && !document.isUntitled) {
      event.waitUntil(checkoutOrRevert(document))
    }
  })

  let fsWatcher = vscode.workspace.createFileSystemWatcher("**/*.*")
  let createdFile = null;
  let renaming = false;
  let deleting = false;

  fsWatcher.onDidCreate((event) => {
    if (!renaming) {
      createdFile = event
      setTimeout(() => {
        if (!renaming) {
          createdFile = null
        }
      }, 100);
    }
  })

  fsWatcher.onDidDelete((event) => {
    let oldFileUri = event
    setTimeout(async () => {
      if (createdFile) {
        renaming = true
        let newFileUri = createdFile
        createdFile = null

        edit = new vscode.WorkspaceEdit()
        edit.renameFile(newFileUri, oldFileUri)
        vscode.workspace.applyEdit(edit).then(async () => {
          try {
            console.log('renaming')
            console.log(oldFileUri.fsPath)
            console.log(newFileUri.fsPath)
            await rename(oldFileUri.fsPath, newFileUri.fsPath)
            console.log("renaming success")
          }
          catch{
            console.log("renaming failed")
          }
          renaming = false
        },
          (a) => renaming = false)
      }
      else {
        if(!renaming && !deleting){
          deleting = true
          console.log('delete', oldFileUri.fsPath)
          // await undo({uri: oldFileUri})
          try{
            await del({uri: oldFileUri})
          }
          catch(e){
            console.log("error while deleting: " + e)
            console.log("reverting")
            try{
              await undo({uri: oldFileUri})
              console.log("reverting success")
            }
            catch(e){
              console.log("error while reverting: " + e)
            }
          }
          deleting = false
        }
      }
    }, 20);
  })
}

module.exports.deactivate = function deactivate() { }
