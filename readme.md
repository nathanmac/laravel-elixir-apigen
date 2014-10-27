## Usage

This is a simple ApiGen wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-apigen');

// Default
elixir(function(mix) {
   mix.apigen();
});

// ApiGen Installed Locally
elixir(function(mix) {
   mix.apigen('vendor/bin/apigen');
});

// ApiGen Installed Globally
elixir(function(mix) {
   mix.apigen('apigen');
});
```

This will scan any PHP classes in your 'app' folder for changes, and trigger your ApiGen documentation generator.

## Additional Information

For more information please refer to the [ApiGen documentation](http://apigen.org/).
