Window_MenuCommand.prototype.addOriginalCommands = function() {
    this.addCommand("Load", 'load', true);
};
 
var xscene_menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
    xscene_menu_createCommandWindow.call(this);
    this._commandWindow.setHandler('load',this.commandLoad.bind(this));
    this.addWindow(this._commandWindow);
};
 
Scene_Menu.prototype.commandLoad = function() {
    SceneManager.push(Scene_Load);
}
