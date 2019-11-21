const tf = require("../vscode-tfs").tf
const ui = require("../ui")

module.exports = async function checkout({ uri }) {
  await ui.showStatus(`TFS: Checking...`, tf(["checkout", uri.fsPath, "/recursive"]))
  ui.showMessage(`TFS: ${uri.fsPath} successfully checked out for editing.`)
}
