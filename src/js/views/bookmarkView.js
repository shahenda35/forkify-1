import View from "./view";
import previewView from "./previewView";

class bookmarkView extends View {
  _parentElement = document.querySelector(".bookmarks_list");
  _errorMessage = "No bookmarks yet , Find a recipe and bookmark it";
  _message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return this._data
      .map((bookmark) => previewView.render(bookmark, false))
      .join("");
  }
}

export default new bookmarkView();
