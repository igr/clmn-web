import { Spig } from "spignite";

Spig.hello();

// PAGES

Spig
  .on('/**/*.{md,njk}')

  ._('PAGES')
  .pageMeta()
  .pageLinks()

  ._('RENDER')
  .render()
  .applyTemplate()
  .htmlMinify()
;

// ASSETS

Spig
  .on('/**/*.{png,jpg,gif}')

  ._('ASSETS')
  .assetLinks()
;


Spig.run();
