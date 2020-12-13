import "systemjs";

const manifestUrl = "manifest.json";

fetch(manifestUrl)
  .then((res) => res.json())
  .then((manifest) => {
    manifest.forEach((module) => {
      System.import(module.url).then((app) => {
        app.install();
      });
    });
  });
