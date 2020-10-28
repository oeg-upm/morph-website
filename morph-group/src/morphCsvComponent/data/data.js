
const data = {
    gtfs:{
        url:'https://raw.githubusercontent.com/oeg-dataintegration/morph-csv-demo/master/data/gtfs/',
        queries:{
            1:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            2:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            3:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            4:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            5:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            6:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            7:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            8:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            9:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            10:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            11:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            12:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            13:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            14:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            15:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            16:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            17:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            18:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },            

        }
    },
    bio2rdf:{
        url:'https://raw.githubusercontent.com/oeg-dataintegration/morph-csv-demo/master/data/bio2rdf/',
        queries:{
            1:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            2:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            3:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            4:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            5:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            6:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            7:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            8:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            9:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            10:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            }           
        }
    },
    bsbm:{
        url:'https://raw.githubusercontent.com/oeg-dataintegration/morph-csv-demo/master/data/bsbm/',
        queries:{
            1:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            2:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            3:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            4:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            5:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            6:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            7:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            8:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            9:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            10:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            }           
        }
    }
}

const evaluation = {
    gtfs:{
        labels:["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12","q13","q14","q15","q16","q17","q18"],
        mrdblabels:["Q1","Q2","Q4","Q6","Q7","Q9","Q12","Q13","Q14","Q17"],
        ontoplabels:["Q1","Q2","Q3","Q4","Q5","Q7","Q9","Q13","Q14","Q17"],
        sizes:{
            '1':{
                load:{
                  naive:[1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,1.21,0],
                  morphcsv:[2.039,1.709,1.680,1.765,1.805,1.739,1.972,1.965,2.306,1.733,1.799,1.906,1.711,1.878,1.744,1.845,1.747,1.829,0]
                },
                execution:{
                    ontop:{
                        naive:[10.659,0,6.744,5.918,0,0,0,6.605,7.458,6.859,0],
                        morphcsv:[9.114,5.939,6.172,5.985,67.769,6.652,21.01,5.855,6.342,5.939,0]
                    },
                    mrdb:{
                        naive:[7.388,3.808,3.388,3.439,3.617,329.469,3.521,3.818,4.702,3.785,0],
                        morphcsv:[8.485,5.257,4.163,4.108,4.746,26.094,5.446,4.538,5.528,5.173,0]
                    }
                },
              },
              '10':{
                load:{
                  naive:[1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,1.954,0],
                  morphcsv:[3.147,1.809,1.766,1.748,1.754,1.714,2.406,2.419,4.862,2.031,1.830,2.242,1.857,1.970,1.982,1.842,2.023,1.872,0]
                },
                execution:{
                    ontop:{
                        naive:[28.252,0,8.983,7.349,0,0,0,8.797,29.1,8.227,0],
                        morphcsv:[26.945,7.226,7.332,5.927,2355.978,7.063,84.293,6.056,8.54,6.523,0]
                    },
                    mrdb:{
                  naive:[24.842,5.292,4.336,4.128,6.433,7200,4.68,5.292,10.771,5.712,0],
                  morphcsv:[25.616,5.399,4.31,4.121,5.169,98.616,5.263,4.957,4.374,5.671,0]
                    }
                },
              },
                '100':{
                load:{
                    naive:[10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,10.364,0],
                    morphcsv:[16.425,2.330,2.349,1.714,1.746,1.752,6.228,5.527,49.154,4.984,1.806,5.814,3.055,2.911,3.622,1.912,3.192,2.090,0]
                    },
                execution:{
                    ontop:{
                        naive:[292.85,0,19.803,17.443,0,0,0,25.307,41.403,27.331,0],
                        morphcsv:[238.734,11.566,11.072,5.93,7200,11.734,7200,8.239,8.54,10.176,0]
                    },
                    mrdb:{
                  naive:[223.653,19.719,13.284,12.614,18.188,7200,14.527,19.554,62.927,20.995,0],
                  morphcsv:[221.745,9.971,4.688,3.883,8.666,7200,9.689,8.027,5.151,11.754,0]
                    }
                },
              },
                  '1000':{
                load:{
                  naive:[107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,107.787,0],
                  morphcsv:[182.896,8.415,8.705,1.966,2.078,1.932,102.545,79.709,466.228,32.033,3.733,45.925,14.673,126.429,23.596,2.614,15.035,2.417,0]
                },
                execution:{
                    ontop:{
                        naive:[7200,0.00,335.79,17.686,0.00,0.00,0.00,1177.5,433.216,198.323],
                        morphcsv:[7200,14.469,14.126,6.011,7200,102.955,7200,21.44,309.2366,49.445,0]
                    },
                    mrdb:{
                  naive:[7200,169.416,113.633,110.379,182.288,7200,125.95,180.063,112.474,202.765,0],
                  morphcsv:[6005.982,113.564,6.645,4.129,92.406,7200,94.385,47.906,97.191,73.125,0]
                    }
                },
              }            
        }
    },
    bsbm:{
        labels:["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10","q11","q12"],
        ontoplabels:[
            "Q1",
            "Q3",
            "Q4",
            "Q5",
            "Q10"
        ],
        mrdblabels:[
            "Q1",
            "Q2",
            "Q3",
            "Q4",
            "Q5",
            "Q6",
            "Q7",
            "Q8",
            "Q9",
            "Q10",
            "Q12"
            
        ],
        sizes:{
            '45k':{
                load:{
                  naive:[22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,22.534,0],
                  morphcsv:[8.895,11.942,7.962,4.738,7.742,2.859,11.311,48.383,15.484,10.688,61.356,13.403,0]
                },
                execution:{
                    ontop:{
                        naive:[17.897,9.961,36.808,0,0,0],
                        morphcsv:[29.496,12.270,22.643,253.317,23.092,0],
                    },
                    mrdb:{
                  naive:[733.615,190.603,30.813,147.203,0,25.264,295.016,28.704,44.982,26.202,214.245,0],
                  morphcsv:[20.327,19.217,10.782,141.615,90.671,5.272,248.335,50.973,26.398,18.731,171.194,0]
                    }
                },
              },
              '90k':{
                load:{
                  naive:[54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,54.730,0],
                  morphcsv:[13.758,18.828,12.872,7.628,11.967,3.940,18.883,108.130,30.451,18.383,137.062,27.015,0]
                },
                execution:{
                    ontop:{
                        naive:[85.14054322,69.17059421,175.5017313,0,0,0],
                        morphcsv:[54.427,25.915,37.699,1,428.495,51.314,0]
                    },
                    mrdb:{
                  naive:[73.711,366.991,68.321,319.689,0,57.348,839.345,65.079,92.528,59.715,402.898,0],
                  morphcsv:[27.642,29.948,15.990,331.461,633.506,6.186,749.500,103.916,46.559,28.818,358.765,0]
                    }
                },
              },
                '180k':{
                load:{
                  naive:[146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,146.398,0],
                  morphcsv:[27.195,48.966,25.011,13.120,22.547,6.089,45.203,250.550,64.675,43.813,308.663,74.184,0]
                },
                execution:{
                    ontop:{
                        naive:[7200.000,298.087,7200.000,0,0,0],
                        morphcsv:[112.916,53.845,71.614,2488.017,123.587,0]
                    },
                    mrdb:{
                  naive:[281.368,7200.000,154.894,642.866,0,149.255,2389.267,167.977,222.600,155.413,885.943,0],
                  morphcsv:[148.586,65.353,33.368,642.003,1128.371,8.296,2153.535,229.337,93.873,64.157,688.471,0]
                    }
                },
              },
                '360k':{
                load:{
                  naive:[289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,289.196,0],
                  morphcsv:[76.631,114.769,75.506,58.399,65.133,38.908,90.176,597.318,156.083,89.746,723.698,163.574,0]
                },
                execution:{
                    ontop:{
                        naive:[3673.675,304.988,7200.000,0,0,0],
                        morphcsv:[220.704,84.674,127.462,7200.000,330.977,0]
                    },
                    mrdb:{
                  naive:[562.358,7200.000,295.243,1355.095,0,292.257,7200.000,336.069,417.233,301.886,7200.000,0],
                  morphcsv:[348.478,120.623,71.915,1395.604,0,32.415,7200.000,538.603,237.800,115.807,7200,0]
                    }
                },
              }            
        }
    },
    bio2rdf:{
      execution:{
          mrdb:{
              naive:{

              }
          }
      }
    }
  }
const queryMetrics = {
    "gtfs":{
      "q1": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.37,
                  normalization: 0,
                  dataPreparation: 0.286,
                  schemaCreationLoad: 0.345,
                  mappingTranslation: 0.506,
                  total: 1.507
              },
              {
                  size:10,
                  key:'2',
                  selection: 0.998,
                  normalization: 0,
                  dataPreparation: 1.201,
                  schemaCreationLoad: 1.296,
                  mappingTranslation: 0.509,
                  total: 4.004
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.181,
                  normalization: 0,
                  dataPreparation: 11.434,
                  schemaCreationLoad: 11.812,
                  mappingTranslation: 0.531,
                  total: 30.959
              },
              {
                  size:1000,
                  key:'4',
                  selection: 76.815,
                  normalization: 0,
                  dataPreparation: 140.784,
                  schemaCreationLoad: 123.77,
                  mappingTranslation: 0.546,
                  total: 341.915
              }
            ],
          "datatype": "3",
          "substitution": "4"
      },
      "q2": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.387,
                  normalization: 0,
                  dataPreparation: 0.065,
                  schemaCreationLoad: 0.075,
                  mappingTranslation: 0.521,
                  total: 1.049
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.005,
                  normalization: 0,
                  dataPreparation: 0.139,
                  schemaCreationLoad: 0.139,
                  mappingTranslation: 0.536,
                  total: 1.82
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.249,
                  normalization: 0,
                  dataPreparation: 0.789,
                  schemaCreationLoad: 0.751,
                  mappingTranslation: 0.519,
                  total: 9.308
              },
              {
                  size:1000,
                  key:'4',
                  selection: 73.39,
                  normalization: 0,
                  dataPreparation: 8.041,
                  schemaCreationLoad: 6.843,
                  mappingTranslation: 0.521,
                  total: 88.795
              }
            ],
          "datatype": "3",
          "substitution": "5"
      },
      "q3": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.374,
                  normalization: 0,
                  dataPreparation: 0.062,
                  schemaCreationLoad: 0.074,
                  mappingTranslation: 0.532,
                  total: 1.041
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.033,
                  normalization: 0,
                  dataPreparation: 0.147,
                  schemaCreationLoad: 0.137,
                  mappingTranslation: 0.525,
                  total: 1.842
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.257,
                  normalization: 0,
                  dataPreparation: 0.941,
                  schemaCreationLoad: 0.679,
                  mappingTranslation: 0.507,
                  total: 9.384
              },
              {
                  size:1000,
                  key:'4',
                  selection: 71.395,
                  normalization: 0,
                  dataPreparation: 6.826,
                  schemaCreationLoad: 7.123,
                  mappingTranslation: 0.528,
                  total: 85.871
              }
            ],
          "datatype": "4",
          "substitution": "5"
      },
      "q4": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.376,
                  normalization: 0,
                  dataPreparation: 0.113,
                  schemaCreationLoad: 0.063,
                  mappingTranslation: 0.5,
                  total: 1.052
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.059,
                  normalization: 0,
                  dataPreparation: 0.123,
                  schemaCreationLoad: 0.067,
                  mappingTranslation: 0.531,
                  total: 1.78
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.294,
                  normalization: 0,
                  dataPreparation: 0.259,
                  schemaCreationLoad: 0.075,
                  mappingTranslation: 0.507,
                  total: 8.135
              },
              {
                  size:1000,
                  key:'4',
                  selection: 71.686,
                  normalization: 0,
                  dataPreparation: 0.657,
                  schemaCreationLoad: 0.239,
                  mappingTranslation: 0.541,
                  total: 73.123
              }
            ],
          "datatype": "0",
          "substitution": "7"
      },
      "q5": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.381,
                  normalization: 0,
                  dataPreparation: 0.114,
                  schemaCreationLoad: 0.059,
                  mappingTranslation: 0.525,
                  total: 1.08
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.01,
                  normalization: 0,
                  dataPreparation: 0.13,
                  schemaCreationLoad: 0.067,
                  mappingTranslation: 0.524,
                  total: 1.732
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.195,
                  normalization: 0,
                  dataPreparation: 0.316,
                  schemaCreationLoad: 0.12,
                  mappingTranslation: 0.52,
                  total: 8.151
              },
              {
                  size:1000,
                  key:'4',
                  selection: 71.77,
                  normalization: 0,
                  dataPreparation: 0.737,
                  schemaCreationLoad: 0.665,
                  mappingTranslation: 0.533,
                  total: 73.705
              }
            ],
          "datatype": "2",
          "substitution": "2"
      },
      "q6": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.368,
                  normalization: 0,
                  dataPreparation: 0.106,
                  schemaCreationLoad: 0.051,
                  mappingTranslation: 0.524,
                  total: 1.049
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.012,
                  normalization: 0,
                  dataPreparation: 0.125,
                  schemaCreationLoad: 0.06,
                  mappingTranslation: 0.507,
                  total: 1.704
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.254,
                  normalization: 0,
                  dataPreparation: 0.252,
                  schemaCreationLoad: 0.085,
                  mappingTranslation: 0.532,
                  total: 8.123
              },
              {
                  size:1000,
                  key:'4',
                  selection: 72.521,
                  normalization: 0,
                  dataPreparation: 0.441,
                  schemaCreationLoad: 0.271,
                  mappingTranslation: 0.532,
                  total: 73.766
              }
            ],
          "datatype": "0",
          "substitution": "0"
      },
      "q7": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.381,
                  normalization: 0,
                  dataPreparation: 0.337,
                  schemaCreationLoad: 0.176,
                  mappingTranslation: 0.536,
                  total: 1.43
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.023,
                  normalization: 0,
                  dataPreparation: 0.524,
                  schemaCreationLoad: 0.475,
                  mappingTranslation: 0.522,
                  total: 2.545
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.209,
                  normalization: 0,
                  dataPreparation: 1.946,
                  schemaCreationLoad: 3.369,
                  mappingTranslation: 0.526,
                  total: 13.05
              },
              {
                  size:1000,
                  key:'4',
                  selection: 72.749,
                  normalization: 0,
                  dataPreparation: 19.167,
                  schemaCreationLoad: 52.349,
                  mappingTranslation: 0.541,
                  total: 144.808
              }
            ],
          "datatype": "3",
          "substitution": "8"
      },
      "q8": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.386,
                  normalization: 0,
                  dataPreparation: 0.359,
                  schemaCreationLoad: 0.182,
                  mappingTranslation: 0.545,
                  total: 1.472
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.041,
                  normalization: 0,
                  dataPreparation: 0.504,
                  schemaCreationLoad: 0.467,
                  mappingTranslation: 0.53,
                  total: 2.542
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.305,
                  normalization: 0,
                  dataPreparation: 1.955,
                  schemaCreationLoad: 3.811,
                  mappingTranslation: 0.571,
                  total: 13.642
              },
              {
                  size:1000,
                  key:'4',
                  selection: 73.408,
                  normalization: 0,
                  dataPreparation: 18.768,
                  schemaCreationLoad: 52.294,
                  mappingTranslation: 0.55,
                  total: 145.021
              }
            ],
          "datatype": "3",
          "substitution": "8"
      },
      "q9": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.39,
                  normalization: 0,
                  dataPreparation: 0.464,
                  schemaCreationLoad: 0.381,
                  mappingTranslation: 0.532,
                  total: 1.767
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.004,
                  normalization: 0,
                  dataPreparation: 1.378,
                  schemaCreationLoad: 2.214,
                  mappingTranslation: 0.522,
                  total: 5.119
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.566,
                  normalization: 0,
                  dataPreparation: 11.446,
                  schemaCreationLoad: 35.058,
                  mappingTranslation: 0.54,
                  total: 54.609
              },
              {
                  size:1000,
                  key:'4',
                  selection: 78.764,
                  normalization: 0,
                  dataPreparation: 126.915,
                  schemaCreationLoad: 3121.927,
                  mappingTranslation: 0.557,
                  total: 3328.163
              }
            ],
          "datatype": "2",
          "substitution": "3"
      },
      "q10": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.378,
                  normalization: 0,
                  dataPreparation: 0.126,
                  schemaCreationLoad: 0.09,
                  mappingTranslation: 0.535,
                  total: 1.129
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.03,
                  normalization: 0,
                  dataPreparation: 0.247,
                  schemaCreationLoad: 0.323,
                  mappingTranslation: 0.516,
                  total: 2.116
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.581,
                  normalization: 0,
                  dataPreparation: 1.201,
                  schemaCreationLoad: 2.435,
                  mappingTranslation: 0.538,
                  total: 11.755
              },
              {
                  size:1000,
                  key:'4',
                  selection: 73.982,
                  normalization: 0,
                  dataPreparation: 12.364,
                  schemaCreationLoad: 66.614,
                  mappingTranslation: 0.524,
                  total: 153.485
              }
            ],
          "datatype": "0",
          "substitution": "2"
      },
      "q11": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.377,
                  normalization: 0,
                  dataPreparation: 0.169,
                  schemaCreationLoad: 0.084,
                  mappingTranslation: 0.523,
                  total: 1.153
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.021,
                  normalization: 0,
                  dataPreparation: 0.193,
                  schemaCreationLoad: 0.116,
                  mappingTranslation: 0.536,
                  total: 1.866
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.333,
                  normalization: 0,
                  dataPreparation: 0.28,
                  schemaCreationLoad: 0.285,
                  mappingTranslation: 0.556,
                  total: 8.454
              },
              {
                  size:1000,
                  key:'4',
                  selection: 72.248,
                  normalization: 0,
                  dataPreparation: 1.318,
                  schemaCreationLoad: 1.62,
                  mappingTranslation: 0.535,
                  total: 75.722
              }
            ],
          "datatype": "2",
          "substitution": "2"
      },
      "q12": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.373,
                  normalization: 0,
                  dataPreparation: 0.226,
                  schemaCreationLoad: 0.13,
                  mappingTranslation: 0.509,
                  total: 1.237
              },
              {
                  size:10,
                  key:'2',
                  selection: 0.994,
                  normalization: 0,
                  dataPreparation: 0.401,
                  schemaCreationLoad: 0.46,
                  mappingTranslation: 0.538,
                  total: 2.393
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.274,
                  normalization: 0,
                  dataPreparation: 1.858,
                  schemaCreationLoad: 3.839,
                  mappingTranslation: 0.534,
                  total: 13.504
              },
              {
                  size:1000,
                  key:'4',
                  selection: 73.084,
                  normalization: 0,
                  dataPreparation: 17.717,
                  schemaCreationLoad: 69.82,
                  mappingTranslation: 0.532,
                  total: 161.153
              }
            ],
          "datatype": "1",
          "substitution": "4"
      },
      "q13": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.43,
                  normalization: 0,
                  dataPreparation: 0.073,
                  schemaCreationLoad: 0.064,
                  mappingTranslation: 0.54,
                  total: 1.107
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.006,
                  normalization: 0,
                  dataPreparation: 0.143,
                  schemaCreationLoad: 0.16,
                  mappingTranslation: 0.503,
                  total: 1.811
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.314,
                  normalization: 0,
                  dataPreparation: 0.69,
                  schemaCreationLoad: 0.981,
                  mappingTranslation: 0.524,
                  total: 9.509
              },
              {
                  size:1000,
                  key:'4',
                  selection: 71.511,
                  normalization: 0,
                  dataPreparation: 6.718,
                  schemaCreationLoad: 9.169,
                  mappingTranslation: 0.511,
                  total: 87.909
              }
            ],
          "datatype": "1",
          "substitution": "3"
      },
      "q14": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.396,
                  normalization: 0,
                  dataPreparation: 0.246,
                  schemaCreationLoad: 0.141,
                  mappingTranslation: 0.581,
                  total: 1.365
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.019,
                  normalization: 0,
                  dataPreparation: 0.408,
                  schemaCreationLoad: 0.453,
                  mappingTranslation: 0.577,
                  total: 2.458
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.242,
                  normalization: 0,
                  dataPreparation: 1.899,
                  schemaCreationLoad: 3.038,
                  mappingTranslation: 0.519,
                  total: 12.698
              },
              {
                  size:1000,
                  key:'4',
                  selection: 73.874,
                  normalization: 0,
                  dataPreparation: 18.356,
                  schemaCreationLoad: 48.674,
                  mappingTranslation: 0.532,
                  total: 141.437
              }
            ],
          "datatype": "1",
          "substitution": "3"
      },
      "q15": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.363,
                  normalization: 0,
                  dataPreparation: 0.069,
                  schemaCreationLoad: 0.055,
                  mappingTranslation: 0.498,
                  total: 0.985
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.009,
                  normalization: 0,
                  dataPreparation: 0.176,
                  schemaCreationLoad: 0.221,
                  mappingTranslation: 0.513,
                  total: 1.92
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.328,
                  normalization: 0,
                  dataPreparation: 1.108,
                  schemaCreationLoad: 1.244,
                  mappingTranslation: 0.534,
                  total: 10.213
              },
              {
                  size:1000,
                  key:'4',
                  selection: 73.003,
                  normalization: 0,
                  dataPreparation: 10.506,
                  schemaCreationLoad: 13.434,
                  mappingTranslation: 0.557,
                  total: 97.5
              }
            ],
          "datatype": "4",
          "substitution": "11"
      },
      "q16": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.37,
                  normalization: 0,
                  dataPreparation: 0.205,
                  schemaCreationLoad: 0.087,
                  mappingTranslation: 0.53,
                  total: 1.192
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.019,
                  normalization: 0,
                  dataPreparation: 0.234,
                  schemaCreationLoad: 0.117,
                  mappingTranslation: 0.522,
                  total: 1.892
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.373,
                  normalization: 0,
                  dataPreparation: 0.441,
                  schemaCreationLoad: 0.346,
                  mappingTranslation: 0.538,
                  total: 8.698
              },
              {
                  size:1000,
                  key:'4',
                  selection: 71.692,
                  normalization: 0,
                  dataPreparation: 1.505,
                  schemaCreationLoad: 2.028,
                  mappingTranslation: 0.551,
                  total: 75.776
              }
            ],
          "datatype": "2",
          "substitution": "2"
      },
      "q17": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.389,
                  normalization: 0,
                  dataPreparation: 0.169,
                  schemaCreationLoad: 0.091,
                  mappingTranslation: 0.543,
                  total: 1.193
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.013,
                  normalization: 0,
                  dataPreparation: 0.22,
                  schemaCreationLoad: 0.198,
                  mappingTranslation: 0.536,
                  total: 1.967
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.241,
                  normalization: 0,
                  dataPreparation: 0.666,
                  schemaCreationLoad: 1.093,
                  mappingTranslation: 0.533,
                  total: 9.533
              },
              {
                  size:1000,
                  key:'4',
                  selection: 72.449,
                  normalization: 0,
                  dataPreparation: 4.2,
                  schemaCreationLoad: 10.732,
                  mappingTranslation: 0.528,
                  total: 87.909
              }
            ],
          "datatype": "1",
          "substitution": "4"
      },
      "q18": {
          executiontimes: [
               {
                  size:1,
                  key:'1',
                  selection: 0.379,
                  normalization: 0,
                  dataPreparation: 0.226,
                  schemaCreationLoad: 0.101,
                  mappingTranslation: 0.519,
                  total: 1.224
              },
              {
                  size:10,
                  key:'2',
                  selection: 1.028,
                  normalization: 0,
                  dataPreparation: 0.239,
                  schemaCreationLoad: 0.117,
                  mappingTranslation: 0.542,
                  total: 1.926
              },
               {
                  size:100,
                  key:'3',
                  selection: 7.276,
                  normalization: 0,
                  dataPreparation: 0.459,
                  schemaCreationLoad: 0.296,
                  mappingTranslation: 0.578,
                  total: 8.611
              },
              {
                  size:1000,
                  key:'4',
                  selection: 71.849,
                  normalization: 0,
                  dataPreparation: 1.552,
                  schemaCreationLoad: 1.905,
                  mappingTranslation: 0.541,
                  total: 75.847
              }
            ],
          "datatype": "1",
          "substitution": "3"
      }
  },
    
    "bsbm":{
      "q1": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 3.2912,
                  schemaCreationLoad: 3.0438,
                  mappingTranslation: 0.5144,
                  total: 6.8533
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0036,
                  normalization: 0.0001,
                  dataPreparation: 6.8821,
                  schemaCreationLoad: 6.1181,
                  mappingTranslation: 0.5397,
                  total: 13.5436
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0037,
                  normalization: 0.0001,
                  dataPreparation: 12.6749,
                  schemaCreationLoad: 10.7403,
                  mappingTranslation: 0.5339,
                  total: 23.9529
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 23.8461,
                  schemaCreationLoad: 26.804,
                  mappingTranslation: 0.545,
                  total: 51.1989
              }
            ],
          "datatype": "7",
          "substitution": "1"
      },
      "q2": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.004,
                  normalization: 0.0001,
                  dataPreparation: 5.6994,
                  schemaCreationLoad: 4.3547,
                  mappingTranslation: 0.5642,
                  total: 10.6224
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0041,
                  normalization: 0.0001,
                  dataPreparation: 10.0219,
                  schemaCreationLoad: 8.6672,
                  mappingTranslation: 0.5252,
                  total: 19.2185
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0041,
                  normalization: 0.0004,
                  dataPreparation: 19.9463,
                  schemaCreationLoad: 15.8481,
                  mappingTranslation: 0.508,
                  total: 36.307
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0041,
                  normalization: 0.0001,
                  dataPreparation: 43.8798,
                  schemaCreationLoad: 44.0315,
                  mappingTranslation: 0.571,
                  total: 88.4865
              }
            ],
          "datatype": "10",
          "substitution": "12"
      },
      "q3": {
          executiontimes: [
               {
                  size:45,
                  key:'1',
                  selection: 0.0035,
                  normalization: 0.0001,
                  dataPreparation: 3.4244,
                  schemaCreationLoad: 2.7071,
                  mappingTranslation: 0.4977,
                  total: 6.6328
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 6.3343,
                  schemaCreationLoad: 5.5293,
                  mappingTranslation: 0.5161,
                  total: 12.3835
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 11.9776,
                  schemaCreationLoad: 11.1342,
                  mappingTranslation: 0.5453,
                  total: 23.661
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0036,
                  normalization: 0.0001,
                  dataPreparation: 24.9695,
                  schemaCreationLoad: 24.6673,
                  mappingTranslation: 0.536,
                  total: 50.1765
              }
            ],
          "datatype": "8",
          "substitution": "3"
      },
      "q4": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 3.5068,
                  schemaCreationLoad: 3.0494,
                  mappingTranslation: 0.5222,
                  total: 7.0822
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 6.3778,
                  schemaCreationLoad: 5.7111,
                  mappingTranslation: 0.5093,
                  total: 12.6021
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 12.4592,
                  schemaCreationLoad: 12.542,
                  mappingTranslation: 0.5128,
                  total: 25.5179
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 24.5968,
                  schemaCreationLoad: 30.7087,
                  mappingTranslation: 0.5327,
                  total: 55.842
              }
            ],
          "datatype": "2",
          "substitution": "2"
      },
      "q5": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0037,
                  normalization: 0.0001,
                  dataPreparation: 3.4247,
                  schemaCreationLoad: 2.6484,
                  mappingTranslation: 0.5046,
                  total: 6.5814
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 7.1667,
                  schemaCreationLoad: 6.0669,
                  mappingTranslation: 0.5268,
                  total: 13.7642
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 11.9694,
                  schemaCreationLoad: 11.45,
                  mappingTranslation: 0.5318,
                  total: 23.9551
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0037,
                  normalization: 0.0001,
                  dataPreparation: 23.6697,
                  schemaCreationLoad: 23.0889,
                  mappingTranslation: 0.5396,
                  total: 47.302
              }
            ],
          "datatype": "6",
          "substitution": "3"
      },
      "q6": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0039,
                  normalization: 0,
                  dataPreparation: 2.3183,
                  schemaCreationLoad: 0.1024,
                  mappingTranslation: 0.5239,
                  total: 2.9485
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0033,
                  normalization: 0,
                  dataPreparation: 3.1491,
                  schemaCreationLoad: 0.1685,
                  mappingTranslation: 0.5087,
                  total: 3.8296
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0035,
                  normalization: 0,
                  dataPreparation: 5.2546,
                  schemaCreationLoad: 0.2683,
                  mappingTranslation: 0.5143,
                  total: 6.0408
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0036,
                  normalization: 0,
                  dataPreparation: 10.401,
                  schemaCreationLoad: 0.4345,
                  mappingTranslation: 0.4936,
                  total: 11.3328
              }
            ],
          "datatype": "0",
          "substitution": "1"
      },
      "q7": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.004,
                  normalization: 0.0001,
                  dataPreparation: 20.7498,
                  schemaCreationLoad: 5.8194,
                  mappingTranslation: 0.5636,
                  total: 27.1369
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.004,
                  normalization: 0.0001,
                  dataPreparation: 42.1908,
                  schemaCreationLoad: 12.6681,
                  mappingTranslation: 0.5458,
                  total: 55.4089
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0042,
                  normalization: 0.0001,
                  dataPreparation: 83.4856,
                  schemaCreationLoad: 25.6928,
                  mappingTranslation: 0.5842,
                  total: 109.7669
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0044,
                  normalization: 0.0001,
                  dataPreparation: 198.9749,
                  schemaCreationLoad: 55.6235,
                  mappingTranslation: 0.5804,
                  total: 255.1833
              }
            ],
          "datatype": "11",
          "substitution": "2"
      },
      "q8": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 28.6568,
                  schemaCreationLoad: 14.1682,
                  mappingTranslation: 0.5513,
                  total: 43.3802
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0035,
                  normalization: 0.0001,
                  dataPreparation: 61.5915,
                  schemaCreationLoad: 30.6142,
                  mappingTranslation: 0.5513,
                  total: 92.7606
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 122.1732,
                  schemaCreationLoad: 67.6765,
                  mappingTranslation: 0.554,
                  total: 190.4076
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0041,
                  normalization: 0.0001,
                  dataPreparation: 293.0871,
                  schemaCreationLoad: 136.0903,
                  mappingTranslation: 0.5834,
                  total: 429.7649
              }
            ],
          "datatype": "8",
          "substitution": "8"
      },
      "q9": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0036,
                  normalization: 0.0001,
                  dataPreparation: 13.3971,
                  schemaCreationLoad: 1.2227,
                  mappingTranslation: 0.519,
                  total: 15.1425
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0036,
                  normalization: 0.0001,
                  dataPreparation: 24.1354,
                  schemaCreationLoad: 2.2266,
                  mappingTranslation: 0.5118,
                  total: 26.8774
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0034,
                  normalization: 0,
                  dataPreparation: 47.8334,
                  schemaCreationLoad: 5.2435,
                  mappingTranslation: 0.5535,
                  total: 53.6338
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0037,
                  normalization: 0.0001,
                  dataPreparation: 110.8523,
                  schemaCreationLoad: 10.037,
                  mappingTranslation: 0.5032,
                  total: 121.3961
              }
            ],
          "datatype": "0",
          "substitution": "0"
      },
      "q10": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0038,
                  normalization: 0.0001,
                  dataPreparation: 7.4326,
                  schemaCreationLoad: 3.8943,
                  mappingTranslation: 0.5692,
                  total: 11.9
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.004,
                  normalization: 0.0001,
                  dataPreparation: 13.9073,
                  schemaCreationLoad: 8.0035,
                  mappingTranslation: 0.5194,
                  total: 22.4342
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0039,
                  normalization: 0.0001,
                  dataPreparation: 29.4198,
                  schemaCreationLoad: 15.2676,
                  mappingTranslation: 0.5745,
                  total: 45.2659
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0036,
                  normalization: 0.0001,
                  dataPreparation: 57.8784,
                  schemaCreationLoad: 32.0361,
                  mappingTranslation: 0.5625,
                  total: 90.4808
              }
            ],
          "datatype": "7",
          "substitution": "2"
      },
      "q11": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0044,
                  normalization: 0.0002,
                  dataPreparation: 43.7319,
                  schemaCreationLoad: 27.0343,
                  mappingTranslation: 0.5715,
                  total: 71.3422
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0051,
                  normalization: 0.0002,
                  dataPreparation: 85.4322,
                  schemaCreationLoad: 56.776,
                  mappingTranslation: 0.5693,
                  total: 142.7827
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0047,
                  normalization: 0.0002,
                  dataPreparation: 185.6499,
                  schemaCreationLoad: 137.5224,
                  mappingTranslation: 0.6069,
                  total: 323.7841
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.0046,
                  normalization: 0.0002,
                  dataPreparation: 415.0521,
                  schemaCreationLoad: 262.529,
                  mappingTranslation: 0.6318,
                  total: 678.2176
              }
            ],
          "datatype": "29",
          "substitution": "53"
      },
      "q12": {
          executiontimes: [
               {
                   size:45,
                   key:'1',
                  selection: 0.0041,
                  normalization: 0.0001,
                  dataPreparation: 8.4426,
                  schemaCreationLoad: 5.1514,
                  mappingTranslation: 0.5407,
                  total: 14.139
              },
               {
                   size:90,
                   key:'2',
                  selection: 0.0039,
                  normalization: 0.0001,
                  dataPreparation: 16.0586,
                  schemaCreationLoad: 10.6385,
                  mappingTranslation: 0.5461,
                  total: 27.2472
              },
                {
                    size:180,
                    key:'3',
                  selection: 0.0036,
                  normalization: 0.0001,
                  dataPreparation: 34.682,
                  schemaCreationLoad: 21.4108,
                  mappingTranslation: 0.5989,
                  total: 56.6955
              },
               {
                   size:360,
                   key:'4',
                  selection: 0.004,
                  normalization: 0.0001,
                  dataPreparation: 66.7594,
                  schemaCreationLoad: 44.7156,
                  mappingTranslation: 0.5403,
                  total: 112.0194
              }
            ],
          "datatype": "6",
          "substitution": "7"
      }
  },
    "bio2rdf":{
        "q1":{
        "datatype": 0,
        "substitution": 3
          },
        "q2":{
        "datatype": 0,
        "substitution": 7
          },
        "q3":{
        "datatype": 0,
        "substitution": 5
          },
        "q4":{
        "datatype": 0,
        "substitution": 7
          },
        "q5":{
        "datatype": 0,
        "substitution": 6
          },
        "q6":{
        "datatype": 0,
        "substitution": 2
          },
        "q7":{
        "datatype": 1,
        "substitution": 5
          }    
    }      
  }
export {data, evaluation, queryMetrics};