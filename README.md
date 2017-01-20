# grunt-vsts-iis

> The best vstsIIS Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-vstsIIS --save-dev // not yet in npm
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-vstsIIS');
```

## The "vstsIIS" task

### Overview
In your project's Gruntfile, add a section named `` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  : {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

This plugins uses acromm/vsts-iis and maps operations and options located here https://github.com/acromm/vsts-iis and based on https://github.com/ChristopherHaws/vsts-iis. The actual differnce between this two repos is that the first has the option to call appcmd remotly using PsExec.


### Usage Examples

In this example we perform a sync between an iisApp and a package (.zip)

```js
vstsIIS:{

}

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 0.1.0 Initial release
