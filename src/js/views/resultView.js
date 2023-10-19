import View from "./view";
import previewView from "./previewView";

class resultView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipe found, Choose another one";
  _message = "";

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join("");
  }
}

export default new resultView();
