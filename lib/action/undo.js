const tf = require("../vscode-tfs").tf
const ui = require("../ui")

module.exports = async function undo({ uri }) {
  await ui.showStatus("TFS: Undoing...", tf(["undo", uri.fsPath, "/recursive"]))
  await ui.revert(uri)
  ui.showMessage(`TFS: Pending changes undone in ${uri.fsPath}`)
}
