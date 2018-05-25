MonetaryCoin Documentation Generator
====================================

See [openzepplin-docs](https://github.com/OpenZeppelin/openzeppelin-docs) for details

## Generating Docs

To generate documentation from scratch, run:

```sh
npm run gen-docs
```

After modifying styles, header links, footer, and static documents, you can automatically generate all MonetaryCoin API docs - one per contract in the codebase - by running:

```sh
npm run bump-docs -- <tag>
```

For example:

```sh
npm run bump-docs -- v1.7.0
```

This command will automatically:

* Run [solidity-docgen](https://github.com/spalladino/solidity-docgen) on the MonetaryCoin codebase at the given tag.
* Generate a new Docusaurus version matching the MonetaryCoin release tag.
* Build the Docusaurus project, yielding the result in `docs/website/build`.
