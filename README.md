# Morph Family Website

This code generates the website of the morph family suite open source tools getting the information from an SPARQL endpoint. The original data is describe as a set of CSV files and transforming to RDF using RML mappings and the [SDM-RDFizer](https://github.com/SDM-TIB/SDM-RDFizer) tool. The obtained RDF is aligned with the http://schema.org vocabulary, which is used to incoporate RDFa annotations in the HTML. SPARQL endpoint is available at https://morph.oeg.fi.upm.es/sparql and the used engine to query the endpoint is [GraphQL-LD](https://www.npmjs.com/package/graphql-ld).


## Developers
- [Luis Pozo (luis.pozo@upm.es)](https://github.com/w0xter)
