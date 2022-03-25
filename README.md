# TestTaskTimedox

I've created 4 files with translations in json format. Files are on the path: res/languages

For displaying all languages buttons, I've used FlatList that takes an array of available languages. It makes it easy to add more languages without changing code.

I also added an ability to change theme from light to dark. By default application reads system theme and using it.

Changing language and theme happens with the help of Context. It allows us to store actual value in one place (globally) and than read and change it from any component in application.
