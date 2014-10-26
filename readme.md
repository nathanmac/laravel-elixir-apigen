## Usage

This is a simple ApiGen wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-apigen');

elixir(function(mix) {
   mix.apigen();
});
```

This will scan any PHP classes in your 'app' folder for changes, and trigger your ApiGen documentation generator.
