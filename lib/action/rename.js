const tf = require("../vscode-tfs").tf
const ui = require("../ui")

module.exports = async function rename( oldPath, newPath ) {
  await ui.showStatus(`TFS: Renaming...`, tf(["rename", oldPath, newPath]))
  ui.showMessage(`TFS: ${oldPath} successfully renamed in ${newPath}.`)
}
