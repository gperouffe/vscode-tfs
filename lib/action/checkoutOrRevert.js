const ui = require("../ui")
const checkout = require("./checkout")
const undo = require("./undo")
const fs = require("../util/fs")

async function confirmModification(uri) {
  if (await ui.promptForConfirmation(`Checkout ${uri.fsPath}?`)) {
    await checkout(uri)
  } else {
    await undo(uri)
  }
}

module.exports = async function checkoutOrRevert({ uri }) {
  let writable = await fs.isWritable(uri.fsPath)
  if (!writable) {
    await fs.attrSet(uri.fsPath, { readonly: false })
    // confirmModification(uri)
    checkout({ uri })
  }
}
