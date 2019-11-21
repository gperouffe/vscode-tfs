const tf = require("../vscode-tfs").tf
const ui = require("../ui")

module.exports = async function del({ uri }) {
  await ui.showStatus(`TFS: Deleting...`, tf(["delete", uri.fsPath, "/recursive"]))
  ui.showMessage(`TFS: ${uri.fsPath} successfully deleted from version control.`)
}
