var favoriteLanguage = "Javascript";

var languageThought = function () {
  console.log("Original Favorite Language: ", favoriteLanguage);

  var favoriteLanguage = "GoLang";

  console.log(`New Favorite Language: ${favoriteLanguage}`);
};

languageThought();
