/**
 * @constructor SpaceApiEditor
 * @param {Element} container    Container element
 * @param {Object}  [options]    Object with options. available options:
 *                               {String} mode      Editor mode. Available values:
 *                                                  'tree' (default), 'view',
 *                                                  and 'form'.
 *                               {Boolean} search   Enable search box.
 *                                                  True by default
 *                               {Boolean} history  Enable history (undo/redo).
 *                                                  True by default
 *                               {function} change  Callback method, triggered
 *                                                  on change of contents
 *                               {String} name      Field name for the root node.
 * @param {Object | undefined} json JSON object
 */
function SpaceApiEditor(container, options, json) {
  if (!(this instanceof SpaceApiEditor)) {
    throw new Error('SpaceApiEditor constructor called without "new".');
  }

  TreeEditor.call(container, options, json);
}

// this leads to a "too much recursion" exception
//SpaceApiEditor.prototype = new TreeEditor(document.createElement("div"), null, "{}");
SpaceApiEditor.prototype = TreeEditor.prototype;

/*
SpaceApiEditor.prototype._create = TreeEditor.prototype._create;
SpaceApiEditor.prototype._delete = TreeEditor.prototype._delete;
SpaceApiEditor.prototype._setOptions = TreeEditor.prototype._setOptions;
SpaceApiEditor.focusNode = undefined;
SpaceApiEditor.prototype.set = TreeEditor.prototype.set;
SpaceApiEditor.prototype.get = TreeEditor.prototype.get;
SpaceApiEditor.prototype.getText = TreeEditor.prototype.getText;
SpaceApiEditor.prototype.setText = TreeEditor.prototype.setText;
SpaceApiEditor.prototype.setName = TreeEditor.prototype.setName;
SpaceApiEditor.prototype.getName = TreeEditor.prototype.getName;
SpaceApiEditor.prototype.clear = TreeEditor.prototype.clear;
SpaceApiEditor.prototype._setRoot = TreeEditor.prototype._setRoot;
SpaceApiEditor.prototype.search = TreeEditor.prototype.search;
SpaceApiEditor.prototype.expandAll = TreeEditor.prototype.expandAll;
SpaceApiEditor.prototype.collapseAll = TreeEditor.prototype.collapseAll;
SpaceApiEditor.prototype._onAction = TreeEditor.prototype._onAction;
SpaceApiEditor.prototype.startAutoScroll = TreeEditor.prototype.startAutoScroll;
SpaceApiEditor.prototype.stopAutoScroll = TreeEditor.prototype.stopAutoScroll;
SpaceApiEditor.prototype.setSelection = TreeEditor.prototype.setSelection;
SpaceApiEditor.prototype.getSelection = TreeEditor.prototype.getSelection;
SpaceApiEditor.prototype.scrollTo = TreeEditor.prototype.scrollTo;
SpaceApiEditor.prototype._createFrame = TreeEditor.prototype._createFrame;
SpaceApiEditor.prototype._onUndo = TreeEditor.prototype._onUndo;
SpaceApiEditor.prototype._onRedo = TreeEditor.prototype._onRedo;
SpaceApiEditor.prototype._onEvent = TreeEditor.prototype._onEvent;
SpaceApiEditor.prototype._onKeyDown = TreeEditor.prototype._onKeyDown;
SpaceApiEditor.prototype._createTable = TreeEditor.prototype._createTable;
*/

// register modes at the JSONEditor
JSONEditor.modes.spaceapi = {
  editor: SpaceApiEditor,
  data: 'json'
};